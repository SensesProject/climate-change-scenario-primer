<template lang="pug">
  section.wrapper
    h2 What are Climate Change Scenarios?

    :markdown-it Although we know that global warming is happening today and already has an impact on nature and human society, its most wide-ranging consequences lie in the future. Human-made climate change is driven by a myriad of societal factors over decades and centuries to come. The future development of most of these factors is deeply uncertain and will be shaped by our actions. It is thus futile to ask “What will happen?” and try to predict future climate change. But the future, while inherently uncertain, is not entirely unknowable. Scenarios can be used to explore “What can happen?” and even “What should happen”? given the fact that we are able to shape our future.

    :markdown-it Climate change scenarios are no exception. They are not predictions of the future, but rather **projections** of what can happen by creating plausible, coherent and internally consistent descriptions of possible climate change futures. They can also constitute plausible, coherent and internally consistent descriptions of **pathways** towards certain goals. So climate change scenarios can come in two different forms, projections (“What can happen?”) and goal-oriented pathways (“What should happen?”), depending on the type of question they aim to answer.

    :markdown-it As scenarios are not about predicting the future, a single scenario is virtually meaningless. Scenarios are rather used in pairs or larger sets to contrast different futures and choices. For example, scenario-driven climate policy analysis relies on comparing a projection without policy intervention (typically called ‘baseline scenario’) with a pathway towards a desired goal (e.g. the 2°C goal). This fundamental context-dependence makes scenarios complex objects. Understanding a single scenario requires understanding the set of scenarios it is embedded in.

    :markdown-it Owing to the nature of climate change, scenario analysis is a common tool in climate change research and its various subfields. Broadly speaking, seven different types of scenarios can be identified: **1**&nbsp;socio-economic scenarios that describe the development of societal drivers of human interference with the climate system, **2**&nbsp;emissions, concentration and climate forcing scenarios that emerge from these developments, **3**&nbsp;climate change projections that result from human climate forcing, **4**&nbsp;climate impact scenarios as a result of these climate changes, **5**&nbsp;mitigation scenarios that limit human-made climate change, **6**&nbsp;adaptation scenarios that limit the impact of climate change on societies, and **7**&nbsp;integrated scenarios that capture several of the above components of future climate change. On the following pages we will introduce these types of climate change scenarios in more detail and explain their mutual relation.

    table
      thead
        tr
          th Projection
          th Scenario
          th Pathway
      tbody
        tr
          td
            span.true
          td socio-economic
          td
            span.true
        tr
          td
            span.true
          td emissions, concentration and climate forcing
          td
        tr
          td
            span.true
          td climate change
          td
        tr
          td
            span.true
          td climate impact
          td
        tr
          td
          td mitigation
          td
            span.true
        tr
          td
          td adaptation
          td
            span.true
        tr
          td
            span.true
          td integrated
          td
            span.true

    :markdown-it Climate change is not happening in isolation, but in concert with other processes of environmental, social, technical, economic, and cultural change. Scenario types have emerged that embed climate change in this broader context of change. Climate-resilient development pathways generalize the concept adaptation pathways and focus on patterns of future development that make societies more resilient to climate change. Sustainable development pathways are goal-oriented pathways towards achieving a  broad set of sustainable development goals, such as the 17 goals established by the United Nations 2030 Agenda for Sustainable Development.

    <LayoutRecap>
      <li>Climate change scenarios are a powerful tool for decision making in the context of climate change.</li>
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
  table {
    max-width: 760px;
    thead {
      tr {
        th {
          text-align: center;
          &:first-of-type, &:last-of-type {
            font-weight: normal;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          text-align: center;
          min-width: 66px;
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
