<template>
  <div
    ref="cycle"
    class="VisScenarioTypes center narrow"
  >
    <svg
      v-if="width"
      :height="width / 2 - 40"
      class="hide-print"
      width="100%"
    >
      <g transform="translate(0, 0)">
        <path
          class="range"
          :d="scalePath('M30,35 Q60,20,100,40 L100,0')"
        />
        <path
          class="pathway"
          :d="scalePath('M30,35 Q60,20,100,40')"
        />
        <path
          class="pathway"
          :d="scalePath('M30,35 Q60,20,100,20')"
        />
        <path
          class="projection"
          :d="scalePath('M30,35 L100,0')"
        />
        <path
          :d="scalePath(`M${scaleRev(strokeWidth)},${50 - scaleRev(strokeWidth / 2)} L30,35`)"
          class="past"
        />
        <path
          :style="{'stroke-width': strokeWidth / 2}"
          :d="scalePath(`M30,50 L30,${35 + scaleRev(strokeWidth * 4)}`)"
          class="now"
        />
        <circle
          :r="`${strokeWidth * 1.5}`"
          class="now"
          :cx="scaleVal(30)"
          :cy="scaleVal(35)"
        />
        <circle
          :r="strokeWidth * 1.5"
          class="projection"
          :cx="scaleVal(100)"
          :cy="scaleVal(0)"
        />
        <circle
          :r="strokeWidth * 1.5"
          class="goal"
          :cx="scaleVal(100)"
          :cy="scaleVal(40)"
        />
        <circle
          :r="strokeWidth * 1.5"
          class="goal"
          :cx="scaleVal(100)"
          :cy="scaleVal(20)"
        />
        <text
          :x="scaleVal(100) + strokeWidth * 4"
          :y="fontSize / 4"
          class="projection"
        >Projection</text>
        <text
          :x="scaleVal(100) + strokeWidth * 4"
          :y="scaleVal(40) + fontSize / 4"
          class="goal"
        >Goal B</text>
        <text
          :x="scaleVal(100) + strokeWidth * 4"
          :y="scaleVal(20) + fontSize / 4"
          class="goal"
        >Goal A</text>
        <text
          :x="scaleVal(100) + strokeWidth * 4"
          :y="scaleVal(40) + fontSize / 4"
          class="pathway"
        >Pathway B</text>
        <text
          :x="scaleVal(100) + strokeWidth * 4"
          :y="scaleVal(20) + fontSize / 4"
          class="pathway"
        >Pathway A</text>
        <text
          :y="scaleVal(50) + strokeWidth + fontSize"
        >Past</text>
        <text
          :y="scaleVal(50) + strokeWidth + fontSize"
          :x="scaleVal(30)"
          text-anchor="middle"
        >Now</text>
        <text
          :y="scaleVal(50) + strokeWidth + fontSize"
          :x="scaleVal(100)"
          text-anchor="end"
        >Future</text>
      </g>
    </svg>

    <img
      class="print-only"
      src="~/assets/img/vis-print-fallbacks/VisScenarioTypes.jpg"
      alt=""
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      width: 0
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    strokeWidth () {
      return 2
    },
    fontSize () {
      return 12.8
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
      this.width = this.$refs.cycle.getBoundingClientRect().width
      this.height = this.width / 2
    },
    scalePath (v) {
      return v.replace(/([0-9.]+)/g, (a) => a / 100 * (this.width - 80))
    },
    scaleVal (v) {
      return v / 100 * (this.width - 80)
    },
    scaleRev (v) {
      return v / (this.width - 80) * 100
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisScenarioTypes {
  width: calc(100%);
  max-width: $max-width-inner;
  position: relative;
  padding: $spacing 0;
  overflow: hidden;
  margin: auto;

  svg {
    overflow: visible;
    path {
      stroke-width: 2;
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
