<template>
  <div
    :style="{background: colors[step % colors.length]}"
    class="TestScrollifyInteractive"/>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      colors: ['#8665C7', '#FEAE00', '#39C88A', '#C8005F', '#00A5D5']
    }
  },
  watch: {
    // step (step) {
    //   console.log('STEPSTEPSTEP: ', step)
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/global";

.TestScrollifyInteractive {
  width: 100%;
  height: 200px;
  transition: background 0.2s;
}
</style>
