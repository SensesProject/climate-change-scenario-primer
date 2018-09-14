<template>
  <div class="LayoutNextChapter">
    <div class="overflow">
      <router-link :to="nextChapter.path">
        <section
          ref="box"
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
  computed: {
    ...mapState(['chapters']),
    nextChapter () {
      return this.chapters[this.nextIndex]
    },
    nextIndex () {
      const { $route } = this
      return (this.chapters.map(c => c.path.replace(/\//g, '')).indexOf($route.path.replace(/\//g, '')) + 1) % this.chapters.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutNextChapter {
  margin-bottom: $spacing * 2;
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  z-index: 1;

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
    padding: $spacing * 0.8 $spacing * 1.6;
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
