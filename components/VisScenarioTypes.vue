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
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.cycle.getBoundingClientRect().width - 90
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
