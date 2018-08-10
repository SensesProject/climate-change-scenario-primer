<template lang="pug">
  div.LayoutIAMs
    h3 IAMs in Detail
    div.structure
      div.graphic-wrapper(ref="structureGraphic")
        svg.graphic(
          width='100%',
          height='100%')
          VisIamStructureChart(
            v-for='(element, i) in elements'
            :key='`element-${i}`'
            :element='element'
            :padding='padding'
            :transform='element.transform'
            :width='chartWidth'
            :height='chartHeight'
            :step='step'
            :scenario='scenario')
          polyline(
            v-for='(line, i) in lines'
            :key='`line-${i}`'
            :opacity='line.opacity'
            :points='line.points'
            :class='line.color')
      div.text-wrapper(ref="structureText")
        div(v-bind='pStructure[0]')
          p Here we give a very simple example of such an IAM. We assume that GDP is driven by the population, respectively the working force, energy and capital stock. As you can see all of those three factors are raising and so is GDP.
        div(v-bind='pStructure[1]')
          p The produced GDP can be spent either for consumption, invested into the macro-economic capital stock or used to raise the amount of used energy. Other IAMs might also take into account investment into education which would increase the productivity of the labor. But for simplicity we ignore this option here in our very simple IAM. The goal of our simple IAM is to maximise consumption in the long run.
        div(v-bind='pStructure[2]')
          p To analyse the effect on emissions in our simple IAM we split the total energy into clean energy and dirty energy and also give the opportunity to invest into both types of energy separately. In this simple case only dirty energy leads to emissions. That means that the decision how much of the GDP is used to build up capacities of clean energy instead of dirty energy determines the correlated amount of emissions. The negative impact of global warming in the baseline scenarios is ignored.
        div(v-bind='pStructure[3]', ref='strucureOptions', :step=1)
          div.options
            div.slider.population
              span.b Population
              input.green(type='range', min=0, max=3, v-model.number='scenarioPopulation')
              span {{ scenarioNames.population[scenarioPopulation] }}
            div.slider.scenarioCarbon
              span.b Carbon Tax
              input.red(type='range', min=0, max=3, v-model.number='scenarioCarbon')
              span {{ scenarioNames.carbon[scenarioCarbon] }}
          p Using this model we demonstrate the impact of assumptions like the population growth rate and introduction of a carbon tax. Explore how different socio-economic and climate change mitigation scenarios play out.
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// polyfill intersection-observer for client-side rendering only
if (typeof window !== 'undefined') {
  require('intersection-observer')
}

export default {
  data () {
    return {
      width: 0,
      height: 0,
      highPopulationGrowth: false,
      carbonTax: false,
      step: 0,
      pStructureHeights: [0, 0, 0, 0],
      observer: null,
      scenarioPopulation: 2,
      scenarioCarbon: 0,
      scenarioNames: {
        population: ['declining', 'stagnent', 'growing', 'growing rapidly'],
        carbon: ['none', 'low', 'medium', 'high']
      }
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    ...mapGetters([
      'iam'
    ]),
    padding () {
      const { width, height } = this
      const w = (width - 4 * 16) / 3
      const x = w < 84 ? 8 : w < 232 ? 16 : 32
      const h = (height - 5.5 * 24) / 6
      const y = h < 56 ? 16 : h < 120 ? 24 : 32
      return { x, y }
    },
    chartWidth () {
      const { width, padding } = this
      return (width - 2 * padding.x) / 3
    },
    chartHeight () {
      return this.chartWidth < 112 ? 64 : this.chartWidth < 180 ? 80 : 132
      // const { height, padding } = this
      // return (height - 5.5 * padding.y) / 6
    },
    elements () {
      const { transformX, transformY, iam } = this
      return iam.elements.map(element => {
        let y = transformY(element.y)
        if (element.off) y += this.padding.y * 0.5
        return {
          ...element,
          transform: `translate(${transformX(element.x)} ${y})`
        }
      })
    },
    lines () {
      const { iam, width, height, transformX, transformY, step } = this
      return iam.lines.map(({points, color, minStep, maxStep}) => {
        return {
          color,
          opacity: (minStep == null || step >= minStep) && (maxStep == null || step <= maxStep) ? 1 : 0,
          points: points.map((p, i) => {
            const x = p[0] === 'min' ? -this.padding.x : p[0] === 'max' ? width + this.padding.x : transformX(p[0])

            let y
            if (p[1] === 'min') y = 1
            else if (p[1] === 'max') y = height - 1
            else if (p[2] === 'next') y = transformY(p[1]) - this.padding.y * 0.5
            else if (p[2] === 'off') y = transformY(p[1] - 1) + this.padding.y + this.chartHeight
            else y = transformY(p[1] - 1) + this.padding.y * 0.5 + this.chartHeight

            return `${x},${y}`
          }).join(' ')
        }
      })
    },
    scenario () {
      return `l00${this.scenarioPopulation === 3 ? 5 : 1}t${this.scenarioCarbon === 1 ? 15 : 0}`
    },
    pStructure () {
      return [{
        style: {
          'padding-top': `${this.padding.y}px`
        }
      }, {
        style: {
          'padding-top': `${(this.chartHeight + this.padding.y) * 2}px`
        }
      }, {
        style: {
          'padding-top': `${(this.chartHeight + this.padding.y) * 3 + this.padding.y}px`
        }
      }, {
        style: {
          'padding-top': `${(this.chartHeight + this.padding.y) * 4 + this.padding.y * 1.5}px`
        }
      }]
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    },
    'step' (newVal, oldVal) {
      if (oldVal === 2 && newVal === 3) this.highPopulationGrowth = true
      if (newVal < 3) this.highPopulationGrowth = this.carbonTax = false
    }
  },
  mounted () {
    this.$emit('setMaxWidth', 500)
    this.setWidth()
    this.observe()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.structureGraphic.getBoundingClientRect().width
        this.height = this.$refs.structureGraphic.getBoundingClientRect().height
        this.$emit('setHeight', this.height)
        this.setParagraphHeights()
      })
    },
    transformX (x) {
      const { padding, chartWidth } = this
      return x * (padding.x + chartWidth) - padding.x * 0.5
    },
    transformY (y) {
      const { padding, chartHeight } = this
      const height = padding.y + chartHeight
      let offset = this.pStructureHeights[0] + y * height
      if (y >= 2) offset += this.pStructureHeights[1]
      if (y >= 5) offset += this.pStructureHeights[2]
      return offset
    },
    setParagraphHeights () {
      this.pStructureHeights = '....'.split('').map((d, i) => {
        return this.$refs.structureText.children[i].children[0].getBoundingClientRect().height + this.padding.y
      })
    },
    observe () {
      // init intersection observer (client-side rendering only)
      if (typeof window === 'undefined') return
      const observerOptions = {
        threshold: 0,
        rootMargin: `50% 0% -50% 0%`
      }

      this.observer = new window.IntersectionObserver(entries => {
        const intersectingElements = entries.filter(entry => entry.isIntersecting).map(entry => entry.target)
        if (intersectingElements.length > 0) {
          this.step = +intersectingElements[0].getAttribute('step')
        } else {
          this.step = 0
        }
      }, observerOptions)

      this.observer.observe(this.$refs.strucureOptions)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutIAMs {
  position: relative;
  background: $color-black;
  padding: $spacing-unit * 1.5 $spacing-unit;
  color: $color-white;
  margin-top: 0;

  p {
    font-family: $font-sans;
    @include light-text();;
  }

  width: 100vw;
  @include flex-column();

  @include media-query($device-wide) {
    width: calc(100vw - #{$nav-width-laptop});
  }

  .structure {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 760px;
    position: relative;

    .graphic-wrapper {
      align-self: center;
      position: absolute;
      width: 100%;
      height: 100%;
      // min-width: 288px;

      .graphic {
        width: 100%;
        height: 100%;
        top: 0px;
        overflow: visible;

        polyline {
          fill: none;
          stroke-width: 2;
          stroke-linecap: square;
          transition: opacity $transition-time;
          // stroke: $color-light-gray;

          &.yellow {
            stroke: $color-yellow
          }

          &.green {
            stroke: $color-green
          }

          &.blue {
            stroke: $color-blue
          }

          &.red {
            stroke: $color-red
          }

          &.violet {
            stroke: $color-violet
          }
        }
      }
    }

    .text-wrapper {
      z-index: 1;
      p {
        padding: $spacing-unit / 2 0;
      }

      .options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .slider {
          // border: 1px solid $color-gray;
          // border-radius: 2px;
          display: flex;
          // flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 0 $spacing-unit / 4;

          @include media-query($device-narrow) {
            margin: 0 $spacing-unit / 4 $spacing-unit / 4;
            padding: $spacing-unit / 2 $spacing-unit / 2 0;
          }

          display: flex;
          align-items: center;
          justify-content: center;

          span {
            width: 90px;
            font-size: 0.8em;

            @include media-query($device-narrow) {
              width: 100px;
              font-size: 0.7em;
            }

            &.b {
              font-weight: bold;
              text-align: right;
            }
          }

          input {
            width: 100px;
            margin: 0 $spacing-unit / 4;
          }
        }
      }
    }
  }
}
</style>
