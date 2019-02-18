<template lang="pug">
  div.LayoutCarousel.extended.no-margin(:class="{vis: interactive !== null}")
    div.content-wrapper.default.center.hide-print
      div.left
        div.text
          transition-group(name="fade-text", mode="out-in")
            div(
              v-for="(s, i) in slotArray",
              v-if="step === i",
              :key="`s${i}`",
              class="slot-wrapper")
              slot(:name="`s${i}`")
    div.content-wrapper.default.center.print-only
      div.left
        div.text
          transition-group(name="fade-text", mode="out-in")
            div(
              v-for="(s, i) in slotArray",
              :key="`s${i}`",
              class="slot-wrapper")
              slot(:name="`s${i}`")
    div.navigation.hide-print
      span.arrow.white(@click="step = (step + slots - 1) % slots") ←
      span(
        v-for="(s, i) in slotArray"
        :key="`d${i}`"
        class="dot-wrapper"
        @click="step = i")
        span.dot(:class="{active: step === i}")
      span.arrow.white(@click="step = (step + 1) % slots") →
</template>

<script>
export default {
  props: {
    interactive: {
      type: String,
      default: null
    },
    slots: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      step: 0
    }
  },
  computed: {
    slotArray () {
      return '.'.repeat(this.slots).split('')
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutCarousel {
  @include flex-column;
  justify-content: space-between;
  // align-items: flex-start;
  // border: 1px solid $color-gray;
  background: $color-black;
  padding: $spacing 0 $spacing 0;
  // margin-bottom: $spacing;

  @include print {
    background-color: transparent;
    padding: $spacing $spacing 0;
    border: 1px solid $color-black;
    display: block !important;
    min-height: none !important;
  }

  .content-wrapper {
    @include flex-column;

    .left {
      flex: 1;
      align-self: flex-start;
    }

    .right {
      position: relative;
      flex: 1;
      max-width: 420px;
      width: 100%;
      margin: $spacing / 2 0;
    }

    @include media-query($device-medium) {
      @include flex-row;
      align-items: flex-start;
    }
  }

  &.vis {
    width: auto;
    max-width: none;
    .left {
      margin-right: $spacing * 2;
      max-width: 600px;
    }
  }

  .left {
    height: 100%;
    @include flex-column;
    justify-content: space-between;
    width: 100%;

    @include print {
      display: block !important;
    }

    .text {
      width: 100%;
      // margin-bottom: $spacing / 2;
    }
  }

  .navigation {
    cursor: default;
    @include flex-row();
    justify-content: center;
    align-self: center;
    // margin-top: -$spacing;

    .arrow {
      line-height: 1rem;
      font-family: $font-mono;
      padding: 0 $spacing * 0.25;
      cursor: pointer;
      transition: transform .2s;
      &:first-of-type {
        &:hover {
          transform: translateX(-0.1em);
        }
      }
      &:last-of-type {
        &:hover {
          transform: translateX(0.1em);
        }
      }
    }
    .dot-wrapper {
      display: inline-flex;
      padding: 0 $spacing * 0.25;
      cursor: pointer;
      transform: translateY(0.5px);

      .dot {
        display: inline-block;
        width: $spacing * 0.25;
        height: $spacing * 0.25;
        border: 1.5px solid $color-white;
        // background: $color-white;
        border-radius: 50%;
        &.active {
          // border: 1.5px solid $color-white;
          // background: $color-text-highlight;
          background: $color-white;
        }
      }
    }
  }

  .fade-text-leave-active {
    transition: opacity $transition-time, transform $transition-time;
  }

  .fade-text-enter-active {
    transition: opacity $transition-time $transition-time, transform $transition-time $transition-time;
  }

  .fade-text-enter, .fade-text-leave-to{
    opacity: 0;
    height: 0px;
  }
  .fade-text-enter {
    transform: translateX($spacing / 2);
  }

  .fade-text-leave-to{
    transform: translateX(-$spacing / 2);
  }

  .fade-chart-leave-active {
    position: absolute;
    z-index: -1;
    transition: opacity $transition-time * 2 $transition-time;
  }

  .fade-chart-enter-active {
    z-index: 10;
    transition: opacity $transition-time * 2;
  }

  .fade-chart-enter, .fade-chart-leave-to{
    opacity: 0;
    // height: 0px;
  }
}
</style>
