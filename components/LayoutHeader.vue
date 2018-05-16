<template>
  <div
    :class="{index}"
    class="LayoutHeader">
    <section class="wrapper">
      <header>
        <h1>SENSES</h1>
      </header>
      <h2>{{ title }}</h2>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      const { $store, $route } = this
      return $store.getters.chapters.find(chapter => chapter.route === $route.path).title
    },
    index () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutHeader {
  width: 100vw;
  @include flex-column();
  background: $color-violet;
  color: $color-white;
  height: 30vh;

  &.index {
    height: 60vh;
  }

  .wrapper {
    height: 100%;
    padding: $spacing-unit / 2;
    @include flex-column();
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>
