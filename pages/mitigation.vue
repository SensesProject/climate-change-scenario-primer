<template lang="pug">
  section.wrapper
    h2.h1 Mitigation
    p The Paris Agreement was a historic step in global efforts to combat climate change. Countries agreed to take action to hold global mean temperature increase well below  2&thinsp;°C and pursue efforts to limit warming to 1.5&thinsp;°C.
    p Such temperature targets can be translated to various other quantities: emissions budgets of cumulated future greenhouse gas (GHG) emissions and stabilization levels of atmospheric GHG concentrations or, equivalently, anthropogenic radiative forcing of the climate system. Since each ton of carbon dioxide emitted into the atmosphere adds extra warming lasting over hundreds of years, a temperature limit translates into a finite budget for the amount of carbon dioxide that can still be emitted into the atmosphere. Likewise, to limit the warming, greenhouse gas concentrations in the atmosphere and the associated radiative forcing need eventually to stabilize to allow the climate system to find a new equilibrium of incoming solar radiation and outgoing heat radiation from Earth.
    p
      | For classifying the stringency of different warming limits the concept of Representative Concentration Pathways (RCPs) has been introduced to climate change research. Like the SSPs, they are called “Pathways” in the literature, but in fact  constitute projections of greenhouse gas emissions and concentrations and their combined radiative forcing. They originally comprised four projections, ranging from RCP&thinsp;2.6 to RCP&thinsp;8.5, and after the adoption of the Paris Agreement were augmented by RCP&thinsp;1.9 to represent mitigation pathways compatible with the 1.5&thinsp;°C warming limit. The values refer to the radiative forcing in Watt/m<sup>2</sup> by the end of century compared to preindustrial times, e.g. 2.6 Watt/m<sup>2</sup> in the case of RCP&thinsp;2.6. For comparison, a doubling of atmospheric CO2 concentration from preindustrial times, i.e. from ca. 280 parts per million (ppm) air molecules to 560&thinsp;ppm, would amount to a radiative forcing of 3.7 Watt/m<sup>2</sup>. In 2016, CO<sub>2</sub> concentrations reached 400&thinsp;ppm, and the radiative forcing from all anthropogenic influences on the climate system was estimated to amount to ca. 2.3±1 Watt/m<sup>2</sup> in 2011.

    table.extended
      thead
        tr
          th RCP
          th Forcing
          th Temperature
          th Emission Trend
      tbody
        tr
          td 1.9
          td 1.9&#8239;W/m<sup>2</sup>
          td ~1.5&#8239;°C
          td Very Strongly Declining Emissions
        tr
          td 2.6
          td 2.6&#8239;W/m<sup>2</sup>
          td ~2.0&#8239;°C
          td Strongly Declining Emissions
        tr
          td 4.5
          td 4.5&#8239;W/m<sup>2</sup>
          td ~2.4&#8239;°C
          td Slowly Declining Emissions
        tr
          td 6.0
          td 6.0&#8239;W/m<sup>2</sup>
          td ~2.8&#8239;°C
          td Stabilising Emissions
        tr
          td 8.5
          td 8.5&#8239;W/m<sup>2</sup>
          td ~4.3&#8239;°C
          td Rising Emissions

    p For the temperature goals in the Paris Agreement the corresponding radiative forcing increase is 2.6&thinsp;W/m2 leading to warming well below 2&thinsp;°C in most climate change projections, or 1.9&thinsp;W/m<sup>2</sup> limiting warming to 1.5&thinsp;°C or below. This is captured by RCP&thinsp;2.6 and RCP&thinsp;1.9.

    p The RCPs can be combined with the SSPs to derive emissions and concentration policies that take up the socioeconomic assumptions underlying the SSPs and then impose climate policies to reach the end of century radiative forcing levels as defined by the RCPs. Hence, the SSPs and RCPs can be arranged into a matrix of climate forcing outcomes (in the rows) and socioeconomic development assumptions (in the columns). This scenario matrix architecture provides a powerful tool to explore the space of response options to to climate change. The scenarios and pathways populating the individual cells are called SSP&thinsp;x–y (x = SSP number; y = radiative forcing level) in the literature. This also allows to distinguish, e.g., the emissions trajectory in the SSP&thinsp;1–2.6 pathway from the original RCP 2.6. The original RCPs that were used to drive climate change projections in the fifth Climate Model Intercomparison Project (CMIP5) did not derive from the SSPs, as the SSPs were only developed a few years later. However, the emissions and forcing projections to drive the next round of climate change projections, CMIP6, will use the new SSP-based scenarios, e.g. SSP&thinsp;1–2.6 rather  than the original RCP&thinsp;2.6.

    VisMatrix

    p Within thThis scenario framework allows to explore climate change mitigation policies with different stringency and their impact on energy use, land use, emissions, and economic acitivity relative to the baseline scenario without climate policies, to mitigation pathways with different stringency (comparison across rows), and to mitigation pathways with the same stringency, but different socio-economic assumptions (comparison across columns). Naturally not every combination of SSPs and RCPs is feasible, e.g., SSP&thinsp;3 with a radiative forcing of 2.6&thinsp;W/m<sup>2</sup> have been found infeasible in IAMs due to regional rivalry impeding global coordination of deep mitigation efforts.

    p For the feasible SSP &times; RCP combinations important parameters can be understood in a comprehensive way.

    p One powerful example to enforce climate change mitigation is by introducing a carbon price. Depending on the ambition of the target and the socio-economic setting the price can vary drastically.

    LayoutColumns.extended
      VisChart(
        slot="left"
        :max="3200"
        legend="rcp"
        both-legends
        scenario="carbonSsp1")
      VisChart(
        slot="right"
        :max="3200"
        legend="rcp"
        both-legends
        scenario="carbonSsp5")

    p The figure below shows the energy demand and CO2 emissions developments that IAMs derived for  the various combinations of SSPs and RCPs. A key instrument to reduce emissions is emissions pricing. The emissions price that IAMs need to impose the reach the mitigation levels of the RCPs by and large reflect the cost of the last ton of emissions reduction that need to be undertaken (called marginal abatement cost in economic jargon). As shown below, the emissions price not only increases with increasing mitigation stringency, but also varies substantially with different  socioeconomic developments across the SSPs. The lower  the socioeconomic challenges to  mitigation, the lower the carbon price for the same mitigation goal.

    p Mitigation scenarios in the literature are varied along more dimensions than just the SSPs and RCP forcing levels. For example, they have been used to look at the individual role of technologies and sectors for mitigating climate change by changing technology availability or technology costs in terms of a sensitivity analysis (limited technology scenarios).  Others have looked at different near term climate policy developments with different levels of delay and regional variation compared to stringent global action pathways (delay scenarios). These are particularly relevant for informing the implementation of the Paris Agreement,  which aims to coordinate nationally determined contributions (NDCs) to climate action so to reach the long term climate goals. The first set of NDCs were specified for 2030, and thus mitigation scenarios that go through the NDCs in 2030 have become available in recent years.

    LayoutColumns.extended
      VisChart(
        slot="left"
        :dynamic-filter="[ssp, hoverSSP]"
        :legend-filter="ssp"
        :max="1200"
        legend="rcp"
        scenario="finalenergy")
      VisChart(
        slot="right"
        :dynamic-filter="[ssp, hoverSSP]"
        :legend-filter="ssp"
        :max="140000"
        legend="rcp"
        hide-legend
        scenario="emissions")

    LayoutRadioGroup(
      :options="ssps"
      v-model="ssp"
      class="center"
      @hover="setHoverSSP")

    LayoutRecap
      li Representative Concentration Pathways (RCPs) represent different emissions, concentration and radiative forcing projections leading to a large range of global warming levels, from continued warming rising above 4&thinsp;°C by the year 2100 to limiting warming well below 2&thinsp;°C as called for in the Paris Agreement.
      li Socio-economic Pathways) they provide a powerful framework to explore the space of future mitigation pathways in terms of different levels of mitigation stringency and different assumptions about socioeconomic development.
      li The mitigation pathway literature developed by the application of integrated assessment modelling comprises a wide variety of mitigation pathways, including pathways with limited technology availability and delays in climate policy in addition to variations in mitigation targets and socioeconomic drivers.
</template>

<script>
export default {
  data () {
    return {
      ssp: 'SSP1',
      hoverSSP: null,
      ssps: [{
        label: 'SSP&#8239;1',
        value: 'SSP1',
        color: 'green'
      }, {
        label: 'SSP&#8239;2',
        value: 'SSP2',
        color: 'blue'
      }, {
        label: 'SSP&#8239;3',
        value: 'SSP3',
        color: 'red'
      }, {
        label: 'SSP&#8239;4',
        value: 'SSP4',
        color: 'yellow'
      }, {
        label: 'SSP&#8239;5',
        value: 'SSP5',
        color: 'violet'
      }]
    }
  },
  methods: {
    setHoverSSP (e) {
      this.hoverSSP = e
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.wrapper {
  .LayoutRadioGroup {
    margin-top: $spacing * 0.5;
  }

  .LayoutColumns {
    margin: -$spacing 0;
    padding: $spacing 0;
  }
}
</style>
