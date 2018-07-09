<template>
  <div
    :class="{vis: interactive !== null}"
    class="LayoutCarousel">
    <div class="content-wrapper">
      <div class="left">
        <div class="text">
          <transition-group
            name="fade-text"
            mode="out-in">
            <div
              v-for="(s, i) in slotArray"
              v-if="step === i"
              :key="`s${i}`"
              class="slot-wrapper">
              <slot :name="`s${i}`"/>
            </div>
          </transition-group>
        </div>
      </div>
      <div
        v-if="interactive"
        class="right">
        <transition-group
          name="fade-chart">
          <component
            v-for="(s, i) in slotArray"
            v-if="step === i"
            :key="`v${i}`"
            :step="i"
            :is="interactive"/>
        </transition-group>
      </div>
    </div>
    <div class="navigation">
      <span
        class="arrow"
        @click="step = (step + slots - 1) % slots">←</span>
      <span
        v-for="(s, i) in slotArray"
        :key="`d${i}`"
        class="dot-wrapper"
        @click="step = i">
        <span
          :class="{active: step === i}"
          class="dot"/>
      </span>
      <span
        class="arrow"
        @click="step = (step + 1) % slots">→</span>
    </div>
  </div>
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
  border: 1px solid $color-gray;
  padding: $spacing-unit $spacing-unit $spacing-unit / 2 $spacing-unit;
  margin-bottom: $spacing-unit;
  width: 100%;
  max-width: calc(760px + #{$spacing-unit * 2});

  .content-wrapper {
    width: 100%;
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
      margin: $spacing-unit / 2 0;
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
      margin-right: $spacing-unit * 2;
      max-width: 600px;
    }
  }

  .left {
    height: 100%;
    @include flex-column;
    justify-content: space-between;
    width: 100%;

    .text {
      width: 100%;
      margin-bottom: $spacing-unit / 2;
    }
  }

  .navigation {
    cursor: default;
    @include flex-row();
    justify-content: center;

    .arrow {
      line-height: 1rem;
      font-family: $font-mono;
      padding: 0 $spacing-unit * 0.25;
      cursor: pointer;
      &:hover {
        color: $color-text-highlight;
      }
    }
    .dot-wrapper {
      display: inline-flex;
      padding: 0 $spacing-unit * 0.25;
      cursor: pointer;
      transform: translateY(0.5px);

      .dot {
        display: inline-block;
        width: $spacing-unit * 0.25;
        height: $spacing-unit * 0.25;
        background: $color-gray;
        border-radius: 50%;
        &.active {
          background: $color-text-highlight;
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
    transform: translateX($spacing-unit / 2);
  }

  .fade-text-leave-to{
    transform: translateX(-$spacing-unit / 2);
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
