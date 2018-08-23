<template>
  <div
    ref="cycle"
    class="VisScenarioTypes">
    <svg
      :style="{'stroke-width': strokeWidth, 'font-size': `${fontSize}px`}"
      :height="width / 2"
      width="100%"
      viewBox="0 0 100 50">
      <path
        class="range"
        d="M30,35 Q60,20,100,40 L100,0"/>
      <path
        class="pathway"
        d="M30,35 Q60,20,100,40"/>
      <path
        class="pathway"
        d="M30,35 Q60,20,100,20"/>
      <path
        class="projection"
        d="M30,35 L100,0"/>
      <path
        :d="`M${strokeWidth},${50 - strokeWidth / 2} L30,35`"
        class="past"/>
      <path
        :style="{'stroke-width': strokeWidth / 2}"
        :d="`M30,50 L30,${35 + strokeWidth * 4}`"
        class="now"/>
      <circle
        :r="strokeWidth * 1.5"
        class="now"
        cx="30"
        cy="35"/>
      <circle
        :r="strokeWidth * 1.5"
        class="projection"
        cx="100"
        cy="0"/>
      <circle
        :r="strokeWidth * 1.5"
        class="goal"
        cx="100"
        cy="40"/>
      <circle
        :r="strokeWidth * 1.5"
        class="goal"
        cx="100"
        cy="20"/>
      <text
        :x="100 + strokeWidth * 4"
        dominant-baseline="middle"
        class="projection">Projection</text>
      <text
        :x="100 + strokeWidth * 4"
        y="40"
        dominant-baseline="middle"
        class="goal">Goal B</text>
      <text
        :x="100 + strokeWidth * 4"
        y="20"
        dominant-baseline="middle"
        class="goal">Goal A</text>
      <text
        :x="100 + strokeWidth * 4"
        y="40"
        dominant-baseline="middle"
        class="pathway">Pathway B</text>
      <text
        :x="100 + strokeWidth * 4"
        y="20"
        dominant-baseline="middle"
        class="pathway">Pathway A</text>
      <text
        :y="50 + strokeWidth * 1"
        dominant-baseline="hanging">Past</text>
      <text
        :y="50 + strokeWidth * 1"
        x="30"
        text-anchor="middle"
        dominant-baseline="hanging">Now</text>
      <text
        :y="50 + strokeWidth * 1"
        x="100"
        text-anchor="end"
        dominant-baseline="hanging">Future</text>
    </svg>
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
      colors: ['#4E40B2', '#00A5D5', '#39C88A', '#FEAE00', '#C8005F'],
      radius: 40,
      terms: [
        'Socioeconomics',
        'Energy &<br>Land Use',
        'Emissions',
        'Climate',
        'Climate Impacts'
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

        const cycleOffsetRad = Math.PI * 2 * cycleOffset / 360
        const arcOffsetRad = Math.PI * 2 * arcOffset / 360
        const arcStartRad = cycleOffsetRad + arcOffsetRad
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
        this.width = this.$refs.cycle.getBoundingClientRect().width - 90
        this.$emit('setHeight', this.width)
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisScenarioTypes {
  width: calc(100%);
  max-width: 760px;
  position: relative;
  // margin-right: 90px;

  svg {
    width: calc(100% - 90px);
    overflow: visible;
    path {
      fill: none;
      &.projection {
        stroke: $color-green;
      }
      &.past {
        stroke: $color-black;
      }
      &.now {
        stroke: $color-black;
      }
      &.pathway {
        stroke: $color-blue;
        animation-name: step2;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }
      &.range {
        opacity: 0.1;
        fill: $color-blue;
        animation-name: step2b;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }
    }

    circle {
      &.now {
        fill: $color-black;
      }
      &.projection {
        fill: $color-green;
      }
      &.goal {
        fill: $color-blue;
      }
    }

    text {
      &.projection {
        font-weight: bold;
        fill: $color-green
      }
      &.goal, &.pathway {
        font-weight: bold;
        fill: $color-blue
      }

      &.goal {
        animation-name: step1;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }

      &.pathway {
        animation-name: step2;
        animation-duration: 6s;
        animation-iteration-count: infinite;
      }
    }
  }

  @keyframes step1 {
    0%   {opacity: 1;}
    40%  {opacity: 1;}
    50%  {opacity: 0;}
    90%  {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes step2 {
    0%   {opacity: 0;}
    40%  {opacity: 0;}
    50%  {opacity: 1;}
    90%  {opacity: 1;}
    100% {opacity: 0;}
  }
  @keyframes step2b {
    0%   {opacity: 0;}
    40%  {opacity: 0;}
    50%  {opacity: 0.1;}
    90%  {opacity: 0.1;}
    100% {opacity: 0;}
  }
}
</style>
