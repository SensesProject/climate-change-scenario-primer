<template>
  <div class="LayoutNextChapter">
    <div class="overflow">
      <router-link :to="nextChapter.path">
        <section
          ref="box"
          :class="{ active }"
          class="box">
          <span class="next">{{ label }}</span>
          <h3>{{ nextChapter.title }}</h3>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// if (typeof window !== 'undefined') {
//   require('intersection-observer')
// }

export default {
  props: {
    label: {
      type: String,
      default: 'Next Chapter'
    }
  },
  data () {
    return {
      // observerOptions: {
      //   threshold: 0,
      //   rootMargin: '10% 0% 0% 0%'
      // },
      active: false
    }
  },
  computed: {
    ...mapState(['chapters']),
    nextChapter () {
      return this.chapters[this.nextIndex]
    },
    nextIndex () {
      const { $route } = this
      return (this.chapters.map(c => c.path).indexOf($route.path) + 1) % this.chapters.length
    }
  },
  mounted () {
    // this.observe()
  },
  methods: {
    // observe () {
    //   if (typeof window === 'undefined') return
    //
    //   const { observerOptions, $refs } = this
    //
    //   this.observer = new window.IntersectionObserver(entries => {
    //     // console.log('OBSERVED', entries)
    //     setTimeout(() => {
    //       this.active = entries[0].isIntersecting
    //     }, 400)
    //   }, observerOptions)
    //   this.observer.observe($refs.box)
    //
    //   // Object.keys($refs).forEach(key => {
    //   //   this.observer.observe($refs[key])
    //   // })
    // }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutNextChapter {
  margin-bottom: $spacing-unit * 2;
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;

  .overflow {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 1000px;
  }

  .box {
    width: 100%;
    max-width: 460px;
    background: $color-accent;
    padding: $spacing-unit * 0.8 $spacing-unit * 1.6;
    transition: transform $transition-time, opacity $transition-time;
    // opacity: 0;
    // transform: translateX(100%);

    // &.active {
    //   opacity: 1;
    //   transform: translateX(0);
    // }

    .next {
      color: $color-white;
      font-family: $font-mono;
      margin-bottom: 1rem;

      &::before {
        content: '→';
        display: inline-block;
        position: absolute;
        transform: translateX(-200%);
        transition: transform $transition-time;
      }
    }
    h3 {
      margin-top: 1rem;
      color: $color-white;
      font-size: 1.4rem;
    }

    &:hover {
      .next {
        &::before {
          transform: translateX(-150%);
        }
      }
    }
  }
}
</style>
