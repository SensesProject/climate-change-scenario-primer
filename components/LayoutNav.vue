<template>
  <div
    :class="{ showMenu }"
    class="Navigation">
    <div
      class="hamburger"
      @click="toggleMenu">
      <svg
        width="28px"
        height="22px">
        <path d="M0,1 L28,1 M0,11 L28,11 M0,21 L28,21"/>
      </svg>
    </div>
    <transition name="fade">
      <div
        v-if="!$store.state.view.onLaptop"
        class="mobile"
        @click="toggleMenu">
        <transition name="fade">
          <div
            v-if="showMenu"
            class="overlay"/>
        </transition>
      </div>
    </transition>
    <nav :class="{ showMenu }">
      <ul>
        <nuxt-link
          v-for="chapter in chapters"
          :key="chapter.path"
          :to="chapter.path">
          <li>
            <component
              v-if="chapter.cycle == null"
              :is="chapter.path === '/' ? 'h1' : 'span'"
              :class="{index: chapter.path === '/'}"
              class="title">{{ chapter.title }}</component>
            <div
              v-else
              class="cycle">
              <div class="cycle-part">
                <VisCyclePart :type="chapter.cycle"/>
              </div>
              <div class="title">
                {{ chapter.title }}
              </div>
            </div>
          </li>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapState(['chapters'])
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.Navigation {
  position: fixed;
  left: 0;
  hyphens: none;
  z-index: 1000;
  // font-size: 1.25rem;
  // @include media-query($on-palm) {
  //   font-size: 1rem;
  // }

  .hamburger {
    width: 60px;
    height: 64px;
    position: absolute;
    left: 0;

    @include flex-row();

    svg {
      path {
        stroke-width: 1.5;
        stroke: $color-accent;
      }
    }
  }

  .mobile {
    position: absolute;
    left: 0;
    transform: translateX($nav-width);

    .overlay {
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: $color-white;
      opacity: 0.7;
    }
  }
  nav {
    position: absolute;
    width: $nav-width;
    height: 100vh;
    background: $color-accent;
    left: 0;
    top: 0;
    padding: $spacing-unit / 2;
    overflow: scroll;

    transform: translateX(-$nav-width);
    transition: transform .4s;

    @include media-query($on-laptop) {
      transform: translateX(0);
    }

    &.showMenu {
      transform: translateX(0);
    }

    // font-weight: bold;
    @include light-text();

    @include media-query($on-laptop) {
      padding: $spacing-unit / 2;
      width: $nav-width-laptop;
    }

    ul {
      a {
        li {
          display: block;
          color: $color-white;
          line-height: 1.5;
          padding: $spacing-unit * 0.5 $spacing-unit * 0.5;
          overflow-y: hidden;
          overflow-x: visible;

          .title {
            opacity: .7;
            transition: opacity .2s;
            padding-top: 0;

            &.index {
              font-size: 2rem;
              line-height: 1.25;
              opacity: 1;
              letter-spacing: 0px;

              @include media-query($on-palm) {
                font-size: 1.6rem;
              }
            }

            &:hover {
              opacity: 1;
            }
          }

          .cycle {
            @include flex-row();
            justify-content: flex-start;
            position: relative;
            // background: url('data:image/svg+xml;utf8,<svg width="38px" height="400px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="32" height="400"/><rect id="Rectangle-4" stroke="#FFFFFF" stroke-width="2" x="7" y="1" width="30" height="398" rx="15"></rect><polyline id="Path-2-Copy" stroke="#4E40B2" stroke-width="3" points="14 382 7 375 7 375 0 382"></polyline><polyline id="Path-2" stroke="#FFFFFF" stroke-width="2" points="12 382 7 377 7 377 2 382"></polyline></svg>');
            // background: url('data:image/svg+xml;utf8,<svg width="38px" height="38px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="32" height="32"/></svg>');

            .cycle-part {
              height: 100%;
              width: 32px;
              min-width: 32px;
              margin-right: $spacing-unit / 2;
            }
          }
        }

        &.nuxt-link-exact-active li .title {
          opacity: 1;
        }
      }
    }
  }
}
</style>
