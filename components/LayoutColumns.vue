<template>
  <div
    :class="{mobileReverse}"
    class="LayoutColumns">
    <div
      :class="{central}"
      class="left">
      <span
        v-if="leftTitle"
        class="title"
        v-html="leftTitle"/>
      <slot name="left"/>
    </div>
    <div
      v-if="!central"
      class="right">
      <span
        v-if="rightTitle"
        class="title"
        v-html="rightTitle"/>
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftTitle: {
      type: String,
      default: null
    },
    rightTitle: {
      type: String,
      default: null
    },
    mobileReverse: {
      type: Boolean,
      default: false
    },
    central: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutColumns {
  @include flex-column;
  overflow: hidden;
  justify-content: center;
  @include media-query($device-narrow) {
    @include ie {
      margin-left: -3.2rem !important;
    }
  }

  // max-width: $max-width-extended;

  &.mobileReverse {
    flex-direction: column-reverse;
  }

  > div {
    flex: 1;
    width: 100%;

    .title {
      display: block;
      text-align: center;
      font-size: 0.9em;
    }
  }
  .left {
    margin: 0 0 #{$spacing / 2} 0;

    &.central {
      margin: 0;
    }
  }

  @include media-query($device-narrow) {
    @include flex-row;
    align-items: flex-start;

    &.mobileReverse {
      flex-direction: row;
    }

    .left {
      margin: 0 #{$spacing / 2} 0 0;
    }
  }

  @include print {
    display: flex;
    flex-flow: row;

    .left {
      margin: 0 #{$spacing} 0 0;
    }
  }
}
</style>
