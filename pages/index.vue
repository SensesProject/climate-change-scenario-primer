<template>
  <article class="wrapper">
    <h2 class="h1">
      What are Climate Change Scenarios?
    </h2>
    <p>
      Although we know that global warming is happening today and already has an impact on nature and human society, its most wide-ranging consequences lie in the future. Human-made climate change is driven by a myriad of societal factors over decades and
      centuries to come. The future development of most of these factors is deeply uncertain and will be shaped by our actions. It is thus futile to ask “What will happen?” and try to predict future climate change. But the future, while inherently uncertain,
      is not entirely unknowable. Scenarios can be used to explore “What can happen?” and even “What should happen?” given the fact that we are able to shape our future.
    </p>
    <VisScenarioTypes />
    <p>
      Climate change scenarios are no exception. They are not predictions of the future, but rather<strong class="green"> projections</strong> of what can happen by creating plausible, coherent and internally consistent descriptions of possible climate
      change futures. They can also constitute plausible, coherent and internally consistent descriptions of<strong class="blue"> pathways</strong> towards certain goals. So climate change scenarios can come in two different forms, projections
      <strong
        class="green"
      > “What can happen?”</strong> and goal-oriented pathways<strong class="blue"> “What should happen?”</strong>, depending on the type of question they aim to answer.
    </p>
    <p>
      As scenarios are not about predicting the future, a single scenario is virtually meaningless. Scenarios are rather used in pairs or larger sets to contrast different futures and choices. For example, scenario-driven climate policy analysis relies
      on comparing a projection without policy intervention (typically called baseline scenario) with a pathway towards a desired goal (e.g., the 2&thinsp;°C goal). Scenarios are hence fundamentally context dependent. Understanding a single scenario
      requires understanding the set of scenarios it is embedded in.
    </p>
    <p>Owing to the nature of climate change, scenario analysis is a common tool in climate change research and its various subfields. Broadly speaking, seven different types of scenarios can be identified:</p>
    <ul class="serif">
      <li>
        <strong>Socioeconomic scenarios</strong>
        <VisScenarioTypesLegend color="both" /> that describe the development of societal drivers of human interference with the climate system.
      </li>
      <li>
        <strong>Emissions, concentration and climate forcing scenarios</strong>
        <VisScenarioTypesLegend color="green" /> that emerge from these developments.
      </li>
      <li>
        <strong>Climate change scenarios</strong>
        <VisScenarioTypesLegend color="green" /> that result from human climate forcing.
      </li>
      <li>
        <strong>Climate impact scenarios</strong>
        <VisScenarioTypesLegend color="green" /> as a result of these climate changes.
      </li>
      <li>
        <strong>Mitigation scenarios</strong>
        <VisScenarioTypesLegend color="blue" /> that limit human-made climate change.
      </li>
      <li>
        <strong>Adaptation scenarios</strong>
        <VisScenarioTypesLegend color="blue" /> that limit the impact of climate change on societies.
      </li>
      <li>
        <strong>Integrated scenarios</strong>
        <VisScenarioTypesLegend color="both" /> that capture several of the above components of future climate change.
      </li>
    </ul>
    <div class="key sans">
      <span class="key-item"><VisScenarioTypesLegend color="green" /> Projections</span><span class="key-item"><VisScenarioTypesLegend color="blue" /> Pathways</span><span class="key-item"><VisScenarioTypesLegend color="both" /> Both</span>
    </div>
    <p>On the following pages we will introduce these types of climate change scenarios in more detail and explain their mutual relation.</p>
    <p>
      Climate change is not happening in isolation, but in concert with other processes of environmental, social, technical, economic, and cultural change. Scenario types have emerged that embed climate change in this broader context of change. Climate-resilient
      development pathways generalize the concept of adaptation pathways and focus on patterns of future development that make societies more resilient to climate change. Sustainable development pathways are goal-oriented pathways towards achieving
      a broad set of sustainable development goals, such as the 17 goals established by the United Nations 2030 Agenda for Sustainable Development.
    </p>
    <LayoutRecap>
      <li>Climate change scenarios are a powerful tool for understanding climate change, charting response strategies, and supporting climate policy making.</li>
      <li>Climate change scenarios are not about predicting the future, but come in the form of projections of what can happen or pathways of how to reach certain goals.</li>
      <li>Climate change scenarios are usually used in pairs or larger sets which determine their context and meaning.</li>
    </LayoutRecap>
    <LayoutFurtherReading>
      <li>
        Rounsevell, M. D., & Metzger, M. J. (2010).<a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/wcc.63"><strong> Developing qualitative scenario storylines for environmental change assessment.</strong></a> Wiley Interdisciplinary Reviews:
        Climate Change, 1(4), 606-619.
      </li>
      <li>Van Notten, P. W., Rotmans, J., Van Asselt, M. B., & Rothman, D. S. (2003).<a href="https://www.sciencedirect.com/science/article/pii/S0016328702000903"><strong> An updated scenario typology.</strong></a> Futures, 35(5), 423-443.</li>
      <li>
        Börjeson, L., Höjer, M., Dreborg, K. H., Ekvall, T., & Finnveden, G. (2006).<a href="https://www.sciencedirect.com/science/article/pii/S0016328705002132"><strong> Scenario types and techniques: towards a user's guide.</strong></a> Futures, 38(7),
        723-739.
      </li>
      <li>Carlsen, H., Klein, R. J., & Wikman-Svahn, P. (2017).<a href="https://www.nature.com/articles/nclimate3379"><strong> Transparent scenario development.</strong></a> Nature Climate Change, 7(9), 613.</li>
    </LayoutFurtherReading>
  </article>
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
  .key {
    margin-top: $spacing / 4;
    .key-item {
      margin-right: 0.8em;
      .scenario-types {
        .circle {
          margin-left: 0em;
        }
      }
    }
  }

  strong {
    white-space: normal;
    word-wrap: normal;
  }

  ul {
    list-style: url(~@/assets/img/li-black.svg);

    @include print {
      /* list-style-position: inside; */
      margin-left: $spacing / 2;
    }

    li + li {
      margin-top: $spacing / 4;
    }
  }

  table {
    max-width: 760px;

    thead {
      tr {
        th {
          text-align: center;
          font-weight: normal;
          &:first-of-type {
            font-weight: bold;
            text-align: left;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          text-align: center;
          min-width: 66px;
          &:first-of-type {
            // font-weight: bold;
            text-align: left;
            max-width: 500px;
          }
          span.true {
            display: inline-block;
            width: 1em;
            height: 1em;
            background: $color-green;
            border-radius: 50%;
            transform: translateY(0.15rem);
          }
        }
      }
    }
  }
}

</style>
