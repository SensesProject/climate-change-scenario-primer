<template>
  <div
    ref="cycle"
    class="VisCycle">
    <svg
      :style="{'stroke-width': strokeWidth}"
      :height="width"
      width="100%"
      viewBox="-50 -50 100 100">
      <circle
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
      </g>
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
      colors: ['#8665C7', '#FEAE00', '#39C88A', '#C8005F', '#00A5D5'],
      radius: 40,
      terms: [
        'Socioeconomics',
        'Energy & Land Use',
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
    circles () {
      const { terms, radius } = this
      return terms.map((term, i) => {
        const offset = (Math.PI / terms.length) * (-2 + 2 * i)
        const x = Math.cos(offset) * radius
        const y = Math.sin(offset) * radius
        return { term, x, y }
      })
    },
    items () {
      const { circles, strokeWidth, step, fontSize } = this
      return circles.map(({ term, x, y }, i) => {
        let color = null
        if (step < 5 && i === step) {
          color = 'yellow'
        }
        if (step === 5) {
          if (i === 0) color = 'green'
          if (i === 2) color = 'blue'
          if (i === 4) color = 'red'
        }
        if (step === 6) {
          if (i <= 1) color = 'green'
          if (i === 4) color = 'red'
        }
        if (step === 7) {
          if (i <= 2) color = 'green'
          if (i === 3) color = 'violet'
          if (i === 4) color = 'red'
        }
        return {
          term,
          transform: `translate(${x}, ${y})`,
          circle: {
            r: 4,
            'stroke-width': strokeWidth * 2,
            class: [color]
          },
          text: {
            style: {
              'font-size': `${fontSize}px`,
              'text-anchor': i <= 2 ? 'end' : 'start'
            },
            transform: `translate(${i <= 2 ? -5 : 5} 0)`,
            'stroke-width': strokeWidth * 2,
            class: [color]
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
  width: 100%;
  max-width: 320px;

  svg {
    .line {
      fill: none;
      stroke: $color-light-gray;
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
