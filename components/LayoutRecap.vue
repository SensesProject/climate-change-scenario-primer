<template>
  <div class="LayoutRecap">
    <div class="box">
      <h3>Summary</h3>
      <ul>
        <slot/>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutRecap {
  width: 100vw;
  border-top: 1px solid $color-accent;
  border-bottom: 1px solid $color-accent;
  margin: $spacing-unit #{-$spacing-unit / 2} $spacing-unit #{-$spacing-unit / 2};
  transform: translateX(-50vw);
  display: flex;
  justify-content: center;

  .box {
    @include flex-column();
    transform: translateX(50vw);
    border: 1px solid $color-accent;
    border-left: none;
    margin: -1px;
    // max-width: 760px;
    justify-content: center;
    align-items: center;

    padding: $spacing-unit;
    margin-right: $spacing-unit;

    h3 {
      font-size: 1rem;
    }
    ul {
      max-width: calc(760px - #{$spacing-unit});
      list-style: url(~/assets/img/li.svg);

      li {
        margin: #{$spacing-unit / 4} 0;
      }
    }
  }
}
</style>
