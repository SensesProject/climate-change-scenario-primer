<template>
  <ul class="layout-list tiny">
    <slot />
  </ul>
</template>

<script>
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.layout-list {
  margin: $spacing #{-$spacing / 2};
  padding: $spacing / 2 $spacing / 2 $spacing / 4;
  background: transparentize(getColor(neon, 100), 0.7);
  border-radius: $border-radius;
  color: getColor(neon, 40);
  list-style: none;

  @include max-width($touching) {
    border-radius: 0;
  }

  li {
    margin: $spacing / 4 $spacing / 2;
    max-width: $narrow;

    &::before {
      content: "●";
      position: absolute;
      transform: translateX(calc(-50% - #{$spacing * 0.375}));
    }
  }

  a {
    color: inherit;
    background: none;

    &:hover {
      color: getColor(neon, 20);
    }
  }
}
</style>
