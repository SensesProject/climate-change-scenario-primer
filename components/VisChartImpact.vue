<template>
  <div
    ref="VisChartImpact"
    class="VisChartImpact">
    <div class="title">{{ variable }}</div>
    <div class="axis-label">Change in global land affected</div>
    <svg
      :height="height"
      width="100%"
      viewBox="0 0 100 77">
      <mask id="mask1">
        <rect
          width="62.5"
          height="85"/>
      </mask>
      <mask id="mask2">
        <rect
          width="50"
          height="85"/>
      </mask>
      <mask id="mask3">
        <rect
          width="100"
          height="85"/>
      </mask>
      <g
        :stroke-width="strokeWidth * 2"
        :font-size="fontSize">
        <g v-if="variable === 'Flood'">
          <g class="model model1">
            <polygon points="0.41 72.68 0.41 80.98 12.90 79.90 25.40 74.22 37.90 72.48 50.40 67.59 62.91 52.70 62.91 25.97 62.91 25.97 50.40 40.30 37.90 53.08 25.40 57.54 12.90 69.05"/>
            <polyline points="0.41 77.81 12.90 75.60 25.40 67.71 37.91 64.98 50.41 57.50 62.91 43.16"/>
          </g>
          <g class="model model2">
            <polygon points="0.41 70.58 0.41 82.12 12.90 80.41 25.41 73.60 37.90 71.96 50.41 66.25 50.41 36.46 50.41 36.46 37.90 53.92 25.41 56.90 12.90 67.06"/>
            <polyline points="0.41 77.98 12.90 75.13 25.40 67.60 37.91 66.02 50.41 51.00"/>
          </g>
          <g class="model model3">
            <polygon points="0 70.14 0 80.42 12.49 80.01 25 78.29 37.49 70.40 50 67.52 62.50 66.27 75 59.03 87.50 50.28 100 44.77 100 8.52 87.50 9.30 75 21.91 62.50 39.70 50 41.22 37.49 46.23 25 63.79 12.49 68.74"/>
            <polyline points="0 76.02 12.49 75.80 24.99 73.59 37.50 62.27 50 58.97 62.49 57.08 74.99 47.58 87.49 35.14 100 34.24"/>
          </g>
        </g>
        <g v-if="variable === 'Crop Failure'">
          <g
            class="model model1"
            transform="translate(0.000000, 41.000000)">
            <polygon points="0 30.7221 0 38.75 12.4999248 40.0013 24.9999749 38.1292 37.4998998 36.3851 49.9999499 32.8414 62.5 31.0314 62.5 0.3325 62.5 0.3325 49.9999499 4.5397 37.4998998 18.4134 24.9999749 25.0482 12.4999248 29.763"/>
            <polyline points="0 35.542995 12.4999875 35.81821 24.9999749 32.2465 37.5000251 29.62953 50.0000125 22.42625 62.5 17.7861"/>
          </g>
          <g
            class="model model2"
            transform="translate(0.000000, 51.000000)">
            <polygon points="0 15.2223 0 27.9304 12.4999374 27.7864 25 27.5013 37.4999374 27.1926 50 24.7377 50 0.4169 50 0.4169 37.4999374 8.581 25 10.486 12.4999374 16.0408"/>
            <polyline points="0 24.612985 12.4999843 24.595415 24.9999687 23.163875 37.5000157 22.14213 50 17.878285"/>
          </g>
          <g
            class="model model3"
            transform="translate(0.000000, -2.000000)">
            <polygon points="0 66.855 0 81.0748 12.4999374 80.2558 25 76.3655 37.4999374 69.2754 50 67.4241 62.5000626 66.0552 75 61.0492 87.5000626 53.8608 100 51.8096 100 1.2982 100 1.2982 87.5000626 0.984 75 7.3781 62.5000626 29.9174 50 31.0716 37.4999374 31.7423 25 45.2512 12.4999374 55.3275"/>
            <polyline points="0 77.70033 12.4999843 75.87219 24.9999687 68.18221 37.5000157 59.91875 50 58.307 62.4999843 57.11665 74.9999687 46.75695 87.499953 37.74475 100 36.01765"/>
          </g>
        </g>
        <g
          :stroke-width="strokeWidth"
          class="axis">
          <g class="y-axis">
            <g
              v-for="(tick, i) in yTicks"
              :key="`y-tick-${i}`"
              v-bind="tick.attrs">
              <text y="-0.25em">{{ tick.label }}</text>
              <line x2="100"/>
            </g>
          </g>
          <g
            class="x-axis"
            transform="translate(0, 85)">
            <g
              v-for="(tick, i) in xTicks"
              :key="`x-tick-${i}`"
              :transform="tick.transform"
              class="x-tick">
              <text
                :y="-8 + strokeWidth * 4 "
                x="-0.0em">{{ tick.label }}</text>
              <line
                :y2="-8 + strokeWidth * 4"
                y1="-8"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <div class="axis-label right">Change in global mean temperature</div>
    <div class="key-wrapper">
      <div
        :class="{hide: !legend}"
        class="key extended">
        <span
          v-for="(model, i) in models"
          :key="`key-${i}`"
          class="key-item"><span
            :class="model.class"
            class="dot"/>&nbsp;{{ model.name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    variable: {
      type: String,
      default: 'Flood'
    },
    legend: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      width: 512,
      colors: ['#00A5D5', '#10BBDD', '#79D1E4', '#BEE6EA', '#FFFBF0', '#F6BACE', '#EA77AA', '#DA2D85', '#C8005F'],
      max: '+12°C',
      min: '-12°C',
      yValues: [{
        y: 77,
        class: ['zero'],
        value: ''
      }, {
        y: 54,
        value: 0.2
      }, {
        y: 31,
        value: 0.4
      }, {
        y: 8,
        value: '0.6%'
      }],
      models: [{
        name: 'GFDL-ESM2M',
        class: 'green'
      }, {
        name: 'MIROC5',
        class: 'yellow'
      }, {
        name: 'IPSL-CM5A-LR',
        class: 'violet'
      }]
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    height () {
      return (this.width * 0.77)
    },
    strokeWidth () {
      return (100 / this.width)
    },
    fontSize () {
      return `${(100 / this.width) * 0.9}rem`
    },
    yTicks () {
      return this.yValues.map(val => ({
        attrs: {
          transform: `translate(0, ${val.y})`,
          class: val.class
        },
        label: val.value
      }))
    },
    xTicks () {
      return [{
        value: null,
        x: 0
      }, {
        value: 1,
        x: 25
      }, {
        value: 2,
        x: 50
      }, {
        value: 3,
        x: 75
      }, {
        value: '4°C',
        x: 100
      }].map(d => ({
        label: d.value,
        transform: `translate(${d.x} 0)`
      }))
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
        this.width = this.$refs.VisChartImpact.getBoundingClientRect().width
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisChartImpact {
  @include flex-column;
  .title {
    width: 100%;
    font-size: 0.9em;
    line-height: 1.2;
  }

  svg {
    fill: none;
    overflow: visible;
    margin-bottom: 1.2rem;

    mask {
      fill: white;
    }

    g {
      &.model {
        mix-blend-mode: multiply;
        transform: translate(-0.41, 0.00);

        polygon {
          opacity: 0.15;
        }

        polyline {
          stroke-linecap: square;
          stroke-linejoin: round;
        }

        &.model1 {
          mask: url(#mask1);
          polygon {
            fill: $color-yellow;
          }
          polyline {
            stroke: $color-yellow;
          }
        }
        &.model2 {
          mask: url(#mask2);
          polygon {
            fill: $color-green;
          }
          polyline {
            stroke: $color-green;
          }
        }
        &.model3 {
          mask: url(#mask3);
          polygon {
            fill: $color-violet;
          }
          polyline {
            stroke: $color-violet;
          }
        }
      }

      &.axis {
        mix-blend-mode: multiply;
        text {
          fill: $color-dark-gray;
          dominant-baseline: unset;
        }

        line {

          stroke: $color-light-gray;
          stroke-linejoin: round;
        }

        .zero {
          line {
            stroke: $color-black;
          }
          text {
            fill: $color-black;
          }
        }
        .x-axis {
          text-anchor: end;
          .x-tick {
            text-anchor: middle;
            &:last-child {
              text-anchor: end;
            }
            text {
              dominant-baseline: hanging;
            }
          }
          line {
            stroke: $color-black;
          }
        }
      }
    }
  }

  .axis-label {
    font-size: 0.9rem;
    width: 100%;
    color: $color-dark-gray;
    hyphens: none;
    line-height: 1.2;
    &.right {
      text-align: right;
      // margin-top: -$spacing / 4;
    }
  }
  .key-wrapper {
    height: 0.9rem;
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
      font-size: 0.9rem;

      .key-item {
        padding-right: 0.5em;
        font-size: 0.9em;
        white-space: nowrap;

        .dot {
          height: 0.7em;
          width: 0.7em;
          border-radius: 50%;
          display: inline-block;

          &.green {
            background: $color-green;
          }
          &.blue {
            background: $color-blue;
          }
          &.red {
            background: $color-red;
          }
          &.yellow {
            background: $color-yellow;
          }
          &.violet {
            background: $color-violet;
          }
        }
      }
    }
  }
}
</style>
