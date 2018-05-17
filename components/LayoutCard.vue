<template>
  <div class="LayoutCard">
    <slot name="title"/>
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutCard {
  background: $color-pale-gray;
  // border: 1px solid $color-light-gray;
  box-shadow: 1px 1px 4px $color-gray;
  border-radius: 4px;
  min-width: 240px;
  min-height: 340px;
  padding: $spacing-unit / 4;

  margin-right: 16px;
}
</style>
