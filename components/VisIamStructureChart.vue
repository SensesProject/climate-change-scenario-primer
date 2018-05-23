<template>
  <g
    ref="VisIamStructureChart"
    :transform="transform"
    class="VisIamStructureChart">
    <g :transform="`translate(${-width / 2} ${padding.y * 0.5})`">
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
            y="2"
            class="label">{{ element.name }}</text>
          <line
            v-if="dashIn"
            :y1="-padding.y / 2"
            :y2="-2"
            :class="[element.color]"/>
          <line
            v-if="dashOut"
            :y1="height + 2"
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
    scenario: {
      type: String,
      default: `l001t0`
    }
  },
  data () {
    return {}
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

      const data = element.data[scenario]
      const scaleX = width / (data.length - 1)
      const scaleY = -graphHeight / element.data.max

      const points = data.map((y, x) => `${x * scaleX},${y * scaleY}`).join(' ')

      return `0,0 ${points} ${width},0`
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisIamStructureChart {
  .background {
    fill: $color-pale-gray;
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
  }
}
</style>
