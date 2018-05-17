<template>
  <div class="LayoutNextChapter">
    <section class="wrapper">
      <router-link :to="nextChapter.route">
        <span
          v-if="nextIndex < chapters - 1 && nextIndex !== 0"
          class="next">Next Chapter →</span>
        <span
          v-if="nextIndex === chapters - 1"
          class="next">Last Chapter →</span>
        <span
          v-if="nextIndex === 0"
          class="next">To the Beginning →</span>
        <h3>{{ nextChapter.title }}</h3>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    nextChapter () {
      const { $store, nextIndex } = this
      const chapters = $store.getters.chapters
      return chapters[nextIndex]
    },
    nextIndex () {
      const { $store, $route } = this
      const chapters = $store.getters.chapters
      return (chapters.map(c => c.route).indexOf($route.path) + 1) % chapters.length
    },
    chapters () {
      return this.$store.getters.chapters.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutNextChapter {
  width: 100vw;
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
