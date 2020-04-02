<template>
  <div
    :class="{ showMenu }"
    class="Navigation hide-print"
    @click="closeMenu"
  >
    <nav :class="{ showMenu }">
      <ul>
        <nuxt-link
          v-for="chapter in chapters"
          :key="chapter.path"
          :to="chapter.path"
        >
          <li>
            <component
              :is="chapter.path === '/' ? 'h1' : 'span'"
              v-if="chapter.cycle == null"
              :class="{h2: chapter.path === '/'}"
              class="title"
            >
              {{ chapter.title }}
            </component>
            <div
              v-else
              class="cycle"
            >
              <div class="cycle-part">
                <VisCyclePart :type="chapter.cycle" />
              </div>
              <div class="title">
                {{ chapter.title }}
              </div>
            </div>
          </li>
        </nuxt-link>
      </ul>
      <nuxt-link
        class="imprint"
        to="/imprint"
      >
        Imprint
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    chapters: state => state.chapters,
    showMenu: state => state.view.showMenu
  }),
  methods: mapActions({
    closeMenu: 'view/closeMenu'
  })
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.Navigation {
  position: fixed;
  z-index: 1000;
  top: $spacing * 2;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - #{$spacing * 2});
  padding-top: $spacing;
  background-image: linear-gradient(90deg, $color-white 320px, transparentize($color-white, 1) 1400px);
  hyphens: none;
  overflow: auto;

  @include media-query($device-wide) {
    width: 320px;
    padding-top: 0;
    height: auto;
    background: none;
  }

  nav {
    width: 100%;
    max-width: 300px;
    min-height: calc(100% - #{$spacing});
    display: none;
    background: $color-white;
    position: absolute;

    @include media-query($device-wide) {
      display: flex;
      background: none;
      min-height: 100%;
    }
    &.showMenu {
      display: flex;
    }

    flex-direction: column;
    justify-content: space-between;

    font-size: 1.2em;

    @include media-query($device-narrow) {
      font-size: 1em;
    }

    ul {
      a {
        li {
          display: block;
          padding: $spacing / 4 $spacing / 2;
          overflow-y: hidden;
          overflow-x: visible;

          @include media-query($device-narrow) {
            font-size: 1em;
          }

          .title {
            opacity: 1;
            transition: opacity .2s;
            line-height: 1.4;

            &.index {
              font-size: 2rem;
              line-height: 1.25;
              // opacity: 1;
              letter-spacing: 0px;
              // color: $color-accent;
              @include media-query($device-narrow) {
                font-size: 1.6rem;
              }
            }

            &:hover {
              color: darken($color-accent, 15);
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
              margin-right: $spacing / 2;
            }
          }
        }

        &.nuxt-link-exact-active li .title {
          opacity: 1;
          color: $color-black;
        }

        &:first-of-type {
          li {
            padding-top: 0;

            @include media-query($device-narrow) {
              padding-top: $spacing / 4;
            }
          }
        }
      }
    }

    .imprint {
      padding: 0 $spacing / 2 $spacing / 4 $spacing / 2;
    }
  }
  @include media-query($device-wide) {
    @media (max-height: 760px) {
      position: absolute;
      nav {
        position: relative;
      }
    }
  }
}
</style>
