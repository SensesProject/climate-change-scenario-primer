<template>
  <section class="wrapper">

    <h2>Climate Impacts</h2>

    <p>Climate impacts are consequences and effects of climate change on nature and society. These may include changed agricultural yields, increased floods and droughts, or coral reef bleaching due to changes in the chemical composition of the ocean. The Inter-Sectoral Impact Model Intercomparison Project (ISIMIP) plays an important role in climate-impact research by faciliting consistent impact simulations across various sectors and collecting and disseminating the results.</p>

    <LayoutCarousel :slots="13">

      <div slot="s0">
        <h4>Agriculture</h4>
        <p>The agriculture sector in ISIMIP seeks to understand how crops will be affected by changing atmospheric composition and climate. Increasing carbon dioxide concentrations may help some crops perform better, and in some regions increased temperatures could extend the growing season. But in other regions, more frequent and more intense heat waves and droughts could harm crop yields. This sector also examines how changing management practices (crop varieties, fertiliser, and irrigation) could be used to counteract negative effects of climate change.</p>
      </div>

      <div slot="s1">
        <h4>Biodiversity</h4>
        <p>Sector description coming soon</p>
      </div>

      <div slot="s2">
        <h4>Biomes</h4>
        <p>The Global Biomes Sector studies how climate and land-use change will affect the distribution and functioning of natural vegetation around the globe. Especially carbon and water cycling as well as the biogeographic distribution of plants under climate change are particularly relevant for this sector. The simulations contribute to better understand the capacity of natural vegetation to sequester and store carbon under increasing pressure from climate change but also from land-use changes.</p>
      </div>

      <div slot="s3">
        <h4>Coastal Infrastructure</h4>
        <p>The increase of damage due to coastal extreme sea-level events (from tides, mean sea level anomalies, tropical cyclones, extratropical storm surges and waves) may be one of the costliest aspects of climate change and sea-level rise. The coastal sector of ISIMIP assesses these impacts at global and continental scales in order to inform a range of policy decisions including setting global mitigation targets, designing global financial mechanisms for adaptation and loss & damage, and strategic long-term coastal adaptation planning. In order to adequately inform such decisions, we systematically consider all major uncertainties in assessments of current and future coastal risk, including climate and socio-economic scenario uncertainty, climate model and impact uncertainty, natural internal variability, as well uncertainties methods applied for extreme value analysis.</p>
      </div>

      <div slot="s4">
        <h4>Energy</h4>
        <p>Sector description coming soon</p>
      </div>

      <div slot="s5">
        <h4>Forestry</h4>
        <p>The Regional Forest Sector strives to understand how climate change will affect managed forests. Currently, simulations are carried out at the forest stand level for a wide range forest types covering the main forest tree species in Europe. The simulations are designed to disentangle the effects of different management schemes, of changing CO2-concentrations and of different climate scenario on key forest services and functions such as plant productivity and growth, wood harvests and carbon and water cycling. Climate change is impacting forests in manifold ways potentially increasing productivity unless water is limited or disturbances such as fire or insect outbreaks lead to catastrophic damages.</p>
      </div>

      <div slot="s6">
        <h4>Health</h4>
        <p>Sector description coming soon</p>
      </div>

      <div slot="s7">
        <h4>Lakes</h4>
        <p>Analyses in the ISIMIP lake sector currently focus  on how climate change is affecting the physical properties of lake functioning. Lake sector simulations follow two synergetic tracks, whereby one-dimensional lake models are either (i) tailored to reproduce observed processes in a selection of around 50 well-studied lakes, or (ii) run across all lake regions of the globe with one consistent set-up. The resulting data set provides an unprecedented opportunity to assess lake model performance and uncover global warming impacts on e.g. thermal stratification or lake ice dynamics, thereby forming the basis for understanding how lacustrine systems will respond to anthropogenic climate change.</p>
      </div>

      <div slot="s8">
        <h4>Marine Fishery (FishMIP)</h4>
        <p>FishMIP looks at the future of marine ecosystems, and consequences for fisheries, biodiversity, and food supply. Climate change impacts the oceans in many ways, such as warming, ocean acidification, and deoxygenation, and we have a range of models to explore these issues with. The oceans provide many services to human beings, and the health and productivity of marine ecosystems remains of critical importance. Marine ecosystem models are extremely varied, so FishMIP allows us to look at these questions and make projections from many different angles.</p>
      </div>

      <div slot="s9">
        <h4>Permafrost</h4>
        <p>Sector description coming soon</p>
      </div>

      <div slot="s10">
        <h4>Tropical Cyclones</h4>
        <p>Sector description coming soon</p>
      </div>

      <div slot="s11">
        <h4>Water (global)</h4>
        <p>Sector description coming soon</p>
      </div>

      <div slot="s12">
        <h4>Water (regional)</h4>
        <p>Sector description coming soon</p>
      </div>

    </LayoutCarousel>

    <p>In the anthropocene humans are the driver of many processes, therefore socioeconomic factors also play a major role in climate impact research. Because of that not only climate scenarios belonging to a certain RCP, but also SSP  scenarios are input to the impact models. Currently only the SSP2 scenario is used, though.</p>

    <p>The climate impact models – similarly to climate models – produce maps of impacts.</p>

    <LayoutColumns>
      <VisChartImpact
        slot="left"
        variable="Flood"/>
      <VisChartImpact
        slot="right"
        variable="Crop Failure"/>
    </LayoutColumns>

    <p>The charts above show simulation analyses of impact simulations for two sectors, floods and crop failure. In particular, the change in the percentage of the global surface that is affected by extreme event when compared to preindustrial times, is shown. In each case, climate data from three different global climate models (<strong class="green">GFDL-ESM2M</strong>, <strong class="yellow">MIROC5</strong> and <strong class="violet">IPSL-CM5A-LR</strong>) were used to drive the impact models – each color relates to results using data from a different climate model. The thick lines depict the median of the ensemble for all impact models considered. The shaded areas show the 20th to 80th percentile of that ensemble and thus give a feel of the model spread.</p>

    <LayoutRecap>
      <li>There is a wide range of different climate impacts including impacts related Agriculture, Energy and Health.</li>
      <li>Climate impact models use data from climate and integrated assessment models to create impact scenarios.</li>
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
  .LayoutCarousel {

    min-height: 360px;

    @include media-query($device-wide) {
      min-height: 528px;
    }

    h4 {
      font-size: 1.5em;
      color: $color-text-highlight;
    }

    p {
      font-family: $font-sans;
    }
  }
}
</style>
