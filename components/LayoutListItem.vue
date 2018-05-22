<template>
  <div class="LayoutListItem">
    <slot
      name="graphic"
      class="graphic"/>
    <slot class="text"/>
  </div>
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
