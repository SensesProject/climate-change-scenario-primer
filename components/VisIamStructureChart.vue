<template>
  <g
    ref="VisIamStructureChart"
    :transform="transform"
    :opacity="opacity"
    class="VisIamStructureChart">
    <g :transform="`translate(${-width / 2} 0)`">
      <rect
        :width="width"
        :height="height"
        class="background"/>
      <g v-if="visible">
        <polygon
          :transform="`translate(0 ${height})`"
          :points="graph"
          :class="[element.color]"/>
        <g :transform="`translate(${ width / 2 } 0)`">
          <text
            y="6"
            class="label">{{ element.name }}</text>
          <line
            v-if="dashIn"
            :y1="-padding.y / 2"
            :y2="0"
            :class="[element.color]"/>
          <line
            v-if="dashOut"
            :y1="height"
            :y2="height + padding.y / 2"
            :class="[element.color]"/>
        </g>
      </g>
    </g>
  </g>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0
    },
    element: {
      type: Object,
      default: null
    },
    padding: {
      type: Object,
      default () { return { x: 8, y: 8 } }
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    transform: {
      type: String,
      default: `translate(0 0)`
    },
    opacity: {
      type: Number,
      default: 1
    },
    scenario: {
      type: String,
      default: `l001t0`
    }
  },
  data () {
    return {
      points: [],
      animation: null
    }
  },
  computed: {
    visible () {
      const { step, element } = this
      const { minStep, maxStep } = element
      return (minStep == null || step >= minStep) && (maxStep == null || step <= maxStep)
    },
    dashIn () {
      const { step, element } = this
      const { dash } = element
      return dash == null || !(dash.in === false || dash.in > step)
    },
    dashOut () {
      const { step, element } = this
      const { dash } = element
      return dash == null || !(dash.out === false || dash.out > step)
    },
    textHeight () {
      return 18
    },
    graphHeight () {
      return this.height - this.textHeight
    },
    graph () {
      const { graphHeight, element, scenario, width } = this
      const scaleX = width / (element.data[scenario].length - 1)
      const scaleY = -graphHeight / element.data.max
      const points = this.points.map((y, x) => `${x * scaleX},${y * scaleY}`).join(' ')
      return `0,0 ${points} ${width},0`
    }
  },
  watch: {
    scenario: {
      handler (newVal, oldVal) {
        if (cancelAnimationFrame == null) return
        cancelAnimationFrame(this.animation)
        this.animation = requestAnimationFrame(t => {
          this.animate(newVal, this.points.map(d => d), 200, t, t)
        })
      }
    }
  },
  created () {
    this.points = this.element.data[this.scenario]
  },
  methods: {
    animate (scenario, oldData, duration, start, t) {
      const newData = this.element.data[scenario]

      const step = Math.max(0, (start + duration - t) / duration)
      this.points = newData.map((d, i) => {
        return +d + (oldData[i] - d) * step
      })
      if (step > 0) {
        this.animation = requestAnimationFrame(t => {
          this.animate(scenario, oldData, duration, start, t)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisIamStructureChart {
  .background {
    // fill: $color-pale-gray;
    fill: $color-black;
  }

  polygon {
    &.yellow {
      fill: $color-yellow
    }

    &.green {
      fill: $color-green
    }

    &.blue {
      fill: $color-blue
    }

    &.red {
      fill: $color-red
    }

    &.violet {
      fill: $color-violet
    }
  }

  line {
    stroke-width: 2;
    stroke: $color-light-gray;

    &.yellow {
      stroke: $color-yellow
    }

    &.green {
      stroke: $color-green
    }

    &.blue {
      stroke: $color-blue
    }

    &.red {
      stroke: $color-red
    }

    &.violet {
      stroke: $color-violet
    }
  }

  .label {
    dominant-baseline: hanging;
    text-anchor: middle;
    font-size: 14px;
    fill: $color-pale-gray;
  }
}
</style>
