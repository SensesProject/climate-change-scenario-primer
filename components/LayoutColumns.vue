<template>
  <div class="LayoutColumns">
    <div class="left">
      <span
        v-if="leftTitle"
        class="title"
        v-html="leftTitle"/>
      <slot name="left"/>
    </div>
    <div class="right">
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
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutColumns {
  @include flex-column;
  width: 100%;
  max-width: 1160px;

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
    margin: 0 0 #{$spacing-unit / 2} 0;
  }

  @include media-query($device-narrow) {
    @include flex-row;
    align-items: flex-start;

    .left {
      margin: 0 #{$spacing-unit / 2} 0 0;
    }
  }
}
</style>
