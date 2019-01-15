<template>
  <div
    ref="cycle"
    class="VisCycle">
    <svg
      :style="{'stroke-width': strokeWidth}"
      :height="width"
      class="hide-print"
      width="100%"
      viewBox="-50 -50 100 100">
      <g
        v-for="(item, i) in items"
        :key="`item-${i}`"
        :class="{'reduce-impact': reduceImpact}"
        v-bind="item.parent">
        <circle v-bind="item.circle"/>
        <path v-bind="item.arc"/>
        <path v-bind="item.arrowHead"/>
      </g>
    </svg>
    <div
      v-for="(item, i) in items"
      :key="`item-${i}`"
      :class="{'reduce-impact': reduceImpact, 'hide-print': true}"
      v-bind="item.text"
      class="label"
      v-html="item.term"/>
    <div
      v-if="reduceImpact"
      class="label yellow mitigation hide-print">Mitigation</div>
    <div
      v-if="reduceImpact"
      class="label red adaptation hide-print">Adaptation</div>

    <!-- Fallback images for print. Update when changing vis! -->
    <img
      v-if="!reduceImpact"
      class="print-only"
      src="~/assets/img/vis-print-fallbacks/VisCycleCircle.jpg"
      alt="">
    <img
      v-if="reduceImpact"
      class="print-only"
      src="~/assets/img/vis-print-fallbacks/VisCycleCircle-reduced.jpg"
      alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    reduceImpact: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      width: 0,
      colors: ['#39C88A', '#FEAE00', '#C8005F', '#4E40B2', '#00A5D5'],
      terms: [
        'Socioeconomic<br>Development',
        'Energy &<br>Land Use',
        'Emissions',
        'Climate<br>Change',
        'Climate<br>Impacts'
      ]
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    items () {
      const { terms, colors } = this
      return terms.map((term, i) => {
        const radius = 45
        const circleRadius = 5
        const arcOffset = 15
        const cycleOffset = -72
        const arcStartOffset = i === 0 ? 5 : 0

        const cycleOffsetRad = Math.PI * 2 * cycleOffset / 360
        const arcOffsetRad = Math.PI * 2 * arcOffset / 360
        const arcStartOffsetRad = Math.PI * 2 * arcStartOffset / 360
        const arcStartRad = cycleOffsetRad + arcOffsetRad + arcStartOffsetRad
        const arcEndRad = Math.PI * 2 / terms.length + cycleOffsetRad - arcOffsetRad

        const start = {
          x: Math.cos(cycleOffsetRad) * radius,
          y: Math.sin(cycleOffsetRad) * radius
        }
        const arcStart = {
          x: Math.cos(arcStartRad) * radius,
          y: Math.sin(arcStartRad) * radius
        }
        const arcEnd = {
          x: Math.cos(arcEndRad) * radius,
          y: Math.sin(arcEndRad) * radius
        }
        const absoluteStart = {
          x: Math.cos(cycleOffsetRad + Math.PI * 2 / terms.length * i) * radius,
          y: Math.sin(cycleOffsetRad + Math.PI * 2 / terms.length * i) * radius
        }
        return {
          term,
          parent: {
            transform: `rotate(${360 / terms.length * i})`
          },
          arc: {
            d: `M ${arcStart.x} ${arcStart.y} A ${radius} ${radius} 0 0 1 ${arcEnd.x} ${arcEnd.y}`,
            stroke: colors[i]
          },
          circle: {
            cy: start.y,
            cx: start.x,
            r: circleRadius,
            fill: colors[i]
          },
          arrowHead: {
            transform: `translate(${arcEnd.x} ${arcEnd.y}) rotate(72)`,
            d: 'M -2 -2 L 0 0 -2 2',
            stroke: colors[i]
          },
          text: {
            style: {
              color: colors[i],
              left: `${50 + circleRadius + absoluteStart.x}%`,
              top: `${50 + absoluteStart.y}%`
            }
          }
        }
      })
    },
    strokeWidth () {
      return (100 / this.width) * 2
    },
    fontSize () {
      return (100 / this.width) * 16
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    }
  },
  mounted () {
    this.$emit('setMaxWidth', 320)
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.cycle.getBoundingClientRect().width
        this.$emit('setHeight', this.width)
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisCycle {
  width: calc(100% - 90px);
  max-width: 480px;
  position: relative;
  margin-right: 90px;

  .label {
    position: absolute;
    transform: translate(#{$spacing * 0.25}, -50%);
    line-height: 1.1;
    white-space: nowrap;
    font-weight: bold;
    text-shadow: 0 0 4px $color-white, 0 0 4px $color-white, 0 0 4px $color-white, 0 0 4px $color-white;

    @include media-query($device-narrow) {
      transform: translate(#{$spacing * 0.5}, -50%);
    }

    &.reduce-impact {
      color: $color-light-gray !important;
    }

    &.mitigation {
      top: 54%;
      right: 22%;
    }
    &.adaptation {
      top: 38%;
      left: 17%;
    }
  }

  svg {
    display: block;

    path {
      fill: none;
    }

    .reduce-impact {
      circle {
        fill: $color-light-gray !important;
      }

      path {
        stroke: $color-light-gray !important;
      }

      &:nth-of-type(1), &:nth-of-type(2) {
        path {
          stroke: $color-yellow !important;
        }
      }

      &:nth-of-type(4), &:nth-of-type(5) {
        path {
          stroke: $color-red !important;
        }
      }
    }

    .item-circle {
      fill: $color-gray;
      stroke: $color-white;
      transition: fill .2s;
    }

    .item-text, .item-shadow {
      fill: $color-light-gray;
      dominant-baseline: central;
    }

    .item-shadow {
      stroke: $color-white;
    }
  }
}
</style>
