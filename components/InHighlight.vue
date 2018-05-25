<template>
  <span class="InHighlight">
    <span
      :class="{active: highlight === value}"
      class="highlight"
      @mouseover="highlight = value"
      @mouseout="reset()"><slot/><wbr></span>
  </span>
</template>

<script>
export default {
  props: {
    out: {
      type: Boolean,
      default: true
    },
    field: {
      type: String,
      default: 'test'
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    highlight: {
      get () {
        return this.$store.getters.getField(this.field)
      },
      set (value) {
        return this.$store.commit('updateField', {path: this.field, value})
      }
    }
  },
  methods: {
    reset () {
      if (this.out) this.highlight = null
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.InHighlight {
  padding-right: 0.3em;
  .highlight {
    cursor: default;
    color: $color-text;
    @include underline($color-gray);
    &.active {
      @include underline-active($color-violet);
    }
  }

  &.violet {
    .highlight {
      @include underline($color-violet);
      &.active {
        @include underline-active($color-violet);
      }
    }
  }

  &.blue {
    .highlight {
      @include underline($color-blue);
      &.active {
        @include underline-active($color-blue);
      }
    }
  }

  &.green {
    .highlight {
      @include underline($color-green);
      &.active {
        @include underline-active($color-green);
      }
    }
  }

  &.yellow {
    .highlight {
      @include underline($color-yellow);
      &.active {
        @include underline-active($color-yellow);
      }
    }
  }

  &.red {
    .highlight {
      @include underline($color-red);
      &.active {
        @include underline-active($color-red);
      }
    }
  }
}
</style>
