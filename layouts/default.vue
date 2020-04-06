<template>
  <div>
    <resize-observer
      class="hide-print"
      @notify="setClientWidth"
    />
    <div class="root">
      <!-- <template v-if="view.width >= 900"> -->
      <!-- <SensesMenu />
        <LayoutNav /> -->
      <!-- </template> -->
      <!-- <template v-else> -->
      <SensesMenu>
        <template v-slot:about="{ closeMenu }">
          <LayoutNav class="menu-nav" :close-menu="closeMenu" />
        </template>
      </SensesMenu>
      <LayoutNav class="side-nav" />
      <!-- </template> -->
      <nuxt class="wide" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import 'vue-resize/dist/vue-resize.css'
import SensesMenu from 'library/src/components/SensesMenu.vue'
export default {
  components: {
    SensesMenu
  },
  computed: {
    ...mapState([
      'view'
    ])
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
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;

  @include max-width($medium) {
    grid-template-columns: auto;
  }

  // .nav {
    // border-right: 1px solid $color-deep-gray;
    .senses-menu {
      grid-column: 1 / 3;
    }
    .layout-nav {
      align-self: start;
      position: sticky;
      top: $spacing * 3;
      padding: $spacing * 0.75 $spacing / 2;

      @include max-width($medium) {
        position: static;
        padding: 0;
      }
      @include max-width($narrow) {
        position: static;
        padding-top: $spacing * 0.75;
        padding-bottom: 0;
      }
    }
    .side-nav {
      @include max-width($medium) {
        display: none;
      }
    }
    .menu-nav {
      @include min-width($medium) {
        display: none;
      }
    }
  // }

  // old
  @include ie {
    display: block !important;
  }

  @include print {
    display: block;
    min-height: none;
  }
}
</style>
