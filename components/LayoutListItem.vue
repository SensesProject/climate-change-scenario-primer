<template>
  <p class="LayoutListItem">
    <slot
      name="graphic"
      class="graphic"/>
    <slot class="text"/>
  </p>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutListItem {
  @include flex-row;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
