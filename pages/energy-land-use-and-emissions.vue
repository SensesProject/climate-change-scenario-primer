<template>
  <section class="wrapper">
    <h2 class="h1">Energy, Land Use and Emissions</h2>
    <p>Socioeconomic scenarios provide general narratives and key socioeconmic developments to characterize possible futures. To understand what this means for future greenhouse gas emissions and climate change, those assumptions need to be translated into quantitative projections for future energy and land use. This is done by integrated assessment models (IAMs) representing the world’s coupled energy-land-economy-climate system and its development over the 21<sup>st</sup> century. Based on socioeconomic scenarios, IAMs derive consistent pathways for macroeconomic, energy system, and land use variables and project resulting emissions of greenhouse gases and air pollutants until the end of the century. They calculate these energy-land-emissions pathways for both baseline projections (What can happen?) and mitigation goals (What should happen?).</p>

    <p>Integrated assessment models (IAMs) provide consistent pathways for macroeconomic, energy system related, and land use variables and connect them to the resulting emissions.</p>

    <LayoutIAMs/>

    <p>So feeding socioeconomic scenario assumptions into IAMs will get us scenarios for energy use, land use and emissions. Let&#8217;s take a look how this plays out for the socioeconomic futures described by the SSPs. Population and GDP developments in the SSPs are shown below.</p>

    <LayoutColumns class="extended">
      <VisChart
        slot="left"
        legend="ssp"
        scenario="population"/>
      <VisChart
        slot="right"
        legend="ssp"
        hide-legend
        scenario="gdp"/>
    </LayoutColumns>

    <p>As you can see the
      <InHighlight
        field="charts.ssp"
        class="red"
        value="SSP3">
        SSP&#8239;3
      </InHighlight>
      scenario of regional rivalry leads to continued population growth but relatively low growth in GDP. In contrast,
      <InHighlight
        field="charts.ssp"
        class="green"
        value="SSP1">
        SSP&#8239;1
      </InHighlight>
      (Sustainability) and
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">
        SSP&#8239;5
      </InHighlight>
      (Fossil-fuelled development) show a peak and decline in population growth, but much higher GDP growth. Although they have a similar pattern of population growth, they show significantly different levels of GDP growth.
    </p>

    <LayoutColumns class="extended">
      <VisChart
        slot="left"
        :static-filter="{ssp: null, rcp: 'Baseline'}"
        legend="ssp"
        scenario="finalenergy"/>
      <VisChart
        slot="right"
        :static-filter="{ssp: null, rcp: 'Baseline'}"
        legend="ssp"
        hide-legend
        scenario="emissions"/>
    </LayoutColumns>

    <p>
      This and other factors such as technological progress and lifestyles affect future energy and land use. Here we show the examples of energy demand and CO<sub>2</sub> emissions. The resource intensity of
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">
        SSP&#8239;5
      </InHighlight>
      combined with the high GDP growth comes at a cost: High energy needs and lots of CO<sub>2</sub> emissions.
    </p>
    <LayoutRecap>
      <li>Integrated assessment models (IAMs) are complex models of the energy-land-economy-climate system that use socioeconomic assumptions to produce energy, land use and emissions scenarios.</li>
      <li>IAMs show that the widely varying socioeconomic futures described by the SSPs lead to large variations in energy, land use and emissions in baseline projections without  climate policy interventions.</li>
      <li>IAMs are used to derive both baseline projections (What can happen?) as well as pathways oriented to achieving mitigation goals (What should happen?)</li>
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

  .LayoutColumns {
    margin: -$spacing 0;
    padding: $spacing 0;
  }
}
</style>
