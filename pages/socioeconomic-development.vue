<template>
  <article class="wrapper">
    <h2 class="h1">
      Socioeconomic Development
    </h2>
    <LayoutList>
      <h3>Chapter Summary</h3>
      <li>Socioeconomic scenarios provide a consistent set of assumptions about societal, technical, cultural and economic developments over the 21<sup>st</sup> century.</li>
      <li>They typically centre around a general narrative about the world’s future augmented by projections of factors like population, economic activity, and urbanisation.</li>
      <li>Socioeconomic scenarios in climate change research are increasingly based on the Shared Socioeconomic Pathways (SSPs) which represent five different futures with widely varying challenges to mitigation and adaptation.</li>
    </LayoutList>
    <p>
      With climate change so dependent on socioeconomic development, we need scenarios of possible socioeconomic futures to explore projections, implications and solutions to climate change. Such socioeconomic scenarios provide a consistent set of assumptions
      about societal, technical, cultural and economic developments over the 21<sup>st</sup> century. To reflect the multifaceted and inherently uncertain nature of these developments, they often centre on a broad narrative about the world’s future.
      The narrative is augmented by quantitative projections of factors like population, economic activity, and urbanisation that are needed as inputs to energy, land use, climate impacts and integrated assessment modelling.
    </p>
    <p>
      The current generation of socioeconomic scenarios in climate change research is increasingly based on the Shared Socio-Economic Pathways (SSPs). The SSPs offer a systematic exploration of possible socioeconomic futures in terms of widely different
      predispositions to mitigate and adapt to climate change. Socioeconomic challenges to mitigate vary, e.g., with the resource and carbon intensity of consumption. Socioeconomic challenges to adapt vary, e.g., with the level of education, health
      care, poverty and inequality in societies around the world.
    </p>
    <section class="ssp-schema">
      <VisSspComparison class="center" />
    </section>
    <p>
      The SSPs comprise five different narratives of the world’s future augmented by an expanding set of projections, e.g., for population, economic activity, urbanisation, and income inequality. The SSPs fall into the category of “Projections” as defined
      in the introduction although they have been named “Pathways” when introduced to the literature. While the use of “Pathway” for goal-oriented scenarios is more common in the literature, the term has also been used to describe a subset of trajectories
      of a multi-dimensional scenario.
    </p>
    <section class="ssp-factsheets">
      <img src="~/assets/img/SSP1.png">
      <LayoutList>
        <h3>SSP&thinsp;1: Sustainability - Taking the green road</h3>
        <li>This future poses<strong class="yellow"> low challenges to mitigation</strong> and<strong class="red"> low challenges to adaptation</strong></li>
        <li>Global population peaks mid-century</li>
        <li>Emphasis on human well-being</li>
        <li>Environmentally friendly technologies and renewable energy</li>
        <li>Strong and flexible institutions on global, regional, and national level</li>
      </LayoutList><img src="~/assets/img/SSP2.png">
      <LayoutList>
        <h3>SSP&thinsp;2: Middle of the road</h3>
        <li>This future poses<strong class="yellow"> moderate challenges to mitigation</strong> and<strong class="red"> moderate challenges to adaptation</strong></li>
        <li>Population growth stabilizes toward the end of the century</li>
        <li>Current social, economic, and technological trends continue</li>
        <li>Global and national institutions make slow progress toward achieving sustainable development goals</li>
      </LayoutList><img src="~/assets/img/SSP3.png">
      <LayoutList>
        <h3>SSP&thinsp;3: Regional rivalry - A rocky road</h3>
        <li>This future poses<strong class="yellow"> high challenges to mitigation</strong> and<strong class="red"> high challenges to adaptation</strong></li>
        <li>Population growth continues with high growth in developing countries</li>
        <li>Emphasis on national issues due to regional conflicts and nationalism</li>
        <li>Economical development is slow and fossil fuel dependent</li>
        <li>Weak global institutions and little international trade</li>
      </LayoutList><img src="~/assets/img/SSP4.png">
      <LayoutList>
        <h3>SSP&thinsp;4: Inequality - A road divided</h3>
        <li>This future poses<strong class="yellow"> low challenges to mitigation</strong> and<strong class="red"> high challenges to adaptation</strong></li>
        <li>Population growth stabilizes toward the end of the century</li>
        <li>Growing divide between globally-connected, well educated society and fragmented lower income societies</li>
        <li>Unrest and conflict becomes more common</li>
        <li>Global, regional, and national institutions are ineffective</li>
      </LayoutList><img src="~/assets/img/SSP5.png">
      <LayoutList>
        <h3>SSP&thinsp;5: Fossil-fueled development - Taking the highway</h3>
        <li>This future poses<strong class="yellow"> high challenges to mitigation</strong> and<strong class="red"> low challenges to adaptation</strong></li>
        <li>Global population peaks mid-century</li>
        <li>Emphasis on economic growth and technological progress</li>
        <li>Global adoption of resource and energy intensive lifestyles</li>
        <li>Lack of environmental awareness</li>
      </LayoutList>
    </section>
    <section class="ssp-detail extended no-margin white">
      <div class="center default">
        <h3 class="h2">
          SSPs in Detail
        </h3>
        <p class="sans">
          These narratives play out differently for key characteristics of socioeconomic futures. In the following charts, a few of these key characteristics are mapped across the five SSPs covering the space of varying challenges to mitigation and
          adaptation: Education, Trade, and Technological Development.
        </p>
        <div class="tiny">
          <LayoutColumns class="center default" center="center">
            <div slot="right" class="ssp-comparison">
              <VisSspComparison :step="0" />
            </div>
            <div slot="left">
              <h3>Education</h3>
              <p class="sans">
                Education plays a key role for population and human development. The higher the educational attainment, the lower the fertility rate and the higher social inclusion. The progressive SSP&thinsp;1 and SSP&thinsp;5 futures with high educational
                attainment have therefore substantially lower population projections than the SSP&thinsp;3 world in which educational attainment remains low. SSP&thinsp;4 is characterized by an unequal distribution of educational attainment between
                rich and poor households and regions.
              </p>
            </div>
          </LayoutColumns>
          <LayoutColumns class="center default" center="center">
            <div slot="right" class="ssp-comparison">
              <VisSspComparison :step="1" />
            </div>
            <div slot="left">
              <h3>International Trade</h3>
              <p class="sans">
                The amount of international trade is an indicator for globalization. SSP&thinsp;5 is the most globalized world, while regional rivalry in SSP&thinsp;3 is posing a barrier to globalization. The other futures have intermediate levels of
                globalization (SSP&thinsp;2), a balance between globalized institutions and an emphasis on local communities (SSP&thinsp;1), or fragmented societies with a globalized elite and disconnected local work forces (SSP&thinsp;4).
              </p>
            </div>
          </LayoutColumns>
          <LayoutColumns class="center default" center="center">
            <div slot="right" class="ssp-comparison">
              <VisSspComparison :step="2" />
            </div>
            <div slot="left">
              <h3>Technology Development</h3>
              <p class="sans">
                Technological development drives economic productivity. It also plays a key role for mitigating and adapting to climate change. SSP&thinsp;5 has highest economic growth due to rapid technological change and human development, globalizing
                markets, and an emphasis on production and consumption. In contrast, regional isolation dampens technological progress in SSP&thinsp;3. Intermediate developments occur due to different levels of technological progress across regions
                (SSP&thinsp;2) and societal groups (SSP&thinsp;4), or an emphasis on a broad concept of wellbeing that goes beyond a narrow focus on economic gains (SSP&thinsp;1).
              </p>
            </div>
          </LayoutColumns>
          <LayoutColumns class="center default" center="center">
            <div slot="right" class="ssp-comparison">
              <VisSspComparison :step="3" />
            </div>
            <div slot="left">
              <h3>Land Use Change</h3>
              <p class="sans">
                Land use change regulations aim to conserve land that contributes to negative emissions and thus, to avoid deforestation. In SSP&thinsp;1 inclusive development that respects environmental boundaries induces strongly regulated land use
                change, e.g. tropical deforestation rates are strongly reduced. In contrast in SSP&thinsp;2 and SSP&thinsp;5 trends do not shift much from historical patterns and thus land use is incompletely regulated, i.e. tropical deforestation
                continues, although at slowly declining rates over time. In SSP&thinsp;4 land use is only effectively regulated in wealthy regions, whereas in SSP&thinsp;3 the poor protection of forests is omnipresent.
              </p>
            </div>
          </LayoutColumns>
        </div>
      </div>
    </section>
    <LayoutNextChapter>
      <h3>Further Reading</h3>
      <li>O’Neill, B. C., Kriegler, E., Riahi, K., et al. (2014).<a href="https://link.springer.com/article/10.1007/s10584-013-0905-2"><strong> A new scenario framework for climate change research: the concept of shared socioeconomic pathways.</strong></a>            Climatic Change, 122(3), 387-400.</li>
      <li>Kriegler, E., O’Neill, B. C., Hallegatte, S., et al. (2012).<a href="https://www.sciencedirect.com/science/article/abs/pii/S0959378012000593"><strong> The need for and use of socio-economic scenarios for climate change analysis: a new approach based on shared socio-economic pathways.</strong></a>            Global Environmental Change, 22(4), 807-822.</li>
      <li>O’Neill, B. C., Kriegler, E., Ebi, K. L., et al. (2017).<a href="https://www.sciencedirect.com/science/article/abs/pii/S0959378015000060"><strong> The roads ahead: narratives for shared socioeconomic pathways describing world futures in the 21st century.</strong></a>            Global Environmental Change, 42, 169-180.</li>
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
  .ssp-schema {
    display: grid;
    > * {
      justify-self: center;
    }
  }
  .ssp-factsheets {
    display: grid;
    grid-template-columns: auto;
    @include min-width ($wide) {
      grid-template-columns: auto 1fr;
    }

    img {
      // margin: $spacing / 2;
      max-width: $narrow / 2;

      justify-self: center;

      @include min-width ($wide) {
        align-self: end;
        margin: 0 $spacing $spacing $spacing / -2;
      }

      @include print {
        width: 70% !important;
        margin: $spacing / 2 0;
        page-break-inside: avoid;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }
    .layout-list.tiny {
      margin-top: $spacing / 4;
    }
  }
  .right {
    @include print {
      page-break-inside: avoid;
    }
  }

  .ssp-detail {
    margin: 0 $spacing / -2 $spacing / 2 $spacing / -2;
    padding: $spacing / 2;

    // @include max-width($medium) {
    //   margin: $spacing * 2 #{-spacing / 2} $spacing;
    // }

    background: $color-black;
    color: $color-white;
    @include flex-column;

    @include print {
      background-color: #fff;
      border: 1px solid $color-black;
      margin-bottom: $spacing;
      padding: $spacing;
      display: block;

      &.white {
        color: $color-text !important;
      }
    }

    .center.default {
      @include ie {
        max-width: calc(#{$max-width} - #{$spacing}) !important;
      }
    }

    .LayoutColumns {
      margin: 0;

      @include media-query($device-narrow) {
        margin: 0 0 $spacing;
      }

      .ssp-comparison {
        display: flex;
        flex-direction: column;
        align-items: center;

        .VisSspComparison {
          align-self: center;

          @include media-query($device-narrow) {
            margin: #{-$spacing / 4} 0 #{-$spacing / 2};
          }

          @include print {
            margin: 0;
          }
          @include ie {
            margin: 0;
          }
        }
      }
      p {
        margin: $spacing / 4 0 0 0;
      }
    }
  }
}
</style>
