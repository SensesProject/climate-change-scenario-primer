<template>
  <div class="LayoutColumns">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {

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
