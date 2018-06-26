<template>
  <div class="root">
    <resize-observer @notify="setClientWidth" />
    <LayoutNav/>
    <Logo/>
    <!-- <LayoutHeader/> -->
    <nuxt class="chapter"/>
    <!-- <LayoutNextChapter/> -->
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

  .main {

  }
}
</style>
