<template>
  <section class="wrapper">
    <p>Scenario assumptions – as offered by the SSP-RCP framework – give us still very limited information about the possible futures. To see how the scenarios play out integrated assessment models and climate impact models come in.</p>

    <h3 id="integrated-assessment-models">Integrated Assessment Models</h3>

    <p>Integrated assessment models (IAMs) describe how socioeconomics relate to land &amp; energy use and how that   relates to emissions.</p>

    <LayoutScrollify vis="VisIamStructure">

      <div>
        <p>Here is a very simple example of such a model. As you can see…</p>
      </div>

      <div>
        <p>And…</p>
      </div>

      <div>
        <p>Furthermore…</p>
      </div>

      <div>
        <p>Finally…</p>
      </div>

    </LayoutScrollify>

    <LayoutScrollify vis="VisFingerprints">

      <div>
        <p>
          In contrast to the simplified model above the models used to generate SSP-Scenarios are a lot more complex. This graphic illusrates what kind of aspects are taken into account by those models - each dot represents one of those aspects. There are similarities to our model from before.
          <InHighlight
            field="fingerprints.properties"
            class="violet"
            value="GDP">GDP</InHighlight>plays an important role. Aspects like
          <InHighlight
            field="fingerprints.properties"
            class="yellow"
            value="energy">energy</InHighlight>and
          <InHighlight
            field="fingerprints.properties"
            class="red"
            value="emissions">emissions</InHighlight>are looked at in greater detail.
        </p>
      </div>

      <div>
        <p>
          Then there a many more aspects and relationships between them we didn't consider. They can be categorized in
          <InHighlight
            field="fingerprints.category"
            value="Economic Growth and Development">Economic Growth and Development,</InHighlight>
          <InHighlight
            field="fingerprints.category"
            value="Land use">Land use,</InHighlight>
          <InHighlight
            field="fingerprints.category"
            value="Electricity and heat">Electricity and heat,</InHighlight>
          <InHighlight
            field="fingerprints.category"
            value="Refining">Refining,</InHighlight>
          <InHighlight
            field="fingerprints.category"
            value="Energy demand">Energy demand,</InHighlight>
          <InHighlight
            field="fingerprints.category"
            value="Resource extraction and trade">Resource extraction and trade</InHighlight>and
          <InHighlight
            field="fingerprints.category"
            value="Climate and non-climate environmental change">Climate and non-climate environmental change.</InHighlight>
        </p>
      </div>

      <div>
        <p>
          However, there are also key differnces in what aspects different models cover. Each of the five models
          <InHighlight
            field="fingerprints.model"
            class="blue"
            value="AIM/CGE">AIM/CGE,</InHighlight>
          <InHighlight
            field="fingerprints.model"
            class="green"
            value="GCAM">GCAM4</InHighlight>
          <InHighlight
            field="fingerprints.model"
            class="yellow"
            value="IMAGE">IMAGE,</InHighlight>
          <InHighlight
            field="fingerprints.model"
            class="red"
            value="REMIND-MAGPIE">REMIND-MAGPIE</InHighlight>and
          <InHighlight
            field="fingerprints.model"
            class="violet"
            value="WITCH-GLOBIUM">WITCH-GLOBIUM</InHighlight> is a refernce models for one SSP, as it is suited to handle the input assumption of that specific SSP.
        </p>
      </div>

    </LayoutScrollify>

    <p>Feeding scenario assumptions into models will get us scenarios – a set of output variables describing the futures. Let&rsquo;s take a look how some of these variables play out in different scenarios.</p>

    <LayoutColumns>
      <TestScrollify slot="left"/>
      <TestScrollify slot="right"/>
    </LayoutColumns>

    <p>Assumptions on population growth and GDP are already part of the scenario assumptions. This shows us how they turn out over time and in numbers. As you can see the SSP3 scenario of regional rivalary leads us to continued population growth but relatively low growth in GDP. SSP1 (Sustainability) and SSP5 (Fossil-fueled developement) show similar patterns in population growth, but vast differences when it comes to GDP.</p>

    <LayoutColumns>
      <TestScrollify slot="left"/>
      <TestScrollify slot="right"/>
    </LayoutColumns>

    <p>The high GDP of SSP5 comes at a cost: High energy needs and with that lots of CO2-emissions. Until now we only looked at SSP-Baseline Scenarios. Let&rsquo;s set emission goals and include RCPs.</p>

    <LayoutColumns>
      <TestScrollify slot="left"/>
      <TestScrollify slot="right"/>
    </LayoutColumns>

    <p>That&rsquo;s means introducing a carbon price. The height of which of course depends on the former emissions and our goal.</p>

    <LayoutColumns>
      <TestScrollify slot="left"/>
      <TestScrollify slot="right"/>
    </LayoutColumns>

    <p>Compared to the Baseline-Scenarios this results in similar final energy but less emissions.</p>

    <h3 id="climate-models">Climate Models</h3>

    <p>Climate models take us from emissions to things like temperature and precipitation. As with IAMs they describe a complex system,  in this case the earth. Climate models are therefore sometimes also related to as Earth System Models. In contrast to weather models they focus on long term changes whereas spatial and temporal resolution is less important.</p>

    <LayoutColumns>
      <TestScrollify slot="left"/>
      <TestScrollify slot="right"/>
    </LayoutColumns>

    <p>This shows the change in average surface temperature from 1986-2005 to 2081-2100 for two different emission scenarios: RCP 2.6 and RCP 8.5.</p>

    <h3 id="climate-impact-models">Climate Impact Models</h3>

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

    <p>Let&rsquo;s have a look at how these two scenarios play out for different variables.</p>

    <LayoutColumns>
      <TestScrollify slot="left"/>
      <TestScrollify slot="right"/>
    </LayoutColumns>

    <p>As you might have expected, the SSP2-RCP6.0 scenarios show us more extreme impacts.</p>
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
