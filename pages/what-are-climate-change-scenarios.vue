<template>
  <section class="wrapper">
    <h2>What are Climate Change Scenarios?</h2>

    <p>Although we know that global warming is happening today and already has an impact on nature and human society, climate change is foremost a phenomenon with its most wide-ranging consequences in the future. </p>

    <p>Climate change scenarios are plausible descriptions of how the future may unfold. They are based on the notion that the future, while inherently uncertain, is not entirely unknowable. Climate change scenarios are not about predicting the future, but rather about creating plausible, coherent and internally consistent descriptions of possible futures. </p>

    <p>The climate change community uses many types of scenarios, in this primer we will focus on three main types: climate change projections, climate impact projections, and mitigation scenarios. On the following pages we will introduce them in more detail and explain their mutual relation.</p>

    <LayoutRecap>
      <li>Climate change scenarios are a powerful tool for decision making in the context of climate change.</li>
    </LayoutRecap>
    <LayoutNextChapter/>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.wrapper {
  .scenario-overview {
    max-width: 720px;
    @include flex-column;
    svg {
      max-width: 540px;
      overflow: visible;
      text, polygon {
        fill: $color-text;
      }
      path {
        stroke: $color-text;
        stroke-width: 2;
      }
    }
  }
}

</style>
