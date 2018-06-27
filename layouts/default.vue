<template>
  <div class="root">
    <resize-observer @notify="setClientWidth" />
    <LayoutNav/>
    <Logo/>
    <!-- <LayoutHeader/> -->
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
  @include flex-column();
  // @include flex-row();

  .container {
    width: 100vw;
    margin-top: $spacing-unit * 4;
    @include flex-column();

    @include media-query($device-wide) {
      width: calc(100vw - #{$nav-width-laptop});
      left: $nav-width-laptop;
      align-self: flex-end;
    }
  }
}
</style>
