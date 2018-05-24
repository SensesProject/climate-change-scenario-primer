<template>
  <span
    :class="{active: highlight === value}"
    class="InHighlight"
    @mouseover="highlight = value"
    @mouseout="highlight = null">
    <slot/>
  </span>
</template>

<script>
export default {
  props: {
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
  created () {
    console.log(this.highlight)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.InHighlight {
  &.yellow {
    background: transparentize($color-yellow, 0.5);

    &.active {
      background: transparentize($color-yellow, 0.2);
    }
  }
}
</style>
