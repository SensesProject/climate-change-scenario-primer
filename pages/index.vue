<template lang="pug">
  section.index
    div.wrapper
      h1.white Climate Change Scenarios
      p.sans.white We can’t predict the future, but scenarios allow us to explore possible futures, the assumptions they depend upon, and the courses of action that could bring them about.
      p.sans.white This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate and climate impacts.
      router-link.button(:to="nextChapter.path")
        span.mono.violet
          span.arrow →
          |  Get Started
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['chapters']),
    nextChapter () {
      const {chapters, $route} = this
      return chapters[chapters.map(c => c.path).indexOf($route.path) + 1]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.index {
  width: 100vw;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: $spacing * 2 0;
  position: absolute;
  @include gradient();
  transform: translateX(0);

  @include media-query($device-wide) {
    background: $color-white;
  }

  &.page-enter {
    transform: translateY(5vw);
  }

  &.page-leave-to {
    transform: translateY(-5vw);
  }
}
.wrapper {
  font-size: 1.2em;
  margin: $spacing / 2;
  transform: translateX(0);
  min-height: none;
  transform: translateX(0);
  max-width: $max-width-extended;
  hyphens: none;

  @include media-query($device-wide) {
    @include gradient();
    padding: $spacing * 2;
  }

  h1 {
    background: none;
  }

  .button {
    margin: $spacing 0;
    background: $color-white;
    padding: $spacing / 2 $spacing * 2;

    @include media-query($device-wide) {
      margin-bottom: 0;
    }
    .arrow {
      transition: transform $transition-time;
      display: inline-block;
    }
    &:hover {
      .arrow {
        transform: translateX($spacing / 8);
      }
    }
  }
}
</style>
