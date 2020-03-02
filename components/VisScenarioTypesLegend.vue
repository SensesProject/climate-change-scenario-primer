<template lang="pug">
  span.scenario-types
     span.circle.hide-print.green(v-if="color === 'green' || color === 'both'")
     span.circle.hide-print.blue(v-if="color === 'blue' || color === 'both'")
     span.circle.hide-print.yellow(v-if="color === 'yellow' || color === 'both2'")
     span.circle.hide-print.violet(v-if="color === 'violet' || color === 'both2'")
     img(
       src="~/assets/img/scenario-types/scenario-types-blue.png",
       alt="Pathways",
       v-if="color === 'blue'"
     )
     img(
       src="~/assets/img/scenario-types/scenario-types-green.png",
       alt="Projections",
       v-if="color === 'green'"
     )
     img(
       src="~/assets/img/scenario-types/scenario-types-both.png",
       alt="Projections & Pathways",
       v-if="color === 'both'"
     )
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'both'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.scenario-types {
  margin: 0 $spacing / 8 0 0;
  // position: absolute;
  .circle {
    display: inline-block;
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    &:nth-of-type(1) {
      margin-left: 0.3em;
      margin-right: -0.1rem;
    }

    &:nth-of-type(2) {
      transform: translateX(-0.2em);
      margin-right: -0.2em;
      mix-blend-mode: multiply;
    }

    &.green {
      background: $color-green;
    }
    &.blue {
      background: $color-blue;
    }
    &.yellow {
      background: $color-yellow;
    }
    &.violet {
      background: $color-violet;
    }
  }

  img {
    display: none;

    @include print {
      display: inline-block;
      margin-left: 0.3em;
    }
  }
}
</style>
