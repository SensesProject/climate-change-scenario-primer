<template>
  <div
    ref="VisSspComparison"
    class="VisSspComparison">
    <svg
      v-if="width > 0"
      :style="{'stroke-width': strokeWidth, 'font-size': `${fontSize}px`}"
      :height="height"
      :viewBox="viewBox"
      width="100%">
      <filter id="gooey">
        <!-- <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="25"
          color-interpolation-filters="sRGB"
          result="blur"/>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 200 -90"
          result="gooey"/> -->
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="10"
          color-interpolation-filters="sRGB"
          result="blur"/>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 200 -90"
          result="gooey"/>
        <feBlend
          in="gooey"
          in2="gooey"/>
      </filter>
      <clipPath id="rect">
        <rect
          x="0"
          y="0"
          width="100"
          height="100"/>
      </clipPath>
      <g
        class="chart"
        clip-path="url(socioeconomics#rect)">
        <rect
          class="background"
          width="100"
          height="100"/>
        <g
          class="low"
          filter="url(socioeconomics#gooey)">
          <polygon
            v-if="step === 0"
            points="60 -20 120 -20 120 120 65 65 75 50 55 20"/>
          <polygon
            v-if="step === 1"
            points="50 -20 120 -20 120 50 80 45 63 37 55 20"/>
          <polygon
            v-if="step === 2"
            points="55 -20 120 -20 120 120 70 60 75 50 55 20"/>
        </g>
        <g
          class="high"
          filter="url(socioeconomics#gooey)">
          <polygon
            v-if="step === 0"
            points="-20 -20 50 -20 45 20 22 50 50 80 80 120 -20 120"/>
          <polygon
            v-if="step === 1"
            points="-20 -20 50 -20 45 20 37 37 20 45 -20 50"/>
          <polygon
            v-if="step === 2"
            points="-20 -20 50 -20 45 20 25 50 35 70 50 75 60 70 120 120 -20 120"/>
        </g>
        <g class="ssps">
          <g
            v-for="ssp in ssps"
            :key="`ssp-${ssp.id}`"
            :transform="`translate(${ssp.cx} ${ssp.cy})`"
            class="ssp">
            <circle
              class="ssp-circle"
              r="16"/>
            <text
              :y="-6"
              class="ssp-title">{{ ssp.id }}</text>
            <text
              :y="2"
              class="ssp-description"
              v-html="ssp.description"/>
          </g>
        </g>
      </g>
      <g
        class="axis x-axis"
        transform="translate(0 -6)">
        <text
          x="50"
          y="2">
          <tspan>Low&nbsp;&nbsp;&nbsp;&nbsp;←&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
          <tspan class="strong">Challenges for Adaptation</tspan>
          <tspan>&nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp;High</tspan>
        </text>
      </g>
      <g
        class="axis y-axis"
        transform="translate(-7 100) rotate(-90)">
        <text
          x="50"
          y="2">
          <tspan>Low&nbsp;&nbsp;&nbsp;&nbsp;←&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
          <tspan class="strong">Challenges for Mitigation</tspan>
          <tspan>&nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp;High</tspan>
        </text>
      </g>
      <g
        class="key"
        transform="translate(0 104)">
        <text
          x="50"
          y="0"
          class="center">{{ label }}</text>
        <g transform="translate(0 4)">
          <rect
            class="background"
            x="35"
            width="30"
            height="4"/>
          <rect
            class="high"
            x="35"
            width="10"
            height="4"/>
          <rect
            class="low"
            x="55"
            width="10"
            height="4"/>
          <text
            x="32"
            y="2"
            class="left">{{ high }}</text>
          <text
            x="68"
            y="2"
            class="right">{{ low }}</text>
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
      colors: ['#B6A3DD', '#8665C7', '#503D77'],
      radius: 24,
      padding: 5,
      ssps: [{
        id: 'SSP1',
        description: 'Sustainability',
        cx: 22,
        cy: 77
      }, {
        id: 'SSP2',
        description: '<tspan x="0" dy="-0.2em">Middle of</tspan><tspan x="0" dy="1em">the Road</tspan>',
        cx: 50,
        cy: 50
      }, {
        id: 'SSP3',
        description: '<tspan x="0" dy="-0.2em">Regional</tspan><tspan x="0" dy="1em">Rivalary</tspan>',
        cx: 77,
        cy: 22
      }, {
        id: 'SSP4',
        description: 'Inequality',
        cx: 77,
        cy: 77
      }, {
        id: 'SSP5',
        description: '<tspan x="0" dy="-0.2em">Fossil-fueled</tspan><tspan x="0" dy="1em">Developement</tspan>',
        cx: 22,
        cy: 22
      }]
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    strokeWidth () {
      return (100 / this.width) * 2
    },
    fontSize () {
      // return (100 / this.width) * 16
      return 4
    },
    // chartTransform () {
    //   const offset = this.padding
    //   return `translate(${offset} ${offset}) scale(${(100 - offset) / 100})`
    // },
    height () {
      return this.width + this.padding * 2 * (this.width / 100)
    },
    relativeHeight () {
      return 100 + this.padding
    },
    viewBox () {
      const { padding } = this
      return `-${padding} -${padding} ${100 + padding} ${100 + padding * 3}`
    },
    high () {
      return this.step === 2 ? 'Rapid' : 'High'
    },
    low () {
      return this.step === 2 ? 'Slow' : 'Low'
    },
    label () {
      return [
        'Education level',
        'Level of international trade',
        'Speed of technology development'
      ][this.step]
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    }
  },
  mounted () {
    // this.$emit('setMaxWidth', 640)
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.VisSspComparison.getBoundingClientRect().width

        this.$nextTick(() => {
          this.width = this.$refs.VisSspComparison.getBoundingClientRect().width
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisSspComparison {
  max-width: 420px;
  width: 100%;
  // min-width: 260px;

  @include media-query($device-medium) {
    max-width: 420px;
  }

  svg {
    overflow: visible;
    .background {
      fill: $color-violet;
    }

    .low {
      fill: white;
      opacity: 0.4;
    }

    .high {
      fill: black;
      opacity: 0.4;
    }

    .ssp {
      .ssp-circle {
        fill: none;
        stroke: $color-white;
      }
      .ssp-title {
        fill: $color-white;
        text-anchor: middle;
        dominant-baseline: central;
        font-weight: bold;
        @include light-text();
        font-size: 5px;
      }

      .ssp-description {
        fill: $color-white;
        text-anchor: middle;
        dominant-baseline: central;
        // font-weight: bold;
        @include light-text();
        font-style: italic;
      }
    }
  }

  .axis {
    text {
      dominant-baseline: central;
      text-anchor: middle;

      .strong {
        font-weight: bold;
      }
    }
  }

  .key {
    text {
      dominant-baseline: central;

      &.left {
        text-anchor: end;
      }

      &.center {
        text-anchor: middle;
        font-weight: bold;
      }

      &.right {
        text-anchor: start;
      }
    }
  }
}
</style>
