<template>
  <section class="wrapper">
    <h2>Climate</h2>

    <p>The scenarios discussed above lead to particular concentrations of green house gases (GHG) in the atmosphere. Climate models then simulate the atmosphere and translate these GHG concentrations to meteorological quantities such as temperature or precipitation. Temperature and precipitation are the two most important quantities in climate impact research. It turns out that many more systems than just the atmosphere decisively influence the climate. Therefore more and more subsystems, e.g. oceans, vegetation or sea ice, had to be added to climate models. Because of that these models are also known as "Earth System Models".</p>
    <LayoutColumns
      class="extended"
      left-title="RCP 2.6"
      right-title="RCP 6.0">
      <VisMap
        slot="left"
        :grid="rcp26"
        map-id="map1"
        projection="EPSG:54030"
        color-scale="interpolateRdBu"
        invert-scale
        static/>
      <VisMap
        slot="right"
        :grid="rcp60"
        map-id="map2"
        projection="EPSG:54030"
        color-scale="interpolateRdBu"
        invert-scale
        static/>
    </LayoutColumns>
    <InLegendSequential
      :domain="[0, 25]"
      :limit-range="[-2, 12]"
      invert-scale/>
    <div class="map-description">Change in average near surface temperature (2006–2010 to 2095–2099)</div>
    <p>The above plot shows the change in average near surface temperature from 2006–2010 to 2095–2099 for two different GHG scenarios: RCP 2.6 and RCP 6.0. As you can see: the overall temperature is going to raise, the intensity varies between regions and the temperature changes in the RCP 6.0 scenario are far more severe.</p>

    <LayoutRecap>
      <li>Climate models are complex systems describing the physical world including its atmosphere.</li>
      <li>Climate models generate projections on future temperature and precipitation based on GHG concentrations.</li>
    </LayoutRecap>
  </section>
</template>

<script>
import rcp26 from '~/assets/data/diff_annual_mean_tas_all-models-rcp26.nc.json'
import rcp60 from '~/assets/data/diff_annual_mean_tas_all-models-rcp60.nc.json'
export default {
  data () {
    return {
      rcp26,
      rcp60
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.wrapper {
  .InLegendSequential {
    margin-top: $spacing / 2;
  }
  .map-description {
    font-size: 0.9em;
    text-align: center;
  }
}
</style>
