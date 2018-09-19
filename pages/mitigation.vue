<template lang="pug">
  section.wrapper
    h2.h1 Mitigation
    p The Paris Agreement was a historic step in global efforts to combat climate change. At the COP 21 members agreed on climate change policies to limit global mean temperature increase below 2&#8239;°C.
    p Such a target to stay below 2&#8239;°C can be expressed in various quantities: by accumulated greenhouse gas (GHG) emissions, atmospheric GHG concentration, radiative forcing, or the Global mean temperature increase. The physical relationships of these quantities are reflected in Earth System Models and can be translated into each other.
    p
      | For classifying the different warming targets usually the representative concentration pathways (RCPs) are used. There are five scenarios, ranging from RCP&#8239;1.9 to RCP&#8239;8.5. The values refer to the “radiative forcing”, a quantity that crucially depends on GHG concentrations and which, in turn, determines the atmosphere's temperature. More specifically, the numbers give the change in radiative forcing in 2100 compared to preindustrial times. I.e. in the RCP&#8239;1.9 scenario the globally/annually averaged radiative forcing will have risen by 1.9&#8239;Watt/m
      sup 2
      |  compared to preindustrial times.

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

    p For the Paris Agreement which aims to keep the global mean temperature increase below 2&#8239;°C the corresponding radiative forcing increase is 2.6&#8239;W/m
      sup 2
      |  or below. This is captured by RCP&#8239;2.6 and RCP&#8239;1.9.
    p The combination of SSP and RCP scenarios provides a powerful framework to investigate possible developments of socioeconomic, policy and climate parameters.

    VisMatrix

    p
      | Within the framework the effect of climate change mitigation policies and corresponding baseline scenarios (business as usual scenarios without any policy action) can be analysed. Naturally not every combination of SSPs and RCPs is possible, e.g., with SSP&#8239;5 a radiative forcing of 2.6&#8239;W/m
      sup 2
      |  will be out of reach. These combinations are considered as unfeasible.

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

    p The introduction of a carbon price results in reductions in final energy use and substantially decreased emissions compared to baseline scenarios.

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
      li Representative Concentration Pathways (RCPs) represent different emission pathways leading to a specific GHG concentration value in 2100.
      li In combination with the SSPs (socio-economic pathways) they allow to investigate important parameters of socioeconomic, policy, and climatic development.
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
}
</style>
