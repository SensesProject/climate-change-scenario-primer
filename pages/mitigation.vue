<template>
  <section class="wrapper">
    <h2 class="h1">Mitigation</h2>

    <p>Globally enforced emission policies are a means to reach global warming targets. This is where representative concentration pathways (RCPs) come in. Again there are five scenarios, ranging from RCP 1.9 to RCP 8.5. The value refers to the "radiative forcing", a quantity that is crucially dependent on GHG concentrations and which, in turn, determines the atmosphere's temperature. More specifically, the numbers give the change in radiative forcing in 2100 compared to preindustrial times. I.e. in the RCP2.6 scenario the globally/annually averaged radiative forcing will have risen by 2.6 W/m<sup>2</sup> compared to preindustrial times.</p>

    <table class="no-margin">
      <thead>
        <tr>
          <th> RCP </th>
          <th> Forcing </th>
          <th> Temperature </th>
          <th> Emission Trend </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1.9 </td>
          <td> 1.9 W/m<sup>2</sup> </td>
          <td> ~1.5°C </td>
          <td> Very Strongly Declining Emissions </td>
        </tr>
        <tr>
          <td> 2.6 </td>
          <td> 2.6 W/m<sup>2</sup> </td>
          <td> ~2.0°C </td>
          <td> Strongly Declining Emissions </td>
        </tr>
        <tr>
          <td> 4.5 </td>
          <td> 4.5 W/m<sup>2</sup> </td>
          <td> ~2.4°C </td>
          <td> Slowly Declining Emissions </td>
        </tr>
        <tr>
          <td> 6.0 </td>
          <td> 6.0 W/m<sup>2</sup> </td>
          <td> ~2.8°C </td>
          <td> Stabilising Emissions </td>
        </tr>
        <tr>
          <td> 8.5 </td>
          <td> 8.5 W/m<sup>2</sup> </td>
          <td> ~4.3°C </td>
          <td> Rising Emissions </td>
        </tr>
      </tbody>
    </table>
    <p>The Paris Agreement aims to keep the global mean temperature increase below 2°C. This corresponds to a radiative forcing increase of 2.6 W/m<sup>2</sup> or below, i.e. to RCP 1.9 or RCP 2.6.</p>

    <p>Until now we only looked at SSP-Baseline Scenarios where we assume that the world will develop like business-as-usual in the future. Negative impacts of climate change are ignored. Let&#8217;s now set emission goals and include RCPs.</p>

    <LayoutColumns class="extended">
      <VisChart
        slot="left"
        :max="3200"
        legend="rcp"
        both-legends
        scenario="carbonSsp1"/>
      <VisChart
        slot="right"
        :max="3200"
        legend="rcp"
        both-legends
        scenario="carbonSsp5"/>
    </LayoutColumns>

    <p>That&#8217;s means introducing a carbon price. The height of which of course depends on the former emissions and our goal.</p>

    <LayoutColumns class="extended">
      <VisChart
        slot="left"
        :dynamic-filter="[ssp, hoverSSP]"
        :legend-filter="ssp"
        :max="1200"
        legend="rcp"
        scenario="finalenergy"/>
      <VisChart
        slot="right"
        :dynamic-filter="[ssp, hoverSSP]"
        :legend-filter="ssp"
        :max="140000"
        legend="rcp"
        hide-legend
        scenario="emissions"/>
    </LayoutColumns>

    <LayoutRadioGroup
      :options="ssps"
      v-model="ssp"
      class="center"
      @hover="setHoverSSP"/>
    <p>
      Compared to the Baseline-Scenarios this results in some reductions in final energy and substantially decreased emissions.
    </p>
    <LayoutRecap>
      <li>Representative Concentration Pathways (RCPs) represent different emission pathways leading to a specific GHG concentration value in 2100.</li>
    </LayoutRecap>
  </section>
</template>

<script>
export default {
  data () {
    return {
      ssp: 'SSP1',
      hoverSSP: null,
      ssps: [{
        label: 'SSP1',
        value: 'SSP1',
        color: 'green'
      }, {
        label: 'SSP2',
        value: 'SSP2',
        color: 'blue'
      }, {
        label: 'SSP3',
        value: 'SSP3',
        color: 'red'
      }, {
        label: 'SSP4',
        value: 'SSP4',
        color: 'yellow'
      }, {
        label: 'SSP5',
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
