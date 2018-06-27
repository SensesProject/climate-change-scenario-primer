<template>
  <div class="root">
    <resize-observer @notify="setClientWidth" />
    <Logo invert/>
    <div class="container">
      <nuxt class="chapter"/>
      <LayoutNextChapter/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.$nextTick(this.setClientWidth)
  },
  methods: {
    ...mapActions([
      'setClientWidth'
    ])
  }
}

</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.root {
  width: 100vw;
  background: $color-violet;
  min-height: 100vh;
  color: $color-white;
  @include flex-column();
  @include light-text ();
}
</style>
