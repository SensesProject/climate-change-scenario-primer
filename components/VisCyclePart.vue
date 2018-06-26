<template>
  <div class="VisCyclePart">
    <svg
      v-if="type === 'first'"
      class="start"
      width="32px"
      height="20px">
      <path d="M31,20 L31,16 C31,7.71572875 24.2842712,1 16,1 C7.71572875,1 1,7.71572875 1,16 L1,20"/>
    </svg>
    <svg
      :class="[type]"
      class="lines"
      width="32px"
      height="100px"
      viewBox="0 0 32 32"
      preserveAspectRatio="none">
      <path d="M1,0 L1,32 M 31,0 L31,32"/>
    </svg>
    <svg
      v-if="type === 'last'"
      width="32px"
      height="20px">
      <path d="M1,0 L1,4 C1,12.2842712 7.71572875,19 16,19 C24.2842712,19 31,12.2842712 31,4 L31,0"/>
      <path
        d="M-5,2 L1,-4 L7,2"
        class="mask"/>
      <path d="M-4,3 L1,-2 L6,3"/>
    </svg>
    <svg
      class="dots"
      width="32px"
      height="32px">
      <g transform="translate(31 0)">
        <g v-if="type !== 'double'">
          <circle r="5.5"/>
        </g>
        <g v-else>
          <circle
            cy="-6"
            r="5.5"/>
          <circle
            cy="6"
            r="5.5"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisCyclePart {
  position: relative;
  background: red;
  svg {
    position: absolute;
    display: block;
    overflow: visible;

    path {
      stroke: $color-white;
      stroke-width: 2;
      fill: none;

      &.mask {
        stroke: $color-accent;
        stroke-width: 3;
      }
    }

    circle {
      fill: $color-white;
      stroke: $color-accent;
      stroke-width: 3;
    }

    &.start {
      transform: translateY(-20px);
    }

    &.lines {
      transform: translateY(-50%);

      &.first {
        transform: translateY(0%);
      }

      &.last {
        transform: translateY(-100%);
      }
    }
  }

}
</style>
