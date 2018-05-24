<template>
  <div
    ref="VisFingerprints"
    class="VisFingerprints">
    <svg
      :style="{'font-size': `${fontSize}px`, 'stroke-width': strokeWidth}"
      :height="width"
      width="100%"
      viewBox="0 0 100 100">
      <filter id="gooey">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="1"
          color-interpolation-filters="sRGB"
          result="blur"/>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -25"
          result="gooey"/>
        <feBlend
          in="SourceGraphic"
          in2="gooey"/>
      </filter>
      <g class="properties">
        <g
          v-for="property in properties"
          :key="property.id"
          :transform="property.transform"
          class="property">
          <circle
            :style="{'stroke-width': strokeWidth * 5}"
            r="2"
            class="circle"
            @mouseover="setHover(property)"
            @mouseout="resetHover()"/>
        </g>
      </g>
      <g
        v-for="group in groups"
        :key="`group-${group.color}`"
        :class="[group.color]"
        class="group">
        <g
          v-for="property in group.properties"
          :key="property.id"
          :transform="property.transform"
          class="property">
          <circle
            r="3"
            class="circle"/>
        </g>
      </g>
      <g
        v-if="hover !== null"
        :key="`text-${hover.id}`"
        :transform="hover.transform"
        :style="hover.style"
        class="hover">
        <text class="shadow">
          <tspan
            :x="hover.textOffset"
            class="category"
            dy="-0.6em">{{ hover.category }}</tspan>
          <tspan
            :x="hover.textOffset"
            class="name"
            dy="1.1em">{{ hover.name }}</tspan>
        </text>
        <text class="text">
          <tspan
            :x="hover.textOffset"
            class="category"
            dy="-0.6em">{{ hover.category }}</tspan>
          <tspan
            :x="hover.textOffset"
            class="name"
            dy="1.1em">{{ hover.name }}</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      hover: null,
      width: 0
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    ...mapGetters([
      'fingerprints'
    ]),
    ...mapFields({
      selectedCategory: 'fingerprints.category'
    }),
    properties () {
      return this.fingerprints.map(property => ({
        ...property,
        transform: `translate(${property.x} ${property.y})`,
        textOffset: property.x < 50 ? 3 : -3,
        style: {
          'stroke-width': this.strokeWidth * 1.5,
          'text-anchor': property.x < 50 ? 'start' : 'end'
        }
      }))
    },
    strokeWidth () {
      return (100 / this.width) * 2
    },
    fontSize () {
      return (100 / this.width) * 16
    },
    groups () {
      const { gray, violet, red, yellow } = this
      return [{
        color: 'gray',
        properties: gray
      }, {
        color: 'violet',
        properties: violet
      }, {
        color: 'red',
        properties: red
      }, {
        color: 'yellow',
        properties: yellow
      }]
    },
    gray () {
      const { hover, properties, step } = this
      if (step === 1) return properties
      if (hover === null) return []
      return properties.filter(property => property.category === hover.category)
    },
    violet () {
      const { step, properties } = this
      switch (step) {
        case 0:
          return [properties.find(p => p.id === 'c0p9')]
        case 1:
          return properties.filter(p => p.category === this.selectedCategory)
        default: return []
      }
    },
    // lightViolet () {
    //   const { step, properties } = this
    //   switch (step) {
    //     case 1:
    //       return properties
    //     default: return []
    //   }
    // },
    red () {
      const { step, properties } = this
      switch (step) {
        case 0:
          return properties.filter(p => p.id.match(/c6p[0-5]/))
        default: return []
      }
    },
    yellow () {
      const { step, properties } = this
      switch (step) {
        case 0:
          return properties.filter(p => p.id.match(/c2p([1-9]$|1[0-5]$)/))
        default: return []
      }
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    }
  },
  mounted () {
    this.$emit('setMaxWidth', 500)
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.VisFingerprints.getBoundingClientRect().width
        this.$emit('setHeight', this.width)
      })
    },
    setHover (property) {
      this.hover = property
      switch (this.step) {
        case 1:
          this.selectedCategory = property.category
      }
    },
    resetHover () {
      this.hover = null
      switch (this.step) {
        case 1:
          this.selectedCategory = null
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisFingerprints {
  width: 100%;
  max-width: 500px;

  svg {
    overflow: visible;
    fill: $color-light-gray;

    .properties {
      .property {
        .circle {
          stroke: transparent;
          pointer-events: all;

          &:hover {
            fill: $color-dark-gray;
          }
        }
      }
    }

    .group {
      mix-blend-mode: multiply;
      pointer-events: none;
      filter: url(#gooey);
      opacity: 0.8;

      &.gray {
        fill: $color-light-gray;
      }

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

      &.light-violet {
        fill: lighten($color-violet, 25);
      }
    }

    text {
      pointer-events: none;
      dominant-baseline: central;

      &.shadow {
        stroke: transparentize($color-white, 0.3);
      }

      &.text {
        fill: $color-text;
      }

      .category {
        // font-weight: bold;
      }

      .name {
        font-weight: bold;
      }
    }
  }
}
</style>
