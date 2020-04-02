<template>
  <div class="vis-cycle-part">
    <svg
      width="24"
      height="32"
    >
      <path
        v-if="position == null"
        d="M0.5,32 0.5,0 M15.5,0 15.5,32"
      />
      <path
        v-if="position == 'start'"
        d="M0.5,32 L0.5,8 C0.5,1,8,1,8,1 C15.5,1,15.5,8,15.5,8 L15.5,32"
      />
      <path
        v-if="position == 'end'"
        d="M15.5,0 L15.5,24 C15.5,31,8,31,8,31 C0.5,31,0.5,24,0.5,24 L0.5,0"
      />
      <circle
        v-for="(c, i) in circles"
        :key="`c-${i}`"
        :class="[c]"
        :transform="`translate(16 ${16 + (circles.length === 1 ? 0 : i === 0 ? -3 : 3)})`"
        r="3"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: null
    },
    circles: {
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
.vis-cycle-part {
  svg {
    transform: translate(-100%);

    path {
      stroke: $color-black;
      stroke-width: 1;
      fill: none;
    }

    circle {
      @include tint(fill)
    }
  }

}
</style>
