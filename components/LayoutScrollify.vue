<script>
import { mapState } from 'vuex'
// polyfill intersection-observer for client-side rendering only
if (typeof window !== 'undefined') {
  require('intersection-observer')
}

export default {
  props: {
    vis: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      observerOptions: {
        threshold: 0,
        rootMargin: '-50% 0% -50% 0%'
      },
      step: 0,
      height: 200,
      maxWidth: 460
    }
  },
  computed: {
    ...mapState([
      'view'
    ])
  },
  watch: {
    'view.onPalm' (onPalm) {
      if (onPalm) this.$nextTick(this.observe)
    }
  },
  mounted () {
    this.observe()
  },
  methods: {
    stickyVis (createElement) {
      const { view, vis, step } = this
      if (!view.onPalm) return null
      return createElement(
        'div',
        {
          class: ['interactive'],
          style: {
            'max-width': `${this.maxWidth}px`
          }
        },
        [
          createElement(
            'div',
            {
              class: ['sticky'],
              style: {
                top: `calc(50% - ${this.height / 2}px)`
              }
            },
            [
              createElement(
                vis,
                {
                  props: { step },
                  on: {
                    setHeight: this.setHeight,
                    setMaxWidth: this.setMaxWidth
                  }
                }
              )
            ]
          )
        ]
      )
    },
    staticVis (createElement, step) {
      const { view, vis } = this
      if (view.onPalm) return null
      return createElement(
        'div',
        {
          class: ['interactive']
        },
        [
          createElement(
            vis,
            {
              props: { step },
              on: {
                setHeight: this.setHeight
              }
            }
          )
        ]
      )
    },
    sections (createElement) {
      const { staticVis, $slots } = this
      return createElement(
        'div',
        { class: ['sections'] },
        [
          $slots.default.map((section, step) => {
            return createElement(
              'div',
              {
                class: {
                  section: true,
                  active: step === this.step
                },
                attrs: { step },
                ref: step
              },
              [
                staticVis(createElement, step),
                section
              ]
            )
          })
        ]
      )
    },
    observe () {
      // init intersection observer (client-side rendering only)
      if (typeof window === 'undefined') return

      const { observerOptions, $refs } = this

      this.observer = new window.IntersectionObserver(entries => {
        const intersectingElements = entries.filter(entry => entry.isIntersecting).map(entry => entry.target)
        if (intersectingElements.length > 0) {
          this.step = +intersectingElements[0].getAttribute('step')
          this.$emit('input', this.step)
        }
      }, observerOptions)

      Object.keys($refs).forEach(key => {
        this.observer.observe($refs[key])
      })
    },
    setHeight (height) {
      const { $refs, view } = this
      Object.keys($refs).forEach(key => {
        $refs[key].children[0].style.height = view.onPalm ? `${height}px` : `auto`
      })
      this.height = height
    },
    setMaxWidth (maxWidth) {
      this.maxWidth = maxWidth
    }
  },
  render (createElement) {
    const { stickyVis, sections } = this
    return createElement(
      'div',
      { class: ['LayoutScrollify'] },
      [
        stickyVis(createElement),
        sections(createElement)
      ]
    )
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/variables";
@import "~@/assets/style/mixins";

.LayoutScrollify {
  @include media-query($on-palm) {
    margin: #{$spacing-unit * 2} 0;
  }

  display: flex;

  > .interactive {
    display: none;

    @include media-query($on-palm) {
      display: initial;
      flex: 1;

      .sticky {
        position: sticky;
        top: calc(50% - 100px);
      }
    }
  }

  .sections {
    flex: 1;

    @include media-query($on-palm) {
      padding-left: $spacing-unit / 2;
    }

    .section {

      .interactive {
        margin-bottom: $spacing-unit;
        margin-top: $spacing-unit;
        @include flex-row();
      }

      @include media-query($on-palm) {
        transition: opacity 0.2s;
        opacity: 0.3;

        &.active {
          opacity: 1;
        }

        .interactive {
          display: none;
        }

        &:first-child > div {
          margin-top: 0 !important;
        }

        &:last-child > div {
          margin-bottom: 0 !important;
        }

        &:first-child > div > *:first-child {
          margin-top: 0 !important;
        }

        &:last-child > div > *:last-child {
          margin-bottom: 0 !important;
        }
      }

      > div {
        @include media-query($on-palm) {
          @include flex-column;
          align-items: flex-start;
          justify-content: space-around;
          min-height: 200px;
          margin: $spacing-unit 0;

          p {
            &:first-of-type {
              margin-top: 0;
            }
            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
