<template lang="pug">
  a(
    :class='{ invert }',
    href='/',
    class='Logo'
  )
    svg(
      width='32px'
      height='32px'
    )
      circle(
        cx=12,
        cy=12,
        r=11.5
      )
      circle(
        cx=24,
        cy=28,
        r=3.5
      )
      circle(
        cx=24,
        cy=11,
        r=7.5
      )
    | SENSES
</template>

<script>
export default {
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.Logo {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: $color-accent;
  font-family: $font-mono;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  margin: $spacing-unit;
  transition: color $transition-time;

  svg {
    margin-right: $spacing-unit * 0.25;
    fill: none;
    stroke: $color-accent;
    stroke-width: 1.5;
    overflow: visible;
    transition: stroke $transition-time, stroke-width $transition-time;
  }

  &.invert {
    color: $color-white;
    svg {
      stroke: $color-white;
      stroke-width: 1;
    }
  }
}
</style>
