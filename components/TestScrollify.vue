<template>
  <div
    ref="cycle"
    class="VisCycle">
    <svg
      :style="{background: colors[step % colors.length]}"
      :height="width"
      width="100%">
      <g/>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      width: 320,
      colors: ['#8665C7', '#FEAE00', '#39C88A', '#C8005F', '#00A5D5']
    }
  },
  computed: {
    ...mapState([
      'view'
    ])
  },
  watch: {
    'view.width' () {
      this.setWidth()
    }
  },
  mounted () {
    this.$emit('setMaxWidth', 320)
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = this.$refs.cycle.getBoundingClientRect().width
      this.$emit('setHeight', this.width)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisCycle {
  width: 100%;
  max-width: 320px;
}
</style>
