<template>
  <div
    ref="VisIamStructure"
    class="VisIamStructure">
    <svg
      v-if="width > 0"
      height="100%"
      width="100%">
      <VisIamStructureChart
        v-for="(element, i) in elements"
        :key="`element-${i}`"
        :element="element"
        :padding="padding"
        :transform="element.transform"
        :width="chartWidth"
        :height="chartHeight"
        :step="step"
        :scenario="scenario"/>
      <polyline
        v-for="(line, i) in lines"
        v-if="line.show"
        :key="`line-${i}`"
        :points="line.points"
        :class="line.color"/>
      <g/>
      <g
        v-if="step >= 2"
        :transform="`translate(${transformX(0.8)} ${padding.y / 2 + 2})`">
        <text :y="transformY(1)">
          <tspan x="0">Investments in:</tspan>
          <!-- <tspan
            x="0"
            dy="1.2em">Energy</tspan> -->
        </text>
        <text :y="transformY(2)">
          <tspan x="0">Produced:</tspan>
          <!-- <tspan
            x="0"
            dy="1.2em">Energy</tspan> -->
        </text>
      </g>
    </svg>
    <div
      v-if="step >= 3"
      class="options">
      <div class="input">
        <input
          id="in1"
          v-model="highPopulationGrowth"
          type="checkbox"
          name="check">
        <label for="in1">
          <div class="circle"/>
        </label>
        High population growth
      </div>
      <div class="input">
        <input
          id="in2"
          v-model="carbonTax"
          type="checkbox"
          name="check">
        <label for="in2">
          <div class="circle"/>
        </label>
        Carbon Tax
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      width: 0,
      height: 0,
      highPopulationGrowth: false,
      carbonTax: false
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    ...mapGetters([
      'iam'
    ]),
    padding () {
      const { width, height } = this
      const x = (width - 4 * 16) / 3 < 84 ? 8 : 16
      const y = (height - 5.5 * 24) / 6 < 56 ? 16 : 24
      return { x, y }
    },
    chartWidth () {
      const { width, padding } = this
      return (width - 4 * padding.x) / 3
    },
    chartHeight () {
      const { height, padding } = this
      return (height - 5.5 * padding.y) / 6
    },
    elements () {
      const { transformX, transformY, iam } = this
      return iam.elements.map(element => {
        return {
          ...element,
          transform: `translate(${transformX(element.x)} ${transformY(element.y)})`
        }
      })
    },
    lines () {
      const { iam, width, height, transformX, transformY, step } = this
      return iam.lines.map(({points, color, minStep, maxStep}) => {
        return {
          color,
          show: (minStep == null || step >= minStep) && (maxStep == null || step <= maxStep),
          points: points.map(p => {
            const x = p[0] === 'min' ? 1 : p[0] === 'max' ? width - 1 : transformX(p[0])
            const y = p[1] === 'min' ? 1 : p[1] === 'max' ? height - 1 : transformY(p[1])
            return `${x},${y}`
          }).join(' ')
        }
      })
    },
    scenario () {
      return `l00${this.highPopulationGrowth ? 5 : 1}t${this.carbonTax ? 15 : 0}`
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    },
    'step' (newVal, oldVal) {
      if (oldVal === 2 && newVal === 3) this.highPopulationGrowth = true
      if (newVal < 3) this.highPopulationGrowth = this.carbonTax = false
    }
  },
  mounted () {
    this.$emit('setMaxWidth', 500)
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.VisIamStructure.getBoundingClientRect().width
        this.height = this.$refs.VisIamStructure.getBoundingClientRect().height
        this.$emit('setHeight', this.height)
      })
    },
    transformX (x) {
      const { padding, chartWidth } = this
      return x * (padding.x + chartWidth) + padding.x * 0.5
    },
    transformY (y) {
      const { padding, chartHeight } = this
      return y * (padding.y + chartHeight)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisIamStructure {
  width: 100%;
  max-width: 500px;
  min-width: 288px;
  height: 80vh;
  max-height: 600px;

  svg {
    polyline {
      fill: none;
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

    text {
      font-size: 14px;
      dominant-baseline: hanging;
      text-anchor: end;
    }
  }

  .options {
    @include flex-row();
    width: 100%;
    margin-top: $spacing-unit * 0.25;
    flex-wrap: wrap;

    input[type=checkbox] {
      visibility: hidden;
      position: absolute;
      pointer-events: none;
    }

    .input {
      position: relative;
      font-size: 14px;

      &:last-of-type {
        margin-left: $spacing-unit;
      }

      label {
        margin-right: 0.3em;
        transform: translateY(-0.1em);
        display: inline-block;
        width: 2em;
        height: 1.1em;
        vertical-align: middle;
        top: 0;
        left: 0;
        background: $color-pale-gray;
        border-radius: 50px;
        border: 1px solid $color-light-gray;
        transition: background .1s;

        .circle {
          background: $color-white;
          border: 1px solid $color-gray;
          border-radius: 50%;
          width: 1.1em;
          height: 1.1em;
          transition: transform .1s;
          transform: translate(-1px, -1px);
          box-shadow: 1px 1px 3px rgba(0,0,0, 0.2)
        }
      }

      input[type=checkbox]:checked + label {
        background: $color-green;
        .circle {
          transform: translate(calc(1em - 1px), -1px);
        }
      }
    }
  }
}
</style>
