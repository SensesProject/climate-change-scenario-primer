<template>
  <section class="wrapper">
    <h2>What are Climate Change Scenarios?</h2>

    <p>Although we know that global warming is happening today and already has an impact on nature and human society, climate change is foremost a phenomenon with its most wide-ranging consequences in the future. </p>

    <p>While we understand the mechanisms that lead to global warming, the immense complexity of the climate system is associated with deep uncertainties. So instead of making predictions, the climate change community uses <strong>climate change scenarios</strong> in order to talk about the future. These scenarios provide us with profound insights on how climate change will proceed. They support better decision making and they enable us to reflect on different futures.</p>

    <p>Climate change scenarios are plausible descriptions of how the future may unfold. They are based on the notion that the future, while inherently uncertain, is not entirely unknowable. Climate change scenarios are not about predicting the future, but rather about creating plausible, coherent and internally consistent descriptions of possible futures. </p>

    <p>The climate change community uses many different types of scenarios. Scenarios are also used at different scales, from global scenarios to local and sectoral scenarios. However, the scenario space can be divided into two main groups: <strong>target-oriented</strong> and <strong>undetermined</strong> scenarios. </p>

    <p><strong>Target-oriented scenarios</strong> often start with an image of the future that is desired and propose how a specific target can be reached. <strong>Undetermined scenarios</strong> tackle the question of what can happen. They are mostly used on the global level and are based on complex computer models that determine different scenarios based on key drivers (like demographics, economics or technology) and their relationships. </p>

    <LayoutRecap>
      <li>Climate change scenarios are a powerful tool for decision making in the context of climate change.</li>
      <li>Scenarios can be either target-oriented or undetermined.</li>
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
