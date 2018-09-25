<template>
  <div
    ref="VisFingerprints"
    class="VisFingerprints">
    <svg
      :style="{'font-size': `${fontSize}px`, 'stroke-width': strokeWidth}"
      :height="height"
      width="100%"
      viewBox="0.66 16.21 84.39 73.19">
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
        v-for="(group, i) in groups"
        :key="`group-${i}`"
        :class="[group.color, {active: group.active}]"
        class="group"
        filter="url(energy-land-use-and-emissions#gooey)">
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
      selectedProperties: 'fingerprints.properties',
      selectedCategory: 'fingerprints.category',
      selectedModel: 'fingerprints.model'
    }),
    height () {
      const xs = this.properties.map(p => p.x)
      const ys = this.properties.map(p => p.y)
      const width = Math.max(...xs) - Math.min(...xs) + 6
      const height = Math.max(...ys) - Math.min(...ys) + 6
      return this.width * height / width
    },
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
      const { step, properties, selectedProperties, selectedCategory, selectedModel } = this
      switch (step) {
        case 0:
          return [{
            color: 'violet',
            active: selectedProperties === null || selectedProperties === 'GDP',
            properties: [properties.find(p => p.id === 'c0p9')]
          }, {
            color: 'red',
            active: selectedProperties === null || selectedProperties === 'emissions',
            properties: properties.filter(p => p.id.match(/c6p[0-5]/))
          }, {
            color: 'yellow',
            active: selectedProperties === null || selectedProperties === 'energy',
            properties: properties.filter(p => p.id.match(/c2p([1-9]$|1[0-5]$)/))
          }]
        case 1:
          return [{
            color: 'gray',
            active: false,
            properties: properties.filter(p => p.category !== selectedCategory)
          }, {
            color: 'violet',
            active: true,
            properties: properties.filter(p => p.category === selectedCategory)
          }]
        case 2:
          return [{
            color: 'green',
            active: selectedModel === 'AIM/CGE',
            properties: properties.filter(p => p.models.find(m => m === 'AIM/CGE'))
          }, {
            color: 'blue',
            active: selectedModel === 'GCAM',
            properties: properties.filter(p => p.models.find(m => m === 'GCAM'))
          }, {
            color: 'red',
            active: selectedModel === 'IMAGE',
            properties: properties.filter(p => p.models.find(m => m === 'IMAGE'))
          }, {
            color: 'yellow',
            active: selectedModel === 'REMIND-MAGPIE',
            properties: properties.filter(p => p.models.find(m => m === 'REMIND-MAGPIE'))
          }, {
            color: 'violet',
            active: selectedModel === 'MESSAGE-GLOBIUM',
            properties: properties.filter(p => p.models.find(m => m === 'MESSAGE-GLOBIUM'))
          }]
        default: return []
      }
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    },
    step () {
      this.selectedProperties = this.selectedCategory = this.selectedModel = null
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
        this.$emit('setHeight', this.height)
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
      // filter: url(#gooey);
      opacity: 0.1;

      &.active {
        opacity: 0.8;
      }

      &.gray {
        fill: $color-black;
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
