<template>
  <div class="layout-next-chapter">
    <router-link class="button hide-print" :to="nextChapter.path">
      <div class="tiny mono uppercase">
        next chapter →
      </div>
      <div class="white">
        <h3 class="h2 mono">
          {{ nextChapter.title }}
        </h3>
      </div>
    </router-link>
    <LayoutList>
      <slot />
    </LayoutList>
  </div>
</template>

<script>
import LayoutList from '@/components/LayoutList.vue'
import { mapState } from 'vuex'
export default {
  components: {
    LayoutList
  },
  computed: {
    ...mapState(['chapters']),
    nextChapter () {
      return this.chapters[this.nextIndex]
    },
    nextIndex () {
      const { $route } = this
      return (
        (this.chapters
          .map(c => c.path.replace(/\//g, ''))
          .indexOf($route.path.replace(/\//g, '')) +
          1) %
        this.chapters.length
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.layout-next-chapter {
  display: grid;
  grid-template-columns: 2fr 1fr;

  @include max-width($narrow) {
    grid-template-columns: auto;
  }

  .layout-list {
    margin: $spacing / 2 #{-$spacing / 2} 0;

    @include max-width($touching) {
      border-radius: $border-radius;
    }

    @include max-width($narrow) {
      border-radius: 0;
    }

    @include min-width($narrow) {
      grid-row: 1;
      margin: 0 #{$spacing} 0 #{-$spacing / 2};
    }
  }
  .button {
    @include min-width($narrow) {
      grid-column: 2 / 3;
    }
    margin: 0 #{-$spacing / 2} 0 #{-$spacing / 2};
    padding: $spacing / 2 $spacing / 2;
    cursor: pointer;

    &:hover {
      color: $color-white;
      .h2 {
        font-style: italic;
      }
    }

    .h2 {
      margin-top: $spacing / 4;
      hyphens: auto;
    }
    @include max-width($touching) {
      border-radius: $border-radius 0 0 $border-radius;
    }
    @include max-width($narrow) {
      border-radius: 0;
    }
  }
}
</style>
