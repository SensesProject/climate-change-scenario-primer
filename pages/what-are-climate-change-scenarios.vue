<template lang="pug">
  section.wrapper
    h2.h1 What are Climate Change Scenarios?

    p Although we know that global warming is happening today and already has an impact on nature and human society, its most wide-ranging consequences lie in the future. Human-made climate change is driven by a myriad of societal factors over decades and centuries to come. The future development of most of these factors is deeply uncertain and will be shaped by our actions. It is thus futile to ask “What will happen?” and try to predict future climate change. But the future, while inherently uncertain, is not entirely unknowable. Scenarios can be used to explore “What can happen?” and even “What should happen?” given the fact that we are able to shape our future.

    VisScenarioTypes

    p
      | Climate change scenarios are no exception. They are not predictions of the future, but rather
      strong.green  projections
      |  of what can happen by creating plausible, coherent and internally consistent descriptions of possible climate change futures. They can also constitute plausible, coherent and internally consistent descriptions of
      strong.blue  pathways
      |  towards certain goals. So climate change scenarios can come in two different forms, projections
      strong.green  “What can happen?”
      |  and goal-oriented pathways
      strong.blue  “What should happen?”
      | , depending on the type of question they aim to answer.

    p As scenarios are not about predicting the future, a single scenario is virtually meaningless. Scenarios are rather used in pairs or larger sets to contrast different futures and choices. For example, scenario-driven climate policy analysis relies on comparing a projection without policy intervention (typically called baseline scenario) with a pathway towards a desired goal (e.g., the 2&#8239;°C goal). Scenarios are hence fundamentally context dependent. Understanding a single scenario requires understanding the set of scenarios it is embedded in.

    p Owing to the nature of climate change, scenario analysis is a common tool in climate change research and its various subfields. Broadly speaking, seven different types of scenarios can be identified:
    ul.serif
      li
        strong Socio-economic scenarios
        span.scenario-types
          span.circle.blue
          span.circle.green
        |  that describe the development of societal drivers of human interference with the climate system.
      li
        strong Emissions, concentration and climate forcing scenarios
        span.scenario-types
          span.circle.green
        |  that emerge from these developments.
      |
      li
        strong Climate change scenarios
        span.scenario-types
          span.circle.green
        |  that result from human climate forcing.
      |
      li
        strong Climate impact scenarios
        span.scenario-types
          span.circle.green
        |  as a result of these climate changes.
      |
      li
        strong Mitigation scenarios
        span.scenario-types
          span.circle.blue
        |  that limit human-made climate change.
      |
      li
        strong Adaptation scenarios
        span.scenario-types
          span.circle.blue
        |  that limit the impact of climate change on societies.
      |
      li
        strong Integrated scenarios
        span.scenario-types
          span.circle.blue
          span.circle.green
        |  that capture several of the above components of future climate change.
    div.key.sans
      span.key-item
        span.scenario-types
          span.circle.green
        |  Projections
      span.key-item
        span.scenario-types
          span.circle.blue
        |  Pathways
      span.key-item
        span.scenario-types
          span.circle.green
          span.circle.blue
        |  Both
    p On the following pages we will introduce these types of climate change scenarios in more detail and explain their mutual relation.

    :markdown-it Climate change is not happening in isolation, but in concert with other processes of environmental, social, technical, economic, and cultural change. Scenario types have emerged that embed climate change in this broader context of change. Climate-resilient development pathways generalize the concept adaptation pathways and focus on patterns of future development that make societies more resilient to climate change. Sustainable development pathways are goal-oriented pathways towards achieving a  broad set of sustainable development goals, such as the 17 goals established by the United Nations 2030 Agenda for Sustainable Development.

    LayoutRecap
      li Climate change scenarios are a powerful tool for understanding climate change, charting response strategies, and supporting climate policy making.
      li Climate change scenarios are not about predicting the future, but come in the form of projections of what can happen or pathways of how to reach certain goals.
      li Climate change scenarios are usually used in pairs or larger sets which determine their context and meaning.
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

  .scenario-types {
    margin: 0 $spacing / 8 0 0;
    // position: absolute;
    .circle {
      display: inline-block;
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      &:nth-of-type(1) {
        margin-left: 0.3em;
        margin-right: -0.1rem;
      }

      &:nth-of-type(2) {
        transform: translateX(-0.2em);
        margin-right: -0.2em;
        mix-blend-mode: multiply;
      }

      &.green {
        background: $color-green;
      }
      &.blue {
        background: $color-blue;
      }
    }
  }

  ul {
    list-style: url(~/assets/img/li-black.svg);

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
