<template>
  <div
    ref="VisChart"
    class="VisChart">
    <svg
      :style="{'stroke-width': strokeWidth, 'font-size': `${fontSize}px`}"
      width="100%"
      viewBox="0 0 100 75">
      <g class="lines">
        <polyline
          v-for="line in lines"
          :key="line.name"
          v-bind="line.attrs"/>
      </g>
      <g
        class="axis x-axis"
        transform="translate(0, 75)">
        <text
          y="0.8em"
          class="left">2005</text>
        <text
          y="0.8em"
          x="100"
          class="right">2100</text>
      </g>
      <g class="axis y-axis">
        <text
          y="-0.8em"
          class="left">{{ variable }}</text>
        <g
          v-for="(tick, i) in ticks"
          :key="`tick-${i}`"
          :transform="`translate(0 ${tick.y})`"
          class="tick">
          <text y="-0.25em">{{ tick.value }}</text>
          <line
            :class="{zero: tick.value === '0'}"
            x2="100"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import { format } from 'd3-format'
export default {
  props: {
    scenario: {
      type: String,
      default: 'gdp'
    },
    max: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      width: 0,
      years: [2005, 2010, 2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100]
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    data () {
      return this.$store.getters.scenario(this.scenario)
    },
    variable () {
      return `${this.data[0].variable} in ${this.data[0].unit}`
    },
    strokeWidth () {
      return (100 / this.width)
    },
    fontSize () {
      if (this.width === 0) return 1
      return (100 / this.width) * 16
    },
    xScale () {
      return scaleLinear().domain([Math.min(...this.years), Math.max(...this.years)]).range([0, 100])
    },
    yDomain () {
      const values = this.data.map(scenario => this.years.map(year => scenario[year]))
        .reduce((a, b) => a.concat(b), [])
      // return [Math.min(0, ...values), this.max ? this.max : Math.max(...values)]
      return [0, this.max ? this.max : Math.max(...values)]
    },
    yScale () {
      return scaleLinear().domain(this.yDomain).range([75, 0]).nice()
    },
    lines () {
      const { data, strokeWidth, years, xScale, yScale } = this
      return data.map(scenario => {
        return {
          name: scenario.rcp === 'Baseline' ? scenario.ssp : `${scenario.ssp}-RCP${scenario.rcp}`,
          attrs: {
            class: [scenario.ssp, `RCP${scenario.rcp}`],
            style: {'stroke-width': strokeWidth * 2},
            points: years.map(year => `${xScale(year)},${yScale(scenario[year])}`).join(' ')
          }
        }
      })
    },
    ticks () {
      return this.yScale.ticks(4)
        .map(value => ({value: format(',.0f')(value), y: this.yScale(value)})).filter(tick => tick.y > this.fontSize)
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    }
  },
  mounted () {
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.VisChart.getBoundingClientRect().width
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisChart {
  svg {
    overflow: visible;
    margin: 1.3rem 0;
    font-family: $font-mono;

    text {
      dominant-baseline: central;
    }

    .lines {
      polyline {
        fill: none;
        mix-blend-mode: multiply;
        &.SSP1 {
          stroke: $color-green;
        }
        &.SSP2 {
          stroke: $color-blue;
        }
        &.SSP3 {
          stroke: $color-red;
        }
        &.SSP4 {
          stroke: $color-yellow;
        }
        &.SSP5 {
          stroke: $color-violet;
        }

        &.RCP60 {
          opacity: 0.8;
        }
        &.RCP45 {
          opacity: 0.6;
        }
        &.RCP34 {
          opacity: 0.4;
        }
        &.RCP26 {
          opacity: 0.2;
        }
      }
    }

    .axis {
      line {
        stroke: $color-light-gray;
        shape-rendering: crispEdges;

        &.zero {
          stroke: $color-black;
        }
      }

      &.x-axis {
        text {
          &.left {

          }

          &.right {
            text-anchor: end;
          }
        }
      }
      &.y-axis {
        .tick {
          text {
            dominant-baseline: unset;
          }
        }
      }
    }
  }
}
</style>
