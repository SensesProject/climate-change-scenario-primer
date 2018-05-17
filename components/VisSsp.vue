<template>
  <div class="VisSsp">
    <svg
      width="100%"
      height="100%"
      viewBox="-1 -1 2 2"
      preserveAspectRatio="xMinYMin">
      <circle
        :fill="fill"
        r="1"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    ssp: {
      type: Number,
      default: 1
    }
  },
  computed: {
    fill () {
      switch (this.ssp) {
        case 1:
          return '#39C88A'
        case 2:
          return '#1BA3D0'
        case 3:
          return '#B7005E'
        case 4:
          return '#FEAE00'
        default:
          return '#B3B3B3'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisSsp {
  width: 120px;
  max-width: 20vw;
  margin: 0 $spacing-unit #{$spacing-unit / 2} 0;
}
</style>
