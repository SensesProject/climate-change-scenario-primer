<template>
  <section class="wrapper index">
    <h1>Climate Change<br>Scenarios</h1>
    <div class="intro">
      <p>
        We can’t predict the future. Scenarios allow us to explore possible futures based on assumptions about them.
      </p>
      <p>
        This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate and climate impacts.
      </p>
    </div>
    <div class="get-started">
      <router-link :to="nextChapter.path">
        <div class="box">
          <span class="next">Get Started</span>
        </div>
      </router-link>
    </div>
  </section>
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
      return (this.chapters.map(c => c.path).indexOf($route.path) + 1) % this.chapters.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.wrapper {
  @include flex-column;
  max-width: 1280px;

  h1 {
    max-width: none;
    color: #FFFFFF;
    margin-top: -$spacing-unit * 2;
    margin-bottom: $spacing-unit * 2;
    line-height: 1.1;

    font-size: 2rem;

    @include media-query($device-narrow) {
      font-size: 3rem;
    }

    @include media-query($device-medium) {
      font-size: 4rem;
    }

    @include media-query($device-wide) {
      font-size: 6rem;
    }
  }

  .intro {
    width: 100%;
    @include flex-column;

    @include media-query($device-medium) {
      width: 80%;
    }

    p {
      font-size: 1.3rem;
      max-width: 700px;
      align-self: flex-end;

      @include media-query($device-medium) {
        max-width: 640px;
        font-size: 1.3rem;
      }

      @include media-query($device-wide) {
        max-width: 700px;
        font-size: 1.4rem;
      }
    }
  }

  .get-started {
    margin-top: $spacing-unit * 2;
    align-self: flex-start;

    @include media-query($device-medium) {
      width: 70%;
      display: flex;
      justify-content: center;
    }

    .box {
      background: $color-white;
      padding: $spacing-unit * 0.5 $spacing-unit * 2.5 ;
      a {
        max-width: 100%;
      }
      .next {
        font-family: $font-mono;
        color: $color-accent;
        font-size: 1.3rem;

        @include media-query($device-wide) {
          font-size: 1.4rem;
        }

        &::before {
          content: '→';
          margin-right: $spacing-unit * 0.375;
          display: inline-block;
          transition: transform $transition-time;
        }
      }

      &:hover {
        .next {
          &::before {
            transform: translateX($spacing-unit * 0.125);
          }
        }
      }
    }
  }
}

</style>
