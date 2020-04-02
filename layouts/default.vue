<template>
  <div>
    <resize-observer
      class="hide-print"
      @notify="setClientWidth"
    />
    <div class="root">
      <template v-if="view.width >= 900">
        <div class="nav">
          <SensesMenu
            disable-scroll-lock
            narrow
          />
          <LayoutNav />
        </div>
      </template>
      <template v-else>
        <SensesMenu>
          <LayoutNav slot="about" />
        </SensesMenu>
      </template>
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

  @include max-width($medium) {
    grid-template-columns: auto;
  }

  .nav {
    border-right: 1px solid $color-deep-gray;
    .layout-nav {
      position: sticky;
      top: $spacing * 2;
      padding: $spacing * 0.75 $spacing / 2;
    }
  }

  .wide {
    padding: $spacing;
  }

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
