<template>
  <span class="in-list-bullet">
    <svg width="16" height="16">
      <circle v-for="(c, i) in colors" :key="`c-${i}`"
              cx="4" :cy="-1 + (colors.length === 1 ? 8 : 5.5 + 5 * i)" r="4"
              :class="[c]"
      />
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.in-list-bullet {
  svg {
    vertical-align: middle;
    overflow: visible;
    circle {
      @include tint(fill);
      mix-blend-mode: multiply;
    }
  }
}
</style>
