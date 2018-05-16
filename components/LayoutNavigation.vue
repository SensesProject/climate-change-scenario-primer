<template>
  <div class="LayoutNavigation">
    <section class="wrapper">
      LayoutNavigation
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutNavigation {
  width: 100vw;
  @include flex-column();
  position: fixed;
  bottom: 0;
  height: $spacing-unit * 1.5;
  background: $color-violet;
  color: $color-white;
}
</style>
