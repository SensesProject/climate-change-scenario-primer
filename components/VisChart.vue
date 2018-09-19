<template>
  <div
    ref="VisChart"
    class="VisChart">
    <svg
      :style="{'stroke-width': strokeWidth, 'font-size': `${fontSize}`}"
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
          class="left sans">{{ variable }}</text>
        <g
          v-for="(tick, i) in ticks"
          :key="`tick-${i}`"
          :transform="`translate(0 ${tick.y})`"
          class="tick">
          <text
            v-if="tick.value !== '0'"
            y="-0.25em">{{ tick.value }}</text>
          <line
            :class="{zero: tick.value === '0'}"
            x2="100"/>
        </g>
      </g>
    </svg>
    <div
      :class="{relative: bothLegends}"
      class="key-wrapper">
      <div
        :class="{hide: hideLegend}"
        class="key extended">
        <span
          v-for="(scenario, i) in lines"
          v-show="!scenario.hideFromLegend"
          :key="`key-${i}`"
          class="key-item"><span
            :class="scenario.attrs.class"
            class="dot"/>&nbsp;{{ scenario.name }}</span>
      </div>
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
    bothLegends: {
      type: Boolean,
      default: false
    },
    hideLegend: {
      type: Boolean,
      default: false
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
      type: Array,
      default: null
    },
    legendFilter: {
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
      return `${(100 / this.width) * 0.9}rem`
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
      const { data, strokeWidth, years, xScale, yScale, highlightSsp, dynamicFilter, legendFilter } = this
      return data.map(scenario => {
        const name = this.legend === 'ssp' ? scenario.ssp : scenario.rcp === 'Baseline' ? `Baseline` : `RCP ${scenario.rcp}`
        return {
          name,
          attrs: {
            class: [
              scenario.ssp,
              `RCP${scenario.rcp}`,
              {
                fade: (dynamicFilter == null && highlightSsp !== null && highlightSsp !== scenario.ssp) || (dynamicFilter != null && !dynamicFilter.find(f => f === scenario.ssp))
              }
            ],
            style: {'stroke-width': strokeWidth * 2},
            points: years.map(year => `${xScale(year)},${yScale(scenario[year])}`).join(' ')
          },
          hideFromLegend: legendFilter != null && legendFilter !== scenario.ssp
        }
      })
    },
    ticks () {
      return this.yScale.ticks(4)
        .map(value => ({value: format(',.0f')(value), y: this.yScale(value)})).filter(tick => tick.y > (100 / this.width) * 18)
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
    margin: 1.3rem 0 0.8rem;
    font-family: $font-mono;

    text {
      dominant-baseline: central;
    }

    .sans {
      font-family: $font-sans;
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
        stroke: $color-black;
        shape-rendering: crispEdges;
        mix-blend-mode: multiply;
        opacity: 0.2;

        &.zero {
          opacity: 1;
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
  .key-wrapper {
    height: 0.9rem;

    &.relative {
      position: relative;

      .key {
        width: 100%;
      }
    }

    .key {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;

      @include media-query($device-narrow) {
        &.hide {
          display: none;
        }
      }

      cursor: default;

      font-size: 0.8rem;
      @include media-query(360px) {
        font-size: 0.9rem;
      }
      .key-item {
        padding-right: 0.5em;
        white-space: nowrap;

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
}
</style>
