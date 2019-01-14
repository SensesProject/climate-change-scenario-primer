<template lang="pug">
  header.LayoutHeader
    span.menu-button.hide-print(@click="toggleMenu")
      span.burger-icon(:class="{active: showMenu}")
    Logo
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    showMenu: state => state.view.showMenu
  }),
  methods: mapActions(['toggleMenu'])
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
@import "sass-burger";

.LayoutHeader {
  width: 100vw;
  height: $spacing * 2;
  border-bottom: 1px solid $color-light-gray;
  position: fixed;
  background: $color-white;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 900;

  @include print {
    position: relative;
    width: 100%;
  }

  .menu-button {
    display: inline-block;
    padding: $spacing / 2;
    .burger-icon {
      @include burger(24px, 2px, 5px, $color-accent);
      &.active {
        @include burger-to-cross;
      }
    }
  }

  @include media-query($device-wide) {
    background: none;
    border: none;
    pointer-events: none;

    * {
      pointer-events: auto;
    }

    .menu-button {
      .burger-icon {
        display: none;
      }
    }

    .Logo {
      transform: translateY(3.2rem);
    }
  }
}
</style>
