<template>
  <div
    ref="cycle"
    class="VisCycle">
    <svg
      :style="{'stroke-width': strokeWidth}"
      :height="width"
      width="100%"
      viewBox="-50 -50 100 100">
      <g
        v-for="(item, i) in items"
        :key="`item-${i}`"
        v-bind="item.parent">
        <circle v-bind="item.circle"/>
        <path v-bind="item.arc"/>
        <path v-bind="item.arrowHead"/>
      </g>
      <!-- <circle
        :r="radius"
        class="line"/>
      <g>
      <g
        v-for="item in items"
        :key="`item-${item.term}`"
        :transform="item.transform">
        <circle
          v-bind="item.circle"
          class="item-circle"/>
        <text
          v-bind="item.text"
          class="item-shadow">{{ item.term }}</text>
        <text
          v-bind="item.text"
          class="item-text">{{ item.term }}</text>
      </g>
      </g> -->
    </svg>
    <div
      v-for="(item, i) in items"
      :key="`item-${i}`"
      v-bind="item.text"
      class="label"
      v-html="item.term"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      colors: ['#39C88A', '#FEAE00', '#C8005F', '#4E40B2', '#00A5D5'],
      radius: 40,
      terms: [
        'Socioeconomic<br>Development',
        'Energy &<br>Land Use',
        'Emissions',
        'Climate',
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
        const radius = 40
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
    circles () {
      const { terms, radius } = this
      return terms.map((term, i) => {
        const offset = (Math.PI / terms.length) * (-2 + 2 * i)
        const x = Math.cos(offset) * radius
        const y = Math.sin(offset) * radius
        return { term, x, y }
      })
    },
    // items () {
    //   const { circles, strokeWidth, step, fontSize } = this
    //   return circles.map(({ term, x, y }, i) => {
    //     let color = null
    //     if (step < 5 && i === step) {
    //       color = 'yellow'
    //     }
    //     if (step === 5) {
    //       if (i === 0) color = 'green'
    //       if (i === 2) color = 'blue'
    //       if (i === 4) color = 'red'
    //     }
    //     if (step === 6) {
    //       if (i <= 1) color = 'green'
    //       if (i === 4) color = 'red'
    //     }
    //     if (step === 7) {
    //       if (i <= 2) color = 'green'
    //       if (i === 3) color = 'violet'
    //       if (i === 4) color = 'red'
    //     }
    //     return {
    //       term,
    //       transform: `translate(${x}, ${y})`,
    //       circle: {
    //         r: 4,
    //         'stroke-width': strokeWidth * 2,
    //         class: [color]
    //       },
    //       text: {
    //         style: {
    //           'font-size': `${fontSize}px`,
    //           'text-anchor': i <= 2 ? 'end' : 'start'
    //         },
    //         transform: `translate(${i <= 2 ? -5 : 5} 0)`,
    //         'stroke-width': strokeWidth * 2,
    //         class: [color]
    //       }
    //     }
    //   })
    // },
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
  }

  svg {
    display: block;
    .line {
      fill: none;
      stroke: $color-light-gray;
    }

    path {
      fill: none;
    }

    .item-circle, .item-text {
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
