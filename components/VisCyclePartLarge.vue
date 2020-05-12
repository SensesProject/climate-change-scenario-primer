<template>
  <div
    :class="[type]"
    class="VisCyclePart"
  >
    <svg
      v-if="type === 'first'"
      class="start"
      width="32px"
      height="20px"
    >
      <path
        :class="colors[0]"
        d="M31,20 L31,16 C31,7.71572875 24.2842712,1 16,1 C7.71572875,1 1,7.71572875 1,16 L1,20"
      />
    </svg>
    <svg
      v-if="type === 'normal'"
      :class="[type]"
      class="lines"
      width="32px"
      height="640px"
      viewBox="0 0 32 632"
      preserveAspectRatio="none"
    >
      <path
        :class="colors[0]"
        d="M 1,0 L1,632"
      />
      <path
        :class="colors[index]"
        class="arrow"
        d="M31,0 L31,24 M26,12.5 L31,17.5 L36,12.5"
      />
      <path
        :class="colors[(index + 1) % colors.length]"
        d="M31,24 L31,632"
      />
    </svg>
    <svg
      v-if="type === 'last'"
      width="32px"
      height="20px"
    >
      <path
        :class="colors[0]"
        d="M1,0 L1,4 C1,12.2842712 7.71572875,19 16,19 C24.2842712,19 31,12.2842712 31,4 L31,0"
      />
      <!-- <path
          d="M-5,2 L1,-4 L7,2"
          class="mask"/>
        <path d="M-4,3 L1,-2 L6,3"/> -->
    </svg>
    <svg
      v-if="type === 'normal'"
      class="dots"
      width="32px"
      height="32px"
    >
      <g transform="translate(31 0)">
        <g>
          <circle
            :class="colors[(index + 1) % colors.length]"
            r="12"
          />
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
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      colors: ['blue', 'green', 'yellow', 'red', 'purple']
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisCyclePart {
  position: relative;
  background: red;
  align-self: flex-start;

  &.first {
    align-self: flex-end;
  }
  svg {
    position: absolute;
    display: block;
    overflow: visible;

    path {
      stroke-width: 1.5;
      fill: none;
      @include tint(stroke);

      &.mask {
        stroke: $color-white;
        stroke-width: 3;
      }
    }

    circle {
      stroke: $color-white;
      stroke-width: 8;
      @include tint(fill);
    }

    &.start {
      transform: translateY(-100%);
    }

    &.lines {
      // transform: translateY(-50%);

      &.first {
        transform: translateY(0%);
      }

      &.last {
        // transform: translateY(-100%);
      }

      transform: translateY(-7px);
      @include media-query($device-narrow) {
        transform: translateY(0);
      }
    }

    &.dots {
      transform: translateY(27px);
      @include media-query($device-narrow) {
        transform: translateY(34px);
      }
    }
  }

}
</style>
