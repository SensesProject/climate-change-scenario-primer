<template>
  <div class="VisSsp">
    <img
      v-if="ssp === 1"
      src="~/assets/img/SSP1.png">
    <img
      v-if="ssp === 2"
      src="~/assets/img/SSP2.png">
    <img
      v-if="ssp === 3"
      src="~/assets/img/SSP3.png">
    <img
      v-if="ssp === 4"
      src="~/assets/img/SSP4.png">
    <img
      v-if="ssp === 5"
      src="~/assets/img/SSP5.png">
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
  width: 300px;
  max-width: 30vw;
  margin: 0 $spacing #{$spacing / 2} 0;
}
</style>
