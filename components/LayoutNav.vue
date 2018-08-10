<template>
  <div
    :class="{ showMenu }"
    class="Navigation">
    <div
      class="hamburger"
      @click="toggleMenu">
      <svg
        width="28px"
        height="32px">
        <path d="M0,6 L28,6 M0,16 L28,16 M0,26 L28,26"/>
      </svg>
    </div>
    <div
      class="mobile"
      @click="toggleMenu">
      <transition name="fade">
        <div
          v-if="showMenu"
          class="overlay"/>
      </transition>
    </div>
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
  watch: {
    '$route.path' () {
      this.toggleMenu()
    }
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
  // @include media-query($device-narrow) {
  //   font-size: 1rem;
  // }

  .hamburger {
    // width: 60px;
    // height: 64px;
    position: absolute;
    left: 0;

    @include flex-row();

    svg {
      margin: $spacing-unit;
      path {
        stroke-width: 1.5;
        stroke: $color-accent;
      }
    }
  }

  .mobile {
    position: absolute;
    left: 0;

    .overlay {
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: $color-white;
      opacity: 0.7;
    }

    @include media-query($device-wide) {
      display: none;
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

    @include media-query($device-wide) {
      transform: translateX(0);
    }

    &.showMenu {
      transform: translateX(0);
    }

    // font-weight: bold;
    @include light-text();

    @include media-query($device-wide) {
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

              @include media-query($device-narrow) {
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
