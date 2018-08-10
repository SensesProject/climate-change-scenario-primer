<template>
  <section class="wrapper">
    <h2>Energy, Land Use and Emissions</h2>
    <p>Scenario assumptions - e.g. offered by the SSP-RCP framework - tell us the narrative and give us the general conditions for possible futures. Based on those scenario assumptions integrated assessment models and climate impact models generate a more detailed description how possible futures could look like. They calculate energy and land use variables and the correlated emissions for both – business-as-usual and climate change mitigation assumptions.</p>

    <p>Integrated assessment models (IAMs) provide consistent pathways for macro-economic, energy system related and land use variables and connect them to the resulting emissions.</p>

    <LayoutIAMs/>

    <!-- <LayoutScrollify vis="VisIamStructure">

      <div>
        <p>Here we give a very simple example of such an IAM. We assume that GDP is driven by the population, respectively the working force, energy and capital stock. As you can see all of those three factors are raising and so is GDP.</p>
      </div>

      <div>
        <p>The produced GDP can be spent either for consumption, invested into the macro-economic capital stock or used to raise the amount of used energy. Other IAMs might also take into account investment into education which would increase the productivity of the labor. But for simplicity we ignore this option here in our very simple IAM. The goal of our simple IAM is to maximise consumption in the long run.</p>
      </div>

      <div>
        <p>To analyse the effect on emissions in our simple IAM we split the total energy into clean energy and dirty energy and also give the opportunity to invest into both types of energy separately. In this simple case only dirty energy leads to emissions. That means that the decision how much of the GDP is used to build up capacities of clean energy instead of dirty energy determines the correlated amount of emissions. The negative impact of global warming in the baseline scenarios is ignored.</p>
      </div>

      <div>
        <p>Using this model we demonstrate the impact of assumptions like the population growth rate and introduction of a carbon tax. You can explore how different socio-economic and climate change mitigation scenarios could look like in this very simple IAM. If you toggle the switches below the chart you&#8217;ll see how higher population leads to higher GDP and consumption but also to higher energy needs. Introducing a carbon tax makes it lucrative to invest into clean energy and less into dirty energy and thereby emissions drop quickly.</p>
      </div>

    </LayoutScrollify> -->

    <LayoutScrollify
      vis="VisFingerprints"
      flipped>

      <div>
        <p>
          In contrast to the simple IAM given above as example the models used to generate SSP scenarios are a lot more complex. This graphic illustrates what kind of aspects are taken into account by those models. Each dot represents one of those aspects. There are some similarities to our simple model above.
          <InHighlight
            field="fingerprints.properties"
            class="violet"
            value="GDP">GDP</InHighlight>again plays a big role.
          <InHighlight
            field="fingerprints.properties"
            class="yellow"
            value="energy">Energy</InHighlight> and
          <InHighlight
            field="fingerprints.properties"
            class="red"
            value="emissions">emissions</InHighlight>are split into more specific categories.
        </p>
      </div>

      <div>
        <p>
          But the more complex IAMs represent more aspects of the macro-economy and take into account more types of technologies to produce energy at different levels and calculate a variety of produced emissions. We categorise the aspects into
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
          However, there are also key differences between the IAMs used to produce the SSP scenarios. They are more detailed in different aspects and cover different sectors. Each of the five models
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
            value="MESSAGE-GLOBIUM">MESSAGE-GLOBIUM</InHighlight>is a reference models for one SSP, as it is suited to handle the input assumption of that specific SSP narrative.
        </p>
      </div>

    </LayoutScrollify>

    <p>Feeding scenario assumptions into models will get us scenarios – a set of output variables describing the possible future consistent to the input assumptions. Let&#8217;s take a look how some of those variables play out in different scenarios.</p>

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
      Assumptions on population growth and GDP are already part of the SSP scenario assumptions. This shows us how they turn out over time and in numbers. As you can see the
      <InHighlight
        field="charts.ssp"
        class="red"
        value="SSP3">SSP3</InHighlight>scenario of regional rivalry leads us to continued population growth but relatively low growth in GDP.
      <InHighlight
        field="charts.ssp"
        class="green"
        value="SSP1">SSP1</InHighlight>(Sustainability) and
      <InHighlight
        field="charts.ssp"
        class="violet"
        value="SSP5">SSP5</InHighlight>(Fossil-fuelled development) show similar patterns in population growth but significant differences when it comes to GDP.
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
        value="SSP5">SSP5</InHighlight>comes at a cost: High energy needs and with that lots of C02-emissions. Until now we only looked at SSP-Baseline Scenarios where we assume that the world will develop like business-as-usual in the future. Negative impacts of climate change are ignored. Let&#8217;s now set emission goals and include RCPs.
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

    <p>That&#8217;s means introducing a carbon price. The height of which of course depends on the former emissions and our goal.</p>

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

    <p class="ssp-selection">
      <InHighlight
        :out="false"
        init-active
        field="charts.filter"
        class="green"
        value="SSP1">SSP1</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="blue"
        value="SSP2">SSP2</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="red"
        value="SSP3">SSP3</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="yellow"
        value="SSP4">SSP4</InHighlight>
      <InHighlight
        :out="false"
        field="charts.filter"
        class="violet"
        value="SSP5">SSP5</InHighlight>
    </p>
    <p>
      Compared to the Baseline-Scenarios this results in some reductions in final energy and substantially decreased emissions.
    </p>
    <LayoutRecap>
      <li>Integrated assessment models (IAMs) are complex systems that use socioeconomic assumptions to produce scenarios.</li>
      <li>Applying SSP-RCP-assumptions on to IAMs allows us to explore how land use, energy use and emissions will play out in those futures.</li>
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
  .ssp-selection {
    margin-top: $spacing-unit * 0.5;
  }
}
</style>
