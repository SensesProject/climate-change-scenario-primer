<template>
  <div class="LayoutCards">
    <div class="side left">
      <div
        v-if="offset > 0"
        class="arrow">
        <div
          class="icon"
          @click="goLeft()">←</div>
      </div>
      <div class="background"/>
    </div>
    <div class="side right">
      <div
        v-if="offset < totalCards - cardsInView"
        class="arrow">
        <div
          class="icon"
          @click="goRight()">←</div>
      </div>
      <div class="background"/>
    </div>
    <div
      :style="transform"
      class="inner">
      <slot/>
      <div class="spacer"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      offset: 0,
      totalCards: 13
    }
  },
  computed: {
    ...mapState([
      'view'
    ]),
    x () {
      if (this.offset === 0) return 0
      return -(256 * this.offset) + 16
    },
    transform () {
      return { transform: `translateX(${this.x}px)` }
    },
    cardsInView () {
      return this.view.width < 820 ? 2 : 3
    }
  },
  watch: {
    'view.width' () {
      this.offset = 0
    }
  },
  methods: {
    goLeft () {
      this.offset -= this.cardsInView
    },
    goRight () {
      this.offset += this.cardsInView
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutCards {
  margin-left: -$spacing-unit / 2;
  width: calc(#{$max-width} + 0);
  max-width: 100vw;
  position: relative;

  @include media-query($on-palm) {
    overflow: hidden;
  }

  .inner {
    @include flex-row();
    justify-content: flex-start;
    overflow: scroll;
    padding: #{$spacing-unit / 2};
    z-index: -1;

    .spacer {
      min-width: 1px;
      min-height: $spacing-unit;
    }

    @include media-query($on-palm) {
      overflow: visible;
      transition: transform .4s;
    }
  }

  .side {
    position: absolute;
    width: $spacing-unit;
    height: 100%;

    .arrow {
      display: none;
      position: absolute;
      height: 100%;
      width: $spacing-unit;

      @include media-query($on-palm) {
        @include flex-row;
      }

      .icon {
        width: $spacing-unit *.75;
        height: $spacing-unit *.75;
        background: $color-black;
        border-radius: 50%;
        @include flex-row;
        @include light-text();
        color: $color-white;
        font-family: $font-mono;
        font-weight: bold;
        cursor: default;
      }
    }

    .background {
      height: 100%;
      width: $spacing-unit / 2;
      @include transparent-gradient($color-white, left)
    }

    &.right {
      right: 0px;
      transform: scaleX(-1);
    }
  }

  // .right {
  //   position: absolute;
  //   right: 0px;
  //   width: $spacing-unit / 2;
  //   height: 100%;
  //   @include transparent-gradient($color-white, right)
  // }
}
</style>
