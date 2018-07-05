<template>
  <div
    :class="{index}"
    class="root">
    <resize-observer @notify="setClientWidth" />
    <LayoutBanner/>
    <transition name="fade-delayed">
      <LayoutNav v-if="!index"/>
    </transition>
    <!-- <LayoutNav :hide-menu="index"/> -->
    <Logo :invert="index"/>
    <!-- <LayoutHeader/> -->
    <!-- <div class="container"> -->
    <nuxt/>
    <!-- <LayoutNextChapter/> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    index () {
      return this.$route.name === 'index'
    }
  },
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
  min-height: 100vh;
  transition: color $transition-time, background $transition-time;

  &.index {
    background: $color-violet;
    color: $color-white;
  }
}
</style>
