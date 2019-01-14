<template lang="pug">
  div.LayoutCloseChapter.center.extended.no-margin
    div.box.summary.violet
      div
        h3 Summary
        ul
          slot
    router-link.box.next-chapter.violet.hide-print(:to="nextChapter.path")
      div.white
        span.next Next Chapter
        h3.h2 {{ nextChapter.title }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['chapters']),
    nextChapter () {
      return this.chapters[this.nextIndex]
    },
    nextIndex () {
      const { $route } = this
      return (this.chapters.map(c => c.path.replace(/\//g, '')).indexOf($route.path.replace(/\//g, '')) + 1) % this.chapters.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutCloseChapter {
  margin: $spacing 0;
  .box {
    // width: 100vw;
    // max-width: $max-width-extended;
    // flex: 1;
    padding: $spacing $spacing / 2;
    @include flex-column();

    * {
      max-width: $max-width;

      @include print {
        max-width: none;
      }
    }
    &.summary {
      // background: $color-accent;
      border: 1px solid $color-accent;

      h3 {
        margin-bottom: $spacing / 2;
      }

      ul {
        list-style: url(~/assets/img/li-violet.svg);
        line-height: 1.4 ;

        @include print {
          list-style-position: inside;
        }

        li + li {
          margin-top: $spacing / 2;
        }
      }
    }
    &.next-chapter {
      background: $color-accent;
      .next {
        font-family: $font-mono;
        display: block;
        margin-bottom: $spacing * 0.4;

        &::before {
          content: '→';
          display: inline-block;
          position: absolute;
          transform: translateX(calc(-100% #{-$spacing / 4}));
          transition: transform $transition-time;
        }
      }
      &:hover {
        .next {
          &::before {
            transform: translateX(calc(-100% #{-$spacing / 8}));
          }
        }
      }
    }
  }

  @include media-query($device-medium) {
    @include flex-row();
    align-items: stretch;
    .box {
      padding: $spacing $spacing * 2;
      align-items: flex-start;
    }

    .summary {
      width: 60%;
    }

    .next-chapter {
      width: 40%;
      // border: 1px solid $color-accent;
    }
  }
}
</style>
