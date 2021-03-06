<template>
  <div
    ref="VisFingerprints"
    class="VisFingerprints hide-print hide-ie"
  >
    <svg
      :style="{'font-size': `${fontSize}px`, 'stroke-width': strokeWidth}"
      :height="height"
      width="100%"
    >
      <defs>
        <filter id="gooey">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="2"
            color-interpolation-filters="sRGB"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
            result="gooey"
          />
          <feBlend
            in="SourceGraphic"
            in2="gooey"
          />
        </filter>
      </defs>
      <g class="properties">
        <g
          v-for="property in properties"
          :key="property.id"
          :transform="property.transform"
          class="property"
        >
          <g
            v-if="property.selectedId != null"
            :style="{transform: property.circle.offset}"
          >
            <circle
              :class="[property.circle.fill]"
              opacity="0.5"
              r="7"
              class="circle"
            />
            <text
              x="16"
              y="6"
            >
              {{ property.name }}
            </text>
          </g>
          <circle
            r="7"
            class="circle"
            @mouseover="setHover(property)"
            @mouseout="resetHover()"
          />
          <circle
            v-if="property.selectedId != null"
            :style="{transform: step === 0 ? property.circle.offset : null}"
            :class="[property.circle.fill, `step-${step}`]"
            r="7"
            class="circle"
            @mouseover="setHover(property)"
            @mouseout="resetHover()"
          />
        </g>
      </g>
      <g :class="[`step-${step}`, 'groups']">
        <g
          v-for="(group, i) in groups"
          :key="`group-${i}`"
          :class="[group.color, {active: group.active}]"
          class="group"
          filter="url(#gooey)"
        >
          <g
            v-for="property in group.properties"
            :key="property.id"
            :transform="property.transform"
            class="property"
          >
            <circle
              r="13"
              class="circle"
            />
          </g>
        </g>
      </g>
      <g
        v-if="hover !== null && step > 0"
        :key="`text-${hover.id}`"
        :transform="hover.transform"
        :style="hover.style"
        class="hover"
      >
        <text
          class="shadow"
          y="6"
        >
          <!-- <tspan
            :x="hover.textOffset"
            class="category"
            dy="-0.6em">{{ hover.category }}</tspan> -->
          <tspan
            v-if="hover.name2 == null"
            :x="hover.textOffset"
            class="name"
            dy="0em"
          >{{ hover.name }}</tspan>
          <tspan
            v-if="hover.name2 != null"
            :x="hover.textOffset"
            class="name"
            dy="-0.6em"
          >{{ hover.name2[0] }}</tspan>
          <tspan
            v-if="hover.name2 != null"
            :x="hover.textOffset"
            class="name"
            dy="1.2em"
          >{{ hover.name2[1] }}</tspan>
        </text>
        <text
          class="text"
          y="6"
        >
          <!-- <tspan
            :x="hover.textOffset"
            class="category"
            dy="-0.6em">{{ hover.category }}</tspan> -->
          <tspan
            v-if="hover.name2 == null"
            :x="hover.textOffset"
            class="name"
            dy="0em"
          >{{ hover.name }}</tspan>
          <tspan
            v-if="hover.name2 != null"
            :x="hover.textOffset"
            class="name"
            dy="-0.6em"
          >{{ hover.name2[0] }}</tspan>
          <tspan
            v-if="hover.name2 != null"
            :x="hover.textOffset"
            class="name"
            dy="1.2em"
          >{{ hover.name2[1] }}</tspan>
        </text>
      </g>
      <g
        v-if="view.width >= 800"
        :transform="`translate(${width / 2} 0)`"
        class="categories wide"
      >
        <g transform="translate(-180, 80)">
          <line
            x1="8"
            x2="66"
          />
          <text
            y="6"
            text-anchor="end"
          >
            <tspan dy="-0.6em">Economic Growth</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >and Development</tspan>
          </text>
        </g>
        <g transform="translate(180, 150)">
          <line
            x1="-8"
            x2="-22"
          />
          <text y="6">
            <tspan>Land use</tspan>
          </text>
        </g>
        <g
          transform="translate(-180, 182)"
          text-anchor="end"
        >
          <line
            x1="8"
            x2="38"
          />
          <text y="6">
            <tspan>Electricity and heat</tspan>
          </text>
        </g>
        <g transform="translate(180, 48)">
          <line
            x1="-8"
            x2="-106"
          />
          <text y="6">
            <tspan>Refining</tspan>
          </text>
        </g>
        <g
          transform="translate(180, 250)"
        >
          <line
            x1="-8"
            x2="-40"
          />
          <text y="6">
            <tspan>Energy demand</tspan>
          </text>
        </g>
        <g transform="translate(180, 100)">
          <line
            x1="-8"
            x2="-66"
          />
          <text y="6">
            <tspan dy="-0.6em">Resource extraction</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >and trade</tspan>
          </text>
        </g>
        <g transform="translate(180, 194)">
          <line
            x1="-8"
            x2="-84"
          />
          <text y="6">
            <tspan dy="-0.6em">Carbon Dioxide</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Removal</tspan>
          </text>
        </g>
        <g transform="translate(180, 324)">
          <line
            x1="-8"
            x2="-135"
          />
          <line
            x1="-135"
            x2="-135"
            y2="-30"
          />
          <!-- <text y="6">
            <tspan dy="-0.6em">Climate and non-climate</tspan>
            <tspan
              x="0"
              dy="1.2em">environmental change</tspan>
          </text> -->
          <text y="6">
            <tspan dy="-1.8em">Climate and</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >non-climate</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >environmental</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >change</tspan>
          </text>
        </g>
        <g transform="translate(-180, 308)">
          <line
            x1="8"
            x2="94"
          />
          <text
            y="6"
            text-anchor="end"
          >
            <tspan dy="-0.6em">Policy</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Representation</tspan>
          </text>
        </g>
      </g>
      <g
        v-else
        :transform="`translate(${width / 2} -16)`"
        class="categories narrow"
      >
        <g transform="translate(-150, 44)">
          <line
            x1="67"
            x2="67"
            y1="48"
            y2="64"
          />
          <text y="6">
            <tspan>Economic</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Growth and</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Development</tspan>
          </text>
        </g>
        <g transform="translate(100, 44)">
          <line
            x1="52"
            x2="52"
            y1="12"
            y2="170"
          />
          <text y="6">
            <tspan>Land use</tspan>
          </text>
        </g>
        <g transform="translate(-150, 420)">
          <line
            x1="14"
            x2="14"
            y1="-10"
            y2="-88"
          />
          <text y="6">
            <tspan>Electricity</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >and heat</tspan>
          </text>
        </g>
        <g transform="translate(-24, 44)">
          <line
            x1="21"
            x2="21"
            y1="10"
            y2="87"
          />
          <text y="6">
            <tspan>Refining</tspan>
          </text>
        </g>
        <g transform="translate(156, 463)">
          <line
            x1="-20"
            x2="-20"
            y1="-24"
            y2="-112"
          />
          <text
            y="6"
            text-anchor="end"
          >
            <tspan dy="-1.2em">Energy</tspan>
            <tspan
              dy="1.2em"
              x="0"
            >demand</tspan>
          </text>
        </g>
        <g transform="translate(78, 120)">
          <line
            x1="24"
            x2="24"
            y1="10"
            y2="42"
          />
          <text y="6">
            <tspan dy="-2.4em">Resource</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >extraction</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >and trade</tspan>
          </text>
        </g>
        <g transform="translate(0, 480)">
          <line
            x1="32"
            x2="32"
            y1="-42"
            y2="-103"
          />
          <text y="6">
            <tspan dy="-2.4em">Climate and</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >non-climate</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >environmental</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >change</tspan>
          </text>
        </g>
        <g transform="translate(50, 418)">
          <line
            x1="16"
            x2="16"
            y1="-42"
            y2="-113"
          />
          <text y="6">
            <tspan dy="-2.4em">Carbon</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Dioxide</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Removal</tspan>
          </text>
        </g>
        <g transform="translate(-20, 498)">
          <line
            x1="-16"
            x2="-16"
            y1="-42"
            y2="-80"
          />
          <text
            y="6"
            text-anchor="end"
          >
            <tspan dy="-2.4em">Policy</tspan>
            <tspan
              x="0"
              dy="1.2em"
            >Representation</tspan>
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'highlights/getField',
  mutationType: 'highlights/updateField'
})
export default {
  props: {
    step: {
      type: Number,
      default: 0
    },
    pHeights: {
      type: Array,
      default () {
        return [0, 0, 0]
      }
    },
    selectedModel: {
      type: String,
      default: 'IMAGE'
    },
    hoverModel: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      hover: null,
      width: 300,
      gHeights: [640, 400]
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    ...mapGetters({
      fingerprints: 'data/fingerprints'
    }),
    ...mapFields({
      selectedProperties: 'fingerprints.properties',
      selectedCategory: 'fingerprints.category'
      // selectedModel: 'fingerprints.model'
    }),
    height () {
      return this.view.width >= 800 ? 380 : 496
      // const xs = this.properties.map(p => p.x)
      // const ys = this.properties.map(p => p.y)
      // const width = Math.max(...xs) - Math.min(...xs) + 6
      // const height = Math.max(...ys) - Math.min(...ys) + 6
      // return this.width * height / width
    },
    properties () {
      return this.fingerprints.map(property => {
        const x = (this.width - this.scale) / 2 + property.x * this.scale
        const y = property.y * this.scale + (this.view.width >= 800 ? 40 : 104)
        const offset = { cx: 0, cy: 0 }
        let fill = null
        if (property.selectedId != null) {
          if (this.view.width >= 600) {
            offset.cx = -x + (property.selectedId % 2) * this.width / 2 + 8
            offset.cy = -y + Math.floor(property.selectedId / 2) * 24 - (this.pHeights[1] + this.gHeights[0]) + 32
          } else {
            offset.cx = -x + 8
            offset.cy = -y + property.selectedId * 24 - (this.pHeights[1] + this.gHeights[0]) + (property.selectedId > 14 ? -24 : 32)
          }

          // if (this.step === 0)
          fill = property.color
        }
        return {
          ...property,
          transform: `translate(${x} ${y})`,
          textOffset: property.x < 0.5 ? 16 : -16,
          style: {
            'stroke-width': this.strokeWidth * 1,
            'text-anchor': property.x < 0.5 ? 'start' : 'end'
          },
          circle: {
            offset: `translate(${offset.cx}px, ${offset.cy}px)`,
            fill
          }
        }
      })
    },
    scale () {
      return 286
    },
    strokeWidth () {
      return 2
    },
    fontSize () {
      return 16
    },
    groups () {
      const { step, properties, selectedModel, hoverModel } = this
      return [{
        color: 'red',
        active: (selectedModel === 'AIM' || hoverModel === 'AIM') && step > 0,
        properties: properties.filter(p => p.models.filter(m => m === 'AIM')[0])
      }, {
        color: 'yellow',
        active: (selectedModel === 'GCAM4' || hoverModel === 'GCAM4') && step > 0,
        properties: properties.filter(p => p.models.filter(m => m === 'GCAM4')[0])
      }, {
        color: 'green',
        active: (selectedModel === 'IMAGE' || hoverModel === 'IMAGE') && step > 0,
        properties: properties.filter(p => p.models.filter(m => m === 'IMAGE')[0])
      }, {
        color: 'violet',
        active: (selectedModel === 'REMIND-MAGPIE' || hoverModel === 'REMIND-MAGPIE') && step > 0,
        properties: properties.filter(p => p.models.filter(m => m === 'REMIND-MAGPIE')[0])
      }, {
        color: 'blue',
        active: (selectedModel === 'MESSAGE-GLOBIOM' || hoverModel === 'MESSAGE-GLOBIOM') && step > 0,
        properties: properties.filter(p => p.models.filter(m => m === 'MESSAGE-GLOBIOM')[0])
      }]
    }
  },
  watch: {
    'view.width' (width) {
      this.setWidth(width)
    },
    step () {
      this.selectedProperties = this.selectedCategory = null
    }
  },
  created () {
    // this.$emit('setMaxWidth', 500)
    this.setWidth(this.view.width)
  },
  methods: {
    setWidth (width = 0) {
      this.gHeights[0] = width >= 600 ? 328 : 556
      this.gHeights[1] = width >= 800 ? 380 : 440
      this.$emit('setGHeights', this.gHeights)
      this.$nextTick(() => {
        if (this.$refs.VisFingerprints != null) {
          this.width = this.$refs.VisFingerprints.getBoundingClientRect().width
        }
      })
    },
    setHover (property) {
      this.$emit('hover', property.models)
      this.hover = property
      switch (this.step) {
        case 1:
          this.selectedCategory = property.category
      }
    },
    resetHover () {
      this.$emit('hover', [])
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

  svg {
    overflow: visible;
    fill: $color-gray;

    .properties {
      .property {
        text {
          fill: $color-light-gray;
        }
        .circle {
          stroke: transparent;
          pointer-events: all;
          transition: transform 0.8s 0.4s, fill 0.2s, opacity 0.8s;

          &:hover {
            fill: $color-white;
          }

          &.yellow {
            fill: $color-yellow;
            &:hover {
              fill: $color-white;
            }
          }

          &.red {
            fill: $color-red;
            &:hover {
              fill: $color-white;
            }
          }

          &.step-1 {
            transition: transform 1.2s, fill 0.2s, opacity 0.8s 1.2s;

            &.yellow, &.red {
              opacity: 0;
            }
          }
        }
      }
    }

    .groups {
      opacity: 0;
      transition: opacity 0.4s;
      mix-blend-mode: screen;

      &.step-1 {
        opacity: 1;
        transition: opacity 0.4s 1.8s;
      }
      .group {
        mix-blend-mode: screen;
        pointer-events: none;
        // filter: url(#gooey);
        opacity: 0;
        transition: opacity 0.4s;

        &.active {
          opacity: 1;
        }

        &.gray {
          fill: $color-gray;
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
    }

    text {
      pointer-events: none;
      // dominant-baseline: central;

      &.shadow {
        stroke: transparentize($color-black, .2);
        stroke-width: 3;
      }

      &.text {
        fill: $color-white;
      }

      .category {
        // font-weight: bold;
      }

      .name {
        font-weight: bold;
      }
    }

    .categories {
      text {
        fill: $color-light-gray;
      }
      line {
        stroke: $color-light-gray;
        stroke-width: 1;
      }

      &.narrow {
        font-size: 14px;
      }
    }
  }
}
</style>
