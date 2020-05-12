<template>
  <article class="wrapper">
    <h2 class="h1">
      How are Socioeco&shy;nomic Develop&shy;ment and Climate Change connected?
    </h2>
    <LayoutList>
      <h3>Chapter Summary</h3>
      <li>
        Socioeconomic development and climate change are intricately linked, with social and economic activities determining energy and land use determining emissions determining climate forcing and climate change determining climate impacts which in
        turn affect socioeconomic developments.
      </li>
      <li>
        Climate change response strategies fall into mitigation strategies to limit human impact on climate change and adaptation strategies to limit the climate change impact on humans. Mitigation and adaptation scenarios (often also called “pathways”)
        are used to analyse such response strategies.
      </li>
    </LayoutList>
    <p>
      Climate change and socioeconomic development are deeply intertwined. Social and economic activities are the main driver of climate change. In turn, climate change will have serious impacts on these activities, e.g., by rising sea levels and exposure
      to severe weather events.
    </p>
    <div class="cycle">
      <VisCycleCircle class="center" />
    </div>
    <p>
      Let’s take a closer look at the cycle above to understand the underlying relationships. Since it is us humans who drive climate change, we can also act to reduce the impact of our activities on the climate (mitigation) as well as the impact of climate
      change on us (adaptation).
    </p>
    <div class="cycle-part first">
      <VisCyclePartLarge type="first" />
    </div>
    <div class="cycle-part">
      <VisCyclePartLarge :index="0" type="normal" />
      <p>
        <span class="highlight no-hover green">Socioeconomic Development</span> comprises a myriad of factors like population, economic activity, urbanisation, education, social equality, consumption patterns, lifestyles, and institutions. These factors determine the
        way we live, including how we use energy and land. Socioeconomic scenarios are used to describe possible socioeconomic futures.
      </p>
    </div>
    <div class="cycle-part">
      <VisCyclePartLarge :index="1" type="normal" />
      <p>
        <span class="highlight no-hover yellow">Energy & Land Use</span> are the main source of human greenhouse gas emissions and air pollutants which both interfere with Earth’s climate. Greenhouse gas emissions include carbon dioxide from the combustion of fossil
        fuels and deforestation, methane from livestock, rice paddies, waste fills and fossil fuel exploration and nitrous oxide from agricultural sources. Projections of future energy and land use and associated emissions are derived from energy-economy
        and land use models, often coupled together to form integrated assessment models.
      </p>
    </div>
    <div class="cycle-part">
      <VisCyclePartLarge :index="2" type="normal" />
      <p>
        <span class="highlight no-hover red">Emissions</span> raise the concentration of greenhouse gases and air pollutants in the atmosphere. This changes the balance between incoming sunlight and outgoing heat radiation at the top of the atmosphere, leading to a
        radiative forcing of the climate system. Carbon cycle, atmospheric chemistry, atmospheric transport, and radiative transfer models are used to convert emissions projections into concentration and radiative forcing projections.
      </p>
    </div>
    <div class="cycle-part">
      <VisCyclePartLarge :index="3" type="normal" />
      <p>
        <span class="highlight no-hover purple">Climate Change</span> is characterized by rising temperatures and changes in precipitation driven by radiative forcing of the climate system. Earth system models and coupled climate models are used to derive projections
        of future climate change from emissions and radiative forcing projections.
      </p>
    </div>
    <div class="cycle-part">
      <VisCyclePartLarge :index="4" type="normal" />
      <p>
        Higher temperatures and changes in precipitation lead to <span class="highlight no-hover blue no-hyphen">Climate Impacts</span> on natural and human systems through, inter alia, droughts, floods, storms, sea level rise, reduced freshwater availability, heat
        stress, and potential large scale reconfigurations of Earth system components (tipping points). Research on these effects is carried out in climate impact studies, which use a suite of models ranging from water transport models to vegetation
        and agriculture models to produce climate impact projections.
      </p>
    </div>
    <div class="cycle-part last">
      <VisCyclePartLarge type="last" />
    </div>
    <p>
      Climate impacts will – and already did – influence social and economic activity. Socioeconomic damages emerge not only from the direct impact on physical infrastructure, human productivity, natural resources, and ecosystem services. They also emerge
      from indirect impacts such as disruptions of globally connected supply chains, deteriorating institutions and climate impact induced migration. Importantly, direct and indirect damages are not only a function of future climate change and adaptation
      measures, but also depend on assumptions about broader socioeconomic developments.
    </p>
    <p>
      The link between climate impacts and socioeconomic damages is the most complex in the circle and there are still significant knowledge gaps and research challenges. Integrated assessment models use climate damage functions mapping warming levels to
      overall reductions in economic output. Macroeconomic general equilibrium models use climate damage functions on inputs and production factors of affected economic sectors. Both have to be reconciled with a growing body of empirical findings of
      substantial climate and weather impacts on societies today.
    </p>
    <div class="cycle">
      <VisCycleCircle class="center" strategies />
    </div>
    <p>
      Integrated assessment models are an important tool to analyse our response to climate change. Since they capture the link between socioeconomic developments, energy and land use, and emissions, they can be used to investigate emissions reductions
      strategies to stay below a certain warming limit <span class="highlight no-hover yellow">(mitigation pathways).</span> Likewise, biophysical and economic impact models can be used to study adaptation measures to limit the impact of climate change on socioeconomic
      activities <span class="highlight no-hover purple">(adaptation pathways).</span>
    </p>
    <LayoutNextChapter>
      <h3>Further Reading</h3>
      <li>Moss, R. H., Edmonds, J. A., Hibbard, K. A., et al. (2010).<a href="https://www.nature.com/articles/nature08823"><strong> The next generation of scenarios for climate change research and assessment.</strong></a> Nature, 463(7282), 747-756.</li>
      <li>Van Vuuren, D. P., Kok, M. T., Girod, B., Lucas, P. L., & de Vries, B. (2012).<a href="https://www.sciencedirect.com/science/article/abs/pii/S0959378012000635"><strong> Scenarios in global environmental assessments: key characteristics and lessons for future use.</strong></a>            Global Environmental Change, 22(4), 884-895.</li>
    </LayoutNextChapter>
  </article>
</template>

<script>
import LayoutList from '@/components/LayoutList.vue'
import LayoutNextChapter from '@/components/LayoutNextChapter.vue'
export default {
  components: {
    LayoutList,
    LayoutNextChapter
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.wrapper {

  .no-hyphen {
    hyphens: none;
  }

  .cycle {
    display: flex;
    justify-content: center;
  }

  .cycle-part {
    // paddings: $spacing / 2;
    @include flex-row;
    justify-content: flex-start;
    width: 100%;
    max-width: 760px;
    overflow: hidden;

    &.first, &.last {
      height: 32px;
    }

    &.last {
      align-items: flex-start;
      margin-top: -32px;
      background: white;
      z-index: 1;
      position: relative;
      transform: translateX(0)
    }

    p {
      margin: $spacing / 2 0;
      padding-left: $spacing * 2;
      z-index: 2;
    }
  }
}
</style>
