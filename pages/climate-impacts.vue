<template>
  <section class="wrapper">

    <h2>Climate Impacts</h2>

    <p>Climate impacts are consequences and effects of climate change on nature and society. These may include changed agricultural yields, increased floods and droughts, or coral reef bleaching due to changes in the chemical composition of the ocean. The Inter-Sectoral Impact Model Intercomparison Project (ISIMIP) plays an important role in climate-impact research by faciliting consistent impact simulations across various sectors and collecting and disseminating the results.</p>

    <LayoutCards>

      <LayoutCard>
        <h4 slot="title">Agriculture</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Biodiversity</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Biomes</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Coastal Infrastructure</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Energy</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Forestry</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Health</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Lakes</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Marine Fishery</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Permafrost</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Tropical Cyclones</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Water (global)</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Water (regional)</h4>
        <p>Sector description coming soon</p>
      </LayoutCard>

    </LayoutCards>

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
      <li>There is a wide range of different climate impacts.</li>
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
}
</style>
