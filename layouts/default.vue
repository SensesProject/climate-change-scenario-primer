<template lang="pug">
  div(
    :class='{index}',
    class='root')
    resize-observer(@notify='setClientWidth')
    transition(name='fade-delayed')
      LayoutNav(v-if='!index')
    Logo(:invert='index')
    nuxt
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    index () {
      return this.$route.name === 'index'
    }
  },
  mounted () {
    this.setClientWidth()
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
  @include flex-column();
  width: 100vw;
  min-height: 100vh;

  transition: color $transition-time, background $transition-time;

  &.index {
    background: $color-violet;
    color: $color-white;
  }
}
</style>
