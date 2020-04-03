<template>
  <article class="wrapper">
    <h2 class="h1">
      What are Climate Change Scenarios?
    </h2>
    <p>
      We can’t predict the future, but scenarios allow us to explore possible futures, the assumptions they depend upon, and the courses of action that could bring them about.
    </p>
    <LayoutList>
      <h3>Chapter Summary</h3>
      <li>Climate change scenarios are a powerful tool for understanding climate change, charting response strategies, and supporting climate policy making.</li>
      <li>Climate change scenarios are not about predicting the future, but come in the form of projections of what can happen or pathways of how to reach certain goals.</li>
      <li>Climate change scenarios are usually used in pairs or larger sets which determine their context and meaning.</li>
    </LayoutList>
    <p>
      Although we know that global warming is happening today and already has an impact on nature and human society, its most wide-ranging consequences lie in the future. Human-made climate change is driven by a myriad of societal factors over decades and centuries to come. The future development of most of these factors is deeply uncertain and will be shaped by our actions. It is thus futile to ask “What will happen?” and try to predict future climate change. But the future, while inherently uncertain, is not entirely unknowable. Scenarios can be used to explore “What can happen?” and even “What should happen?” given the fact that we are able to shape our future.
    </p>
    <VisScenarioTypes />
    <p>
      Climate change scenarios are no exception. They are not predictions of the future, but rather <span class="highlight no-hover green">projections</span> of what can happen by creating plausible, coherent and internally consistent descriptions of possible climate change futures. They can also constitute plausible, coherent and internally consistent descriptions of <span class="highlight no-hover blue">pathways</span> towards certain goals. So climate change scenarios can come in two different forms, projections <span class="highlight no-hover green">“What can happen?”</span> and goal-oriented pathways <span class="highlight no-hover blue">“What should happen?”,</span> depending on the type of question they aim to answer.
    </p>
    <p>
      As scenarios are not about predicting the future, a single scenario is virtually meaningless. Scenarios are rather used in pairs or larger sets to contrast different futures and choices. For example, scenario-driven climate policy analysis relies
      on comparing a projection without policy intervention (typically called baseline scenario) with a pathway towards a desired goal (e.g., the 2&thinsp;°C goal). Scenarios are hence fundamentally context dependent. Understanding a single scenario requires understanding the set of scenarios it is embedded in.
    </p>
    <p>Owing to the nature of climate change, scenario analysis is a common tool in climate change research and its various subfields. Broadly speaking, seven different types of scenarios can be identified:</p>
    <div class="bullet-list tiny">
      <div class="key">
        <span class="key-item">
          <InListBullet :colors="['green']" /> Projections
        </span>
        <span class="key-item">
          <InListBullet :colors="['blue']" /> Pathways
        </span>
        <span class="key-item">
          <InListBullet :colors="['blue', 'green']" /> Both
        </span>
      </div>
      <ul>
        <li>
          <InListBullet :colors="['blue', 'green']" class="bullet" />
          <strong>Socioeconomic scenarios</strong>
          that describe the development of societal drivers of human interference with the climate system.
        </li>
        <li>
          <InListBullet :colors="['green']" class="bullet" />
          <strong>Emissions, concentration and climate forcing scenarios</strong>
          that emerge from these developments.
        </li>
        <li>
          <InListBullet :colors="['green']" class="bullet" />
          <strong>Climate change scenarios</strong>
          that result from human climate forcing.
        </li>
        <li>
          <InListBullet :colors="['green']" class="bullet" />
          <strong>Climate impact scenarios</strong>
          as a result of these climate changes.
        </li>
        <li>
          <InListBullet :colors="['blue']" class="bullet" />
          <strong>Mitigation scenarios</strong>
          that limit human-made climate change.
        </li>
        <li>
          <InListBullet :colors="['blue']" class="bullet" />
          <strong>Adaptation scenarios</strong>
          that limit the impact of climate change on societies.
        </li>
        <li>
          <InListBullet :colors="['blue', 'green']" class="bullet" />
          <strong>Integrated scenarios</strong>
          that capture several of the above components of future climate change.
        </li>
      </ul>
    </div>
    <p>On the following pages we will introduce these types of climate change scenarios in more detail and explain their mutual relation.</p>
    <p>
      Climate change is not happening in isolation, but in concert with other processes of environmental, social, technical, economic, and cultural change. Scenario types have emerged that embed climate change in this broader context of change. Climate-resilient
      development pathways generalize the concept of adaptation pathways and focus on patterns of future development that make societies more resilient to climate change. Sustainable development pathways are goal-oriented pathways towards achieving
      a broad set of sustainable development goals, such as the 17 goals established by the United Nations 2030 Agenda for Sustainable Development.
    </p>
    <LayoutNextChapter>
      <h3>Further Reading</h3>
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/wcc.63">
        <li>
          Rounsevell, M. D., & Metzger, M. J. (2010).
          <strong>Developing qualitative scenario storylines for environmental change assessment.</strong>
          Wiley Interdisciplinary Reviews:
          Climate Change, 1(4), 606-619.
        </li>
      </a>
      <a href="https://www.sciencedirect.com/science/article/pii/S0016328702000903">
        <li>
          Van Notten, P. W., Rotmans, J., Van Asselt, M. B., & Rothman, D. S. (2003).
          <strong>An updated scenario typology.</strong>
          Futures, 35(5), 423-443.
        </li>
      </a>
      <a href="https://www.sciencedirect.com/science/article/pii/S0016328705002132">
        <li>
          Börjeson, L., Höjer, M., Dreborg, K. H., Ekvall, T., & Finnveden, G. (2006).
          <strong>Scenario types and techniques: towards a user's guide.</strong>
          Futures, 38(7),
          723-739.
        </li>
      </a>
      <a href="https://www.nature.com/articles/nclimate3379">
        <li>
          Carlsen, H., Klein, R. J., & Wikman-Svahn, P. (2017).
          <strong>Transparent scenario development.</strong>
          Nature Climate Change, 7(9), 613.
        </li>
      </a>
    </LayoutNextChapter>
  </article>
</template>

<script>
import LayoutList from '@/components/LayoutList.vue'
import LayoutNextChapter from '@/components/LayoutNextChapter.vue'
import InListBullet from '@/components/InListBullet.vue'

export default {
  components: { LayoutList, InListBullet, LayoutNextChapter }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.wrapper {
  .bullet-list {
    padding-left: $spacing / 2;
    display: flex;
    align-items: center;
    flex-direction: column;

    .key {
      margin-bottom: $spacing / 4;
      .key-item {
        margin-right: $spacing;
        color: $color-deep-gray;
        .scenario-types {
          .circle {
            margin-left: 0em;
          }
        }
      }
    }

    ul {
      list-style: none;
      max-width: $narrow;
      @include print {
        margin-left: $spacing / 2;
      }

      .in-list-bullet {
        position: absolute;
        transform: translateX(calc(-100%));
      }

      li + li {
        margin-top: $spacing / 4;
      }
    }
  }
}
</style>
