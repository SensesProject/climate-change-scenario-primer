<template>
  <div class="InLegendSequential">
    <span
      class="label"
      v-html="format(min)"
    />
    <span
      v-for="color in colors"
      :key="`color-${color}`"
      :style="{background: color}"
      class="color"
    />
    <span
      class="label"
      v-html="format(max)"
    />
  </div>
</template>

<script>
import * as d3 from 'd3-scale'
import * as chromatic from 'd3-scale-chromatic'
export default {
  props: {
    unit: {
      type: String,
      default: '&#8239;°C'
    },
    range: {
      type: Array,
      default () {
        return [-12, 12]
      }
    },
    domain: {
      type: Array,
      default () {
        return [0, 25]
      }
    },
    limitRange: {
      type: Array,
      default: null
    },
    invertScale: {
      type: Boolean,
      default: false
    },
    colorScale: {
      type: String,
      default: 'interpolateRdBu'
    }
  },
  computed: {
    scale () {
      const scale = d3.scaleSequential(chromatic[this.colorScale])
        .domain(this.domain)

      if (this.invertScale) scale.domain(this.domain.map(v => v).reverse())
      return scale
    },
    colors () {
      const rangeLength = this.range[1] - this.range[0]
      const domainLength = this.domain[1] - this.domain[0]

      const resolution = (rangeLength + 1) / domainLength
      const offset = (this.min - this.range[0]) / resolution

      const length = this.max - this.min
      return Array.apply(null, Array(length / resolution)).map((d, i) => {
        return this.scale(this.domain[0] + 0.5 + i + offset)
      })
    },
    min () {
      return this.limitRange ? this.limitRange[0] : this.range[0]
    },
    max () {
      return this.limitRange ? this.limitRange[1] : this.range[1]
    }
  },
  methods: {
    format (value) {
      let formatted = null
      if (value < 0) formatted = `−${Math.abs(value)}`
      else if (value === 0) formatted = `±${value}`
      else formatted = `+${value}`
      return `${formatted}${this.unit}`
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.InLegendSequential {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 512px;
  max-width: 100%;
  .label {
    font-size: 0.9em;
    flex: 1;
    // padding: 0 $spacing / 4;
  }
  // .colors {
    // display: inline-flex;
    // flex: 0;
    // margin: 0 $spacing / 4;
    .color {
      // width: 16px;
      flex: 1;
      width: 100px;
      height: 12px;
      display: inline-block;

      &:nth-of-type(2) {
        border-radius: 6px 0 0 6px;
        margin-left: $spacing / 4;
        min-width: 12px;
      }
      &:nth-last-of-type(2) {
        border-radius: 0 6px 6px 0;
        margin-right: $spacing / 4;
        min-width: 12px;
      }
    // }
  }
}
</style>
