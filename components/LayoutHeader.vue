<template lang="pug">
  header.LayoutHeader#header
    span.menu-button.hide-print(@click="toggleMenu")
      span.burger-icon(:class="{active: showMenu}")
    span.attribution.print-only {{ url }}
    Logo
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: function (st, e) {
    return {
      url: `https://climatescenario.org/primer${this.$route.path}`
    }
  },
  computed: mapState({
    showMenu: state => state.view.showMenu
  }),
  watch: {
    $route: function () {
      this.url = `https://climatescenario.org/primer${this.$route.path}`
    }
  },
  methods: mapActions({
    toggleMenu: 'view/toggleMenu'
  })
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

  @include ie {
    left: 0;
  }

  @include print {
    position: relative;
    width: calc(100% - 2.4cm);
    margin: 0 auto;
    border: 1px solid $color-light-gray;
    border-radius: 6px;
  }

  .attribution {
    color: $color-dark-gray;
    font-size: 70%;
    margin-left: $spacing / 2;
    content: counter(page);
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
