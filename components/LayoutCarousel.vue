<template>
  <div class="LayoutCarousel">
    <div class="left">
      <slot/>
    </div>
    <component
      v-if="interactive"
      v-bind="interactive"/>
  </div>
</template>

<script>
export default {
  props: {
    interactive: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutCarousel {
  @include flex-row;
  // align-items: flex-start;
  border: 1px solid $color-gray;
  padding: $spacing-unit;

  .left {
    height: 100%;

    h4 {
      font-size: 1.5em;
      color: $color-text-highlight;
    }

    p {
      font-family: $font-sans;
    }

    margin-right: $spacing-unit * 2;
    max-width: 600px;
  }
}
</style>
