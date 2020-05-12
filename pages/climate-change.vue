<template lang="pug">
  article.wrapper
    h2.h1 Climate Change
    LayoutList
      h3 Chapter Summary
      li Climate models are complex systems describing the physical world including its atmosphere, ocean, ice sheets and vegetation. The most comprehensive climate models are called Earth system models.
      li Climate models generate projections of future temperature and precipitation based on GHG concentration scenarios.
    p The scenarios discussed above assume a large range of greenhouse gas (GHG) emissions into the atmosphere. Not all GHGs emitted into the atmosphere remain there. For instance, the oceans absorb large parts of atmospheric CO
      sub 2
      |  and vegetation can act as a carbon sink as well. Still, the sheer magnitude of GHGs emitted in the past causes GHGs to accumulate in the atmosphere and thus rising GHGs concentrations.

    p GHGs, as hinted by their name, play the key role in the greenhouse effect. The greenhouse effect denotes the absorption and reemission of heat radiation from the Earth surface by  GHGs in the atmosphere. Thanks to the natural greenhouse effect, the surface temperatures on Earth are high enough to support abundant life. However, adding further greenhouse gases from human activity to the atmosphere induces a radiative forcing from increased absorption of outgoing heat radiation, which then leads to rising temperatures on the Earth surface (anthropogenic greenhouse effect). The higher the radiative forcing, the larger the warming.

    LayoutColumns.hide-print.hide-ie(left-title="RCP&#8239;2.6", right-title="RCP&#8239;6.0")
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
    InLegendSequential.center.hide-print.hide-ie(
      :domain="[0, 25]",
      :limit-range="[-2, 12]",
      invert-scale)
    div.map-description.center.hide-print.hide-ie Change in average near surface temperature
      span  (2006–2010&nbspto&nbsp2095–2099)
    img.print-only.ie-only(
      src="~/assets/img/vis-print-fallbacks/climate-change-1.jpg"
      alt=""
    )
    p Climate models then simulate the climate response to increased GHG concentrations and associated radiative forcing and translate them to changes in meteorological quantities such as temperature or precipitation. Temperature and precipitation are the two most important quantities in climate impact research. It turns out that many more systems than just the atmosphere decisively influence the climate. Therefore more and more subsystems, e.g., oceans, vegetation or sea ice, had to be added to climate models. Because of that these models are also known as “Earth System Models”.

    p The above plot shows the warming in near surface temperatures from 2006–2010 to 2095–2099 for two different emissions scenarios: RCP&thinsp;2.6 and RCP&thinsp;6.0. As you can see: the overall temperature is going to rise, and the increase is far more severe in RCP&thinsp;6.0. It can also be seen that the warming varies between regions, with highest warming occuring in the Northern latitudes.

    LayoutNextChapter
      h3 Further Reading
      li Stocker, T. F., Qin, D., Plattner, G., et al. (2013).
        a(href="https://www.ipcc.ch/report/ar5/wg1/")
          strong  IPCC: Summary for Policymakers. In: Climate Change 2013: The Physical Science Basis. Contribution of Working Group I to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change.
        |  Cambridge University Press.
      li O'Neill, B. C., Tebaldi, C., Van Vuuren, D. P., et al. (2016).
        a(href="https://www.geosci-model-dev.net/9/3461/2016/gmd-9-3461-2016.html")
          strong  The scenario model intercomparison project (ScenarioMIP) for CMIP6.
        |  Geoscientific Model Development, 9(9), 3461-3482.
</template>

<script>
import rcp26 from '~/assets/data/diff_annual_mean_tas_all-models-rcp26.nc.json'
import rcp60 from '~/assets/data/diff_annual_mean_tas_all-models-rcp60.nc.json'
import LayoutList from '@/components/LayoutList.vue'
import LayoutNextChapter from '@/components/LayoutNextChapter.vue'
export default {
  components: {
    LayoutList,
    LayoutNextChapter
  },
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
