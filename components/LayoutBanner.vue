<template>
  <div class="LayoutBanner">
    <span>Beta Version</span>
    <a href="mailto:senses-project@fh-potsdam.de?subject=Primer Feedback&body=Did you like our website?"><span>→ Provide Feedback!</span></a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutBanner {
  bottom: 0px;
  font-weight: bold;
  position: fixed;
  z-index: 9999;
  width: 100vw;
  color: $color-white;
  background: $color-red;
  @include flex-row;
  justify-content: space-between;
  padding: $spacing-unit / 4 $spacing-unit;

  a {
    color: $color-white;
    font-weight: normal;
  }
}
</style>
