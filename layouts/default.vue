<template>
  <div class="root">
    <resize-observer
      class="hide-print"
      @notify="setClientWidth"
    />
    <SensesMenu />
    <LayoutNav />
    <nuxt />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SensesMenu from 'library/src/components/SensesMenu.vue'
import SensesCopy from 'library/src/components/SensesCopy.vue'
export default {
  components: {
    SensesMenu,
    SensesCopy
  },
  computed: {
    ...mapState(['view']),
    showMenu () {
      return !this.index && (this.view.showMenu || this.view.width >= 1400)
    },
    index () {
      return this.$route.name === 'index'
    }
  },
  mounted () {
    this.setClientWidth()
  },
  methods: {
    ...mapActions({
      setClientWidth: 'view/setClientWidth'
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.root {
  @include flex-column();
  align-items: center;
  width: 100%;
  min-height: 100vh;
  // padding: $spacing;
  background: $color-white;
  transition: color $transition-time, background $transition-time;

  @include ie {
    // &.index {
      display: block !important;
    // }
  }

  @include print {
    display: block;
    min-height: none;
  }
}
</style>
