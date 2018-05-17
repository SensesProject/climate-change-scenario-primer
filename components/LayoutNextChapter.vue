<template>
  <div class="LayoutNextChapter">
    <section class="wrapper">
      <router-link :to="nextChapter.route">
        <span class="next">Next Chapter →</span>
        <h3>{{ nextChapter.title }}</h3>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    nextChapter () {
      const { $store, $route } = this
      const chapters = $store.getters.chapters
      const nextChapter = (chapters.map(c => c.route).indexOf($route.path) + 1) % chapters.length
      return chapters[nextChapter]
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
  height: $spacing-unit * 4;
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
