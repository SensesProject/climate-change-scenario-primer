<template>
  <div class="LayoutHeader">
    LayoutHeader
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutHeader {
  width: 100vw;
  @include flex-column();
  background: $color-violet;
  color: $color-white;

  height: 25vh;
}
</style>
