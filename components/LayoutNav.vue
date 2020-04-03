<template>
  <div
    :class="{ showMenu }"
    class="layout-nav hide-print"
  >
    <nav :class="{ showMenu }">
      <ul>
        <li>
          <h1 class="title h3 uppercase">
            Climate Change Scenarios
          </h1>
        </li>
        <nuxt-link
          v-for="chapter in chapters"
          :key="chapter.path"
          :to="chapter.path"
        >
          <li>
            <span
              v-if="chapter.cycle == null"
              class="title"
            >
              {{ chapter.title }}
            </span>
            <div
              v-else
              class="cycle"
            >
              <div class="cycle-part">
                <VisCyclePart v-bind="chapter.cycle" />
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
  props: {
    closeMenu: {
      type: Function,
      default: null
    }
  },
  computed: mapState({
    chapters: state => state.chapters,
    showMenu: state => state.view.showMenu
  }),
  watch: {
    '$route.path' () {
      if (this.closeMenu) this.closeMenu()
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.layout-nav {
  hyphens: none;
  width: 100%;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      li {
        display: block;
        padding: $spacing / 8 0;
        &:first-child {
          padding-top: 0;
        }

        .title {
          color: $color-deep-gray;

          &.h3 {
            color: $color-black;
          }
        }

        .cycle {
          position: relative;
          .cycle-part {
            transform: translate(0, -$spacing / 8);
            position: absolute;
          }
        }
      }

      .nuxt-link-exact-active li .title {
        color: $color-neon;
      }
      a {
        li {
          .title {
            &:hover {
              color: getColor(neon, 40);
            }
          }
        }
      }
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
