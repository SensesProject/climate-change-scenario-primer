<template lang="pug">
  section.wrapper
    h2.h1 Climate Change
    p The scenarios discussed above assume different green house gas (GHG) emissions into the atmosphere. Not not all GHG emitted into the atmosphere remain there, however. For instance, the oceans absorb large parts of atmospheric CO
      sub 2
      |  and vegetation can act as a carbon sink, as well. Still, the sheer magnitude of the GHG emitted in the past causes GHG to accumulate in the atmosphere and thus rising GHG  concentrations.

    p GHG, as hinted by their name, play the key role in the green house effect. The  green house effect leads to rising temperatures and can be quantified by the so called "radiative forcing". A higher radiative forcing leads to higher atmospheric temperatures. The number in the RCP scenario is related to this. The radiative forcing in RCP&#8239;8.5, for instance, is in 2100 8.5&#8239;W/m
      sup 2
      |  higher than during preindustrial times.

    LayoutColumns.extended(left-title="RCP&#8239;2.6", right-title="RCP&#8239;6.0")
      VisMap(
        slot="left",
        :grid="rcp26",
        map-id="map1",
        projection="EPSG:54030",
        color-scale="interpolateRdBu",
        invert-scale,
        static)
      VisMap(
        slot="right",
        :grid="rcp60",
        map-id="map2",
        projection="EPSG:54030",
        color-scale="interpolateRdBu",
        invert-scale,
        static)
    InLegendSequential.center(
      :domain="[0, 25]",
      :limit-range="[-2, 12]",
      invert-scale)
    div.map-description.center Change in average near surface temperature
      span  (2006–2010&nbspto&nbsp2095–2099)
    p Climate models then simulate the atmosphere and translate these GHG  concentrations to meteorological quantities such as temperature or precipitation. Temperature and precipitation are the two most important quantities in climate impact research. It turns out that many more systems than just the atmosphere decisively influence the climate. Therefore more and more subsystems, e.g., oceans, vegetation or sea ice, had to be added to climate models. Because of that these models are also known as “Earth System Models”.

    p The above plot shows the change in average near surface temperature from 2006–2010 to 2095–2099 for two different GHG scenarios: RCP&#8239;2.6 and RCP&#8239;6.0. As you can see: the overall temperature is going to raise, the intensity varies between regions and the temperature increases in the RCP&#8239;6.0 scenario are far more severe.

    LayoutRecap
      li Climate models are complex systems describing the physical world including its atmosphere.
      li Climate models generate projections on future temperature and precipitation based on GHG concentrations.
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
