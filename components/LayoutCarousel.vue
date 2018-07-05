<template>
  <div class="LayoutCarousel">
    <div class="left">
      <div class="text">
        <transition-group
          name="fade-text"
          mode="out-in">
          <div
            v-if="step === 0"
            key="s0"
            class="slot-wrapper">
            <slot name="s0"/>
          </div>
          <div
            v-if="step === 1"
            key="s1"
            class="slot-wrapper">
            <slot name="s1"/>
          </div>
          <div
            v-if="step === 2"
            key="s2"
            class="slot-wrapper">
            <slot name="s2"/>
          </div>
        </transition-group>
      </div>
      <div class="navigation">
        <span
          class="arrow"
          @click="step = (step + 2) % 3">←</span>
        <span
          class="dot-wrapper"
          @click="step = 0">
          <span
            :class="{active: step === 0}"
            class="dot"/>
        </span>
        <span
          class="dot-wrapper"
          @click="step = 1">
          <span
            :class="{active: step === 1}"
            class="dot"/>
        </span>
        <span
          class="dot-wrapper"
          @click="step = 2">
          <span
            :class="{active: step === 2}"
            class="dot"/>
        </span>
        <span
          class="arrow"
          @click="step = (step + 1) % 3">→</span>
      </div>
    </div>
    <div>
      <transition-group
        name="fade-chart">
        <component
          v-if="step === 0"
          key="v0"
          :step="0"
          :is="interactive"/>
        <component
          v-if="step === 1"
          key="v1"
          :step="1"
          :is="interactive"/>
        <component
          v-if="step === 2"
          key="v2"
          :step="2"
          :is="interactive"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    interactive: {
      type: String,
      default: 'VisSspComparison'
    }
  },
  data () {
    return {
      step: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutCarousel {
  @include flex-row;
  // align-items: flex-start;
  border: 1px solid $color-gray;
  padding: $spacing-unit;
  margin-bottom: $spacing-unit;

  .left {
    height: 100%;
    @include flex-column;
    justify-content: space-between;

    margin-right: $spacing-unit * 2;
    max-width: 600px;

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
