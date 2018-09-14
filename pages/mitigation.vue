<template>
  <section class="wrapper">
    <h2 class="h1">Mitigation</h2>

    <p>Globally enforced emission policies are a means to reach global warming targets. This is where representative concentration pathways (RCPs) come in. Again there are five scenarios, ranging from RCP 1.9 to RCP 8.5. The value refers to the "radiative forcing", a quantity that is crucially dependent on GHG concentrations and which, in turn, determines the atmosphere's temperature. More specifically, the numbers give the change in radiative forcing in 2100 compared to preindustrial times. I.e. in the RCP2.6 scenario the globally/annually averaged radiative forcing will have risen by 2.6 W/m^2 compared to preindustrial times.</p>

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
          <td> RCP 1.9 </td>
          <td> 1.9 W/m2 </td>
          <td> ~1.5°C </td>
          <td> Very Strongly Declining Emissions </td>
        </tr>
        <tr>
          <td> RCP 2.6 </td>
          <td> 2.6 W/m2 </td>
          <td> ~2.0°C </td>
          <td> Strongly Declining Emissions </td>
        </tr>
        <tr>
          <td> RCP 4.5 </td>
          <td> 4.5 W/m2 </td>
          <td> ~2.4°C </td>
          <td> Slowly Declining Emissions </td>
        </tr>
        <tr>
          <td> RCP 6.0 </td>
          <td> 6.0 W/m2 </td>
          <td> ~2.8°C </td>
          <td> Stabilising Emissions </td>
        </tr>
        <tr>
          <td> RCP 8.5 </td>
          <td> 8.5 W/m2 </td>
          <td> ~4.3°C </td>
          <td> Rising Emissions </td>
        </tr>
      </tbody>
    </table>
    <p>The Paris Agreement aims to keep the global mean temperature increase below 2°C. This corresponds to a radiative forcing increase of 2.6 W/m2 or below, i.e. to RCP 1.9 or RCP 2.6.</p>

    <p>Until now we only looked at SSP-Baseline Scenarios where we assume that the world will develop like business-as-usual in the future. Negative impacts of climate change are ignored. Let&#8217;s now set emission goals and include RCPs.</p>

    <LayoutColumns>
      <VisChart
        slot="left"
        :max="3200"
        legend="rcp"
        scenario="carbonSsp1"/>
      <VisChart
        slot="right"
        :max="3200"
        legend="rcp"
        scenario="carbonSsp5"/>
    </LayoutColumns>

    <p>That&#8217;s means introducing a carbon price. The height of which of course depends on the former emissions and our goal.</p>

    <LayoutColumns>
      <VisChart
        slot="left"
        :max="1200"
        dynamic-filter="SSP1"
        legend="rcp"
        scenario="finalenergy"/>
      <VisChart
        slot="right"
        :max="140000"
        dynamic-filter="SSP1"
        scenario="emissions"/>
    </LayoutColumns>

    <p class="ssp-selection">
      <InHighlight
        :out="false"
        init-active
        field="charts.filter"
        class="green"
        value="SSP1">SSP1</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="blue"
        value="SSP2">SSP2</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="red"
        value="SSP3">SSP3</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="yellow"
        value="SSP4">SSP4</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="violet"
        value="SSP5">SSP5</InHighlight>
    </p>
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
