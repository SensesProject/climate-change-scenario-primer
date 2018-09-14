<template>
  <section class="wrapper">
    <h2 class="h1">Energy, Land Use and Emissions</h2>
    <p>Scenario assumptions - e.g. offered by the SSP-RCP framework - tell us the narrative and give us the general conditions for possible futures. Based on those scenario assumptions integrated assessment models and climate impact models generate a more detailed description how possible futures could look like. They calculate energy and land use variables and the correlated emissions for both – business-as-usual and climate change mitigation assumptions.</p>

    <p>Integrated assessment models (IAMs) provide consistent pathways for macro-economic, energy system related and land use variables and connect them to the resulting emissions.</p>

    <LayoutIAMs/>

    <p>Feeding scenario assumptions into models will get us scenarios – a set of output variables describing the possible future consistent to the input assumptions. Let&#8217;s take a look how some of those variables play out in different scenarios.</p>

    <LayoutColumns>
      <VisChart
        slot="left"
        legend="ssp"
        scenario="population"/>
      <VisChart
        slot="right"
        scenario="gdp"/>
    </LayoutColumns>

    <p>
      Assumptions on population growth and GDP are already part of the SSP scenario assumptions. This shows us how they turn out over time and in numbers. As you can see the
      <InHighlight
        field="charts.ssp"
        class="red"
        value="SSP3">SSP3</InHighlight>scenario of regional rivalry leads us to continued population growth but relatively low growth in GDP.
      <InHighlight
        field="charts.ssp"
        class="green"
        value="SSP1">SSP1</InHighlight>(Sustainability) and
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">SSP5</InHighlight>(Fossil-fuelled development) show similar patterns in population growth but significant differences when it comes to GDP.
    </p>

    <LayoutColumns>
      <VisChart
        slot="left"
        :static-filter="{ssp: null, rcp: 'Baseline'}"
        legend="ssp"
        scenario="finalenergy"/>
      <VisChart
        slot="right"
        :static-filter="{ssp: null, rcp: 'Baseline'}"
        scenario="emissions"/>
    </LayoutColumns>

    <p>
      The high GDP of
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">SSP5</InHighlight>comes at a cost: High energy needs and with that lots of C02-emissions.
    </p>
    <LayoutRecap>
      <li>Integrated assessment models (IAMs) are complex systems that use socioeconomic assumptions to produce scenarios.</li>
      <li>Applying SSP-assumptions on to IAMs allows us to explore how land use, energy use and emissions will play out in those futures.</li>
    </LayoutRecap>
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
  .ssp-selection {
    margin-top: $spacing * 0.5;
  }
}
</style>
