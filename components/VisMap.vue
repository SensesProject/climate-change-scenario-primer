<template>
  <div class="VisMap">
    <img
      v-if="scenario === 'rcp26'"
      src="~/assets/img/rcp26.png">
    <img
      v-if="scenario === 'rcp60'"
      src="~/assets/img/rcp60.png">

    <div
      v-if="legend"
      class="key">
      <span>{{ min }}</span>
      <span
        v-for="(color, i) in colors"
        :key="`color-${i}`"
        :style="{background: color}"
        class="color"/>
      <span>{{ max }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scenario: {
      type: String,
      default: 'rcp26'
    },
    legend: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      colors: ['#00A5D5', '#10BBDD', '#79D1E4', '#BEE6EA', '#FFFBF0', '#F6BACE', '#EA77AA', '#DA2D85', '#C8005F'],
      max: '+12°C',
      min: '-12°C'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisMap {
  @include flex-column;
  .key {
    .color {
      height: 0.8em;
      width: 0.8em;
      display: inline-block;

      &:nth-child(2) {
        border-radius: 50% 0 0 50%;
        margin-left: 0.8em;
      }

      &:nth-last-child(2) {
        border-radius: 0 50% 50% 0;
        margin-right: 0.8em;
      }
    }
  }
}
</style>
