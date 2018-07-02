<template>
  <section class="wrapper">
    <h2>How are Socioeconomics and Climate connected?</h2>

    <p>The term Anthropocene is a proposal for naming a new geochronological epoch: namely, the age in which humans become one of the most important factors influencing the biological, geological and atmospheric processes on earth.</p>
    <VisCycleCircle/>
    <p>Climate change and human socioeconomic behaviour are inseparably intertwined. Social and economic activities are the main driver of climate change and it is us humans who can act to mitigate climate change. In turn, climate change will also have serious impacts: severe weather events and rising sea levels will change the way we live. Let&#8217;s take a closer look at the cycle below, to understand this relationship.</p>

    <LayoutScrollify vis="VisCycle">
      <div>
        <p><strong class="yellow">Socioeconomics</strong> investigate decisive factors like for example population growth, consumption and lifestyle habits, urbanisation, or equality. These inter alia define the way we live and our land and energy needs.</p>
      </div>

      <div>
        <p><strong class="yellow">Energy and land use</strong> are closely linked to the emissions we produce and are the major pillars in this context. E.g., the amount of 76% of all greenhouse gas emissions stems from energy production and use alone.</p>
      </div>

      <div>
        <p><strong class="yellow">Emissions</strong> raise the concentration of greenhouse gases in the atmosphere. This leads to raising temperatures and changes in precipitation. Thus, our future will strongly depend on the course of technological advancements and policy changes.</p>
      </div>

      <div>
        <p>As long as no further effective measures are taken our <strong class="yellow">climate</strong> will be driven by a steady increase of emissions. These changes in climate like higher temperatures and changes in precipitation will have many side effects, like droughts or sea level raising. Research on these effects is carried out in climate impact studies.</p>
      </div>

      <div>
        <p><strong class="yellow">Climate impacts</strong> will - and already did - influence socioeconomics. It is not only direct damage to nature and resources we have to be aware of, e.g. in the form of extreme weather events resulting in high infrastructural damage or food crises leading to migration. In addition, in a world with globally connected production chains also massive indirect losses can be the consequence. The link between climate impact to socioeconomics is the most complex one in the circle and there are still significant knowledge gaps and research challenges.</p>
      </div>
    </LayoutScrollify>
    <p>With climate change so dependent of socioeconomic changes, we need to plausible assumptions on our socioeconomic future to create credible scenarios. The SSP-RCP scenario framework, described in detail in the next chapter, offers us those assumptions.</p>

    <LayoutRecap>
      <li>Above we have seen how the different aspects of climate change are inseparably interlinked.</li>
      <li>The impact of the human footprint can be clearly distinguished and obviously needs to be mitigated in its current form.</li>
      <li>Most hope lies in policy changes and technological advancements to avert irreversible consequences of climate change.</li>
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
