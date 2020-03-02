<template>
  <div
    ref="cycle"
    class="VisAdapt center"
  >
    <svg
      v-if="width"
      :height="height"
      :width="width"
    >
      <circle
        class="green"
        :cx="r"
        :cy="r"
        :r="r"
      />
      <text
        :x="r"
        :y="r"
        class="white"
      >
        <tspan>Socioeconomic and</tspan>
        <tspan
          dy="16"
          :x="r"
        >Climate Scenarios</tspan>
      </text>
      <circle
        class="green"
        :cx="width - r"
        :cy="r"
        :r="r"
      />
      <text
        :x="width - r"
        :y="r"
        class="white"
      >
        <tspan>Climate Impact</tspan>
        <tspan
          dy="16"
          :x="width - r"
        >Scenarios</tspan>
      </text>
      <circle
        class="blue"
        :cx="0.5 * width"
        :cy="height - r"
        :r="r"
      />
      <text
        :x="width / 2"
        :y="height - r"
        class="white"
      >
        <tspan>Adaptation</tspan>
        <tspan
          dy="16"
          :x="width / 2"
        >Scenarios</tspan>
      </text>
      <line
        :x1="r*2 + margin"
        :x2="width - r*2 - margin"
        :y1="r"
        :y2="r"
      />
      <text
        :x="width / 2"
        :y="r"
        class="tiny"
      >
        <tspan
          :x="width / 2"
          dy="-40"
        >Changing</tspan>
        <tspan
          :x="width / 2"
          dy="16"
        >Future</tspan>
        <tspan
          :x="width / 2"
          dy="16"
        >Context</tspan>
      </text>
      <line
        :x1="width - r*2 - margin"
        :x2="width - r*2 - margin * 2"
        :y1="r"
        :y2="r + margin"
      />
      <line
        :x1="width - r*2 - margin"
        :x2="width - r*2 - margin * 2"
        :y1="r"
        :y2="r - margin"
      />
      <line
        :x1="r"
        :x2="width * 0.5 - r - margin"
        :y1="height - r"
        :y2="height - r"
      />
      <line
        :x1="width * 0.5 - r - margin"
        :x2="width * 0.5 - r - margin * 2"
        :y1="height - r"
        :y2="height - r - margin"
      />
      <line
        :x1="width * 0.5 - r - margin"
        :x2="width * 0.5 - r - margin * 2"
        :y1="height - r"
        :y2="height - r + margin"
      />
      <line
        :x1="r"
        :x2="r"
        :y1="r * 2 + margin"
        :y2="height - r"
      />
      <text
        :x="r - margin / 2"
        :y="r * 2 + margin"
        class="tiny end"
      >
        <tspan
          :x="r - margin / 2"
          dy="10"
        >Local</tspan>
        <tspan
          :x="r - margin / 2"
          dy="16"
        >Adaptation</tspan>
        <tspan
          :x="r - margin / 2"
          dy="16"
        >Context</tspan>
      </text>
      <line
        :x1="width - r"
        :x2="width * 0.5 + r + margin"
        :y1="height - r"
        :y2="height - r"
      />
      <line
        :x1="width * 0.5 + r + margin"
        :x2="width * 0.5 + r + margin * 2"
        :y1="height - r"
        :y2="height - r - margin"
      />
      <line
        :x1="width * 0.5 + r + margin"
        :x2="width * 0.5 + r + margin * 2"
        :y1="height - r"
        :y2="height - r + margin"
      />
      <line
        :x1="width - r"
        :x2="width - r"
        :y1="r * 2 + margin"
        :y2="height - r"
      />
      <text
        :x="width - r + margin / 2"
        :y="r * 2 + margin"
        class="tiny start"
      >
        <tspan
          :x="width - r + margin / 2"
          dy="10"
        >Risk</tspan>
        <tspan
          :x="width - r + margin / 2"
          dy="16"
        >Exploration</tspan>
      </text>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      width: 0,
      margin: 8
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
    },
    height () {
      return this.width * 0.75
    },
    r () {
      return this.width * 0.2
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
        this.width = Math.min(500, this.$refs.cycle.getBoundingClientRect().width)
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisAdapt {
  width: calc(100%);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: $max-width;
  position: relative;
  // padding: $spacing 0;
  overflow: visible;
  // margin-right: 90px;

  svg {
    overflow: visible;
    text {
      font-size: 12px;
      fill: $color-black;
      text-anchor: middle;

      @include media-query($device-narrow) {
        font-size: 16px;
      }
      &.white {
        fill: $color-white;
      }
      &.tiny {
        font-size: 12px;
      }
      &.start {
        text-anchor: start;
      }
      &.end {
        text-anchor: end;
      }
    }

    circle {
      &.green {
        fill: $color-green;
      }
      &.blue {
        fill: $color-blue;
      }
    }
    line {
      stroke: $color-black;
      stroke-width: 1;
    }
  }
}
</style>
