<template>
  <section class="wrapper">

    <h2>Climate Impacts</h2>

    <p>Climate impacts are consequences and effects of climate change on nature and society. These may include changed agricultural yields, increased flooding and droughts, and coral reef bleaching due to changes in the chemical composition of the ocean. The Inter-Sectoral Impact Model Intercomparison Project (ISIMIP) plays an important role in climate-impact research and covers currently 13 sectors.</p>

    <LayoutCards>

      <LayoutCard>
        <h4 slot="title">Agriculture</h4>
        <p>Text describing Agriculture</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Biodiversity</h4>
        <p>Text describing Biodiversity</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Biomes</h4>
        <p>Text describing Biomes</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Coastal Infrastructure</h4>
        <p>Text describing Coastal Infrastructure</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Energy</h4>
        <p>Text describing Energy</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Forestry</h4>
        <p>Text describing Forestry</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Health</h4>
        <p>Text describing Health</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Lakes</h4>
        <p>Text describing Lakes</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Marine Fishery</h4>
        <p>Text describing Marine Fishery</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Permafrost</h4>
        <p>Text describing Permafrost</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Tropical Cyclones</h4>
        <p>Text describing Tropical Cyclones</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Water (global)</h4>
        <p>Text describing Water (global)</p>
      </LayoutCard>

      <LayoutCard>
        <h4 slot="title">Water (regional)</h4>
        <p>Text describing Water (regional)</p>
      </LayoutCard>

    </LayoutCards>

    <p>Of course there is a strong link between those sectors and changes in climate, but for some of them changing socioeconomic factors also play an important role. That&rsquo;s why the SSP-RCP Framework is also used here. However, climate impact scenarios generally don&rsquo;t cover the whole bandwith of the SSP-RCP framework. Most of them refer to SSP2 and either RCP 2.6 or RCP 6.0.</p>

    <p>Climate impact models – similarly to climate models – produce gridded data, which can be shown in maps. However, another way of looking at that data is by showing the relation of temperature changes and changes in affected land area.</p>

    <LayoutColumns>
      <VisChartImpact
        slot="left"
        variable="Flood"/>
      <VisChartImpact
        slot="right"
        variable="Crop Failure"/>
    </LayoutColumns>

    <p>The charts show the simulation results for floods and crop failure. In each case, climate data from three different global climate models <strong class="green">GFDL-ESM2M</strong>, <strong class="yellow">MIROC5</strong> and <strong class="violet">IPSL-CM5A-LR</strong> were used to drive the impact models – each color relates to results using data from a different climate model. The thick lines depict the median of the ensemble for all impact models considered. The shaded areas show the 20th to 80th percentile of that ensemble.</p>

    <LayoutRecap>
      <li>a</li>
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
