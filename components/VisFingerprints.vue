<template>
  <div
    ref="VisFingerprints"
    class="VisFingerprints">
    <svg
      :style="{'font-size': fontSize}"
      :height="width"
      width="100%"
      viewBox="0 0 100 100">
      <g>
        <circle
          v-for="property in fingerprints"
          :key="property.id"
          :cx="property.x"
          :cy="property.y"
          r="2"
          class="property"/>
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      width: 0,
      colors: ['#8665C7', '#FEAE00', '#39C88A', '#C8005F', '#00A5D5']
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    ...mapGetters([
      'fingerprints'
    ]),
    fontSize () {
      return (100 / this.width) * 16
    }
  },
  watch: {
    'view.width' () {
      this.setWidth()
    }
  },
  mounted () {
    this.$emit('setMaxWidth', 500)
    this.setWidth()
  },
  methods: {
    setWidth () {
      this.width = 0
      this.$nextTick(() => {
        this.width = this.$refs.VisFingerprints.getBoundingClientRect().width
        this.$emit('setHeight', this.width)
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisFingerprints {
  width: 100%;
  max-width: 500px;

  svg {
  }
}
</style>
