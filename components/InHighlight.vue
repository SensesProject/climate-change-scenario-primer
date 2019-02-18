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
    },
    initActive: {
      type: Boolean,
      default: false
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
  created () {
    if (this.initActive) this.highlight = this.value
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
  font-family: $font-sans;
  color: inherit;

  @include print {
    padding-right: 0;
  }

  .highlight {
    cursor: default;
    @include underline($color-gray);
    &.active {
      @include underline-active($color-violet);
    }
  }

  &.violet {
    .highlight {
      @include underline($color-violet);

      @include print {
        @include underline(transparent);
        font-weight: bold;
        color: $color-violet;
      }

      &.active {
        @include underline-active($color-violet);
      }
    }
  }

  &.blue {
    .highlight {
      @include underline($color-blue);

      @include print {
        @include underline(transparent);
        font-weight: bold;
        color: $color-blue;
      }

      &.active {
        @include underline-active($color-blue);
      }
    }
  }

  &.green {
    .highlight {
      @include underline($color-green);

      @include print {
        @include underline(transparent);
        font-weight: bold;
        color: $color-green;
      }

      &.active {
        @include underline-active($color-green);
      }
    }
  }

  &.yellow {
    .highlight {
      @include underline($color-yellow);

      @include print {
        @include underline(transparent);
        font-weight: bold;
        color: $color-yellow;
      }

      &.active {
        @include underline-active($color-yellow);
      }
    }
  }

  &.red {
    .highlight {
      @include underline($color-red);

      @include print {
        @include underline(transparent);
        font-weight: bold;
        color: $color-red;
      }

      &.active {
        @include underline-active($color-red);
      }
    }
  }
}
</style>
