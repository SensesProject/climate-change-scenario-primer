<template>
  <section class="wrapper">
    <h2>Energy, Land Use and Emissions</h2>
    <p>Scenario assumptions – as offered by the SSP-RCP framework – give us still very limited information about the possible futures. To see how the scenarios play out integrated assessment models and climate impact models come in.</p>

    <h3 id="integrated-assessment-models">Integrated Assessment Models</h3>

    <p>Integrated assessment models (IAMs) describe how socioeconomics relate to land &amp; energy use and how that relates to emissions.</p>

    <LayoutScrollify vis="VisIamStructure">

      <div>
        <p>Here is a very simple example of such a model: In this case we assume that GDP is driven by the population, respectively the working force, energy and capital stock. As you can see all of those three factors are raising and so is GDP.</p>
      </div>

      <div>
        <p>One share of the global GDP is flows into consumption and the other share is invested to raise available energy and capital stock. Integrated assessment models are optimized to achieve the highest possible consumption in the long run.</p>
      </div>

      <div>
        <p>To tell us something about emissions we need to split the energy investments into investments for clean and dirty energy. This results in clean and dirty energy and dirty energy leads to emissions.</p>
      </div>

      <div>
        <p>Using this model we can now change input assumptions like the population growth rate or introduce a carbon tax to explore how different scenarios unfold. If you toggle the switches below the chart you'll see how higher population leads to higher GDP and consumption but also to higher energy needs. Introducing carbon tax makes it lucrative to invest in clean energy and emissions quickly drop.</p>
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
            value="GCAM">GCAM4,</InHighlight>
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
      <VisChart
        slot="left"
        legend="ssp"
        scenario="population"/>
      <VisChart
        slot="right"
        scenario="gdp"/>
    </LayoutColumns>

    <p>
      Assumptions on population growth and GDP are already part of the scenario assumptions. This shows us how they turn out over time and in numbers. As you can see the
      <InHighlight
        field="charts.ssp"
        class="red"
        value="SSP3">SSP3</InHighlight> scenario of regional rivalary leads us to continued population growth but relatively low growth in GDP.
      <InHighlight
        field="charts.ssp"
        class="green"
        value="SSP1">SSP1</InHighlight> (Sustainability) and
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">SSP5</InHighlight> (Fossil-fueled developement) show similar patterns in population growth, but vast differences when it comes to GDP.
    </p>

    <LayoutColumns>
      <VisChart
        slot="left"
        :static-filter="{ssp: null, rcp: 'Baseline'}"
        legend="ssp"
        scenario="finalenergy"/>
      <VisChart
        slot="right"
        :static-filter="{ssp: null, rcp: 'Baseline'}"
        scenario="emissions"/>
    </LayoutColumns>

    <p>
      The high GDP of
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">SSP5</InHighlight> comes at a cost: High energy needs and with that lots of CO2-emissions. Until now we only looked at SSP-Baseline Scenarios. Let&rsquo;s set emission goals and include RCPs.
    </p>

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

    <p>That&rsquo;s means introducing a carbon price. The height of which of course depends on the former emissions and our goal.</p>

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

    <p>
      Compared to the Baseline-Scenarios this results in similar final energy but less emissions.
      <InHighlight
        :out="false"
        field="charts.filter"
        class="green"
        value="SSP1">SSP1,</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="blue"
        value="SSP2">SSP2,</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="red"
        value="SSP3">SSP3,</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="yellow"
        value="SSP4">SSP4,</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="violet"
        value="SSP5">SSP5</InHighlight>
    </p>
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
