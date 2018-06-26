<template>
  <div class="LayoutNextChapter">
    <section class="wrapper">
      <router-link :to="nextChapter.path">
        <span
          v-if="nextIndex < chapters.length - 1 && nextIndex !== 0"
          class="next">Next Chapter →</span>
        <span
          v-if="nextIndex === chapters.length - 1"
          class="next">Final Chapter →</span>
        <span
          v-if="nextIndex === 0"
          class="next">To the Beginning →</span>
        <h3>{{ nextChapter.title }}</h3>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['chapters']),
    nextChapter () {
      // const { $store, nextIndex } = this
      // const chapters = $store.state.chapters
      return this.chapters[this.nextIndex]
    },
    nextIndex () {
      const { $route } = this
      return (this.chapters.map(c => c.path).indexOf($route.path) + 1) % this.chapters.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutNextChapter {
  width: 100%;
  @include flex-column();
  justify-content: space-around;
  height: $spacing-unit * 6;
  background: $color-pale-gray;
  border-top: 1px solid $color-light-gray;

  .wrapper {
    @include flex-column;
    align-items: flex-start;

    .next {
      font-family: $font-mono;
      color: $color-text;
    }
  }
}
</style>
