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
          v-for="(line, i) in lines"
          :key="`${line.name}-${i}`"
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
    <div
      v-if="legend"
      class="key">
      <span
        v-for="(scenario, i) in lines"
        :key="`key-${i}`"
        class="key-item"><span
          :class="scenario.attrs.class"
          class="dot"/>&nbsp;{{ scenario.name }} </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { scaleLinear } from 'd3-scale'
import { format } from 'd3-format'
export default {
  props: {
    scenario: {
      type: String,
      default: 'gdp'
    },
    legend: {
      type: String,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    staticFilter: {
      type: Object,
      default: null
    },
    dynamicFilter: {
      type: String,
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
    ...mapFields({
      highlightSsp: 'charts.ssp',
      filter: 'charts.filter'
    }),
    data () {
      if (this.dynamicFilter !== null) {
        console.log('DYNAMIC')
        return this.$store.getters.scenario(this.scenario).filter(scenario => {
          return scenario.ssp === (this.filter || this.dynamicFilter)
        })
      }
      if (this.staticFilter !== null) {
        return this.$store.getters.scenario(this.scenario).filter(scenario => {
          const ssp = this.staticFilter.ssp === null || this.staticFilter.ssp === scenario.ssp
          const rcp = this.staticFilter.rcp === null || this.staticFilter.rcp === scenario.rcp
          return ssp && rcp
        })
      }
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
      const { data, strokeWidth, years, xScale, yScale, highlightSsp } = this
      return data.map(scenario => {
        const name = this.legend === 'ssp' ? scenario.ssp : scenario.rcp === 'Baseline' ? `Baseline` : `RCP${scenario.rcp}`
        return {
          name,
          attrs: {
            class: [
              scenario.ssp,
              `RCP${scenario.rcp}`,
              {
                fade: (highlightSsp !== null && highlightSsp !== scenario.ssp)
              }
            ],
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
    },
    'filter' () {
      if (this.filter === null) this.filter = this.dynamicFilter
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
    margin: 1.3rem 0 0.8rem;
    font-family: $font-mono;

    text {
      dominant-baseline: central;
    }

    .lines {
      polyline {
        fill: none;
        transition: stroke .1s;
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
        &.fade {
          stroke: $color-light-gray;
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
          fill: $color-dark-gray;
          &.right {
            text-anchor: end;
          }
        }
      }
      &.y-axis {
        .tick {
          text {
            fill: $color-dark-gray;
            dominant-baseline: unset;
          }
        }
      }
    }
  }
  .key {
    cursor: default;
    .key-item {
      padding-right: 0.5em;

      .dot {
        height: 0.7em;
        width: 0.7em;
        border-radius: 50%;
        display: inline-block;

        &.SSP1 {
          background: $color-green;
        }
        &.SSP2 {
          background: $color-blue;
        }
        &.SSP3 {
          background: $color-red;
        }
        &.SSP4 {
          background: $color-yellow;
        }
        &.SSP5 {
          background: $color-violet;
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
  }
}
</style>
