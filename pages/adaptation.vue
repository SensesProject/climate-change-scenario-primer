<template lang="pug">
  section.wrapper
    h2.h1 Adaptation

    p Adaptation refers to the process of anticipation and adjustment by individuals, groups and governments to observed or expected climate change and its adverse effects. Natural systems will adapt on their own, but managed systems (such as agriculture, forest industry and water-based utilities) will require human intervention to enable adjustment to climate change. Well-planned (early) adaptation is goal-oriented and avoids harm and opens beneficial opportunities. Adaptation implies both the implementation and monitoring of strategies to evaluate its effectiveness.

    VisAdapt

    p
      strong.blue Adaptation scenarios
      |  are goal-oriented pathways resulting from assessment of impacts from combined
      strong.green  climate and socioeconomic scenarios,
      |  and sometimes based on existing (non-climate) policies. Almost all countries have a National Adaptation Plan (NAP) to identify short- and long-term adaptation needs. The information between adaptation pathways and their design and implementation into Adaptation Plans, as part of broader decision-making frameworks on sustainable development, is a continuous, dynamic and iterative process.

    h3 Examples of cross-cutting and robust adaptation
    ul.serif
      li
        span.sans Using scarce water resources more efficiently
        VisScenarioTypesLegend(color="both2")
      li
        span.sans Adapting buildings to future climate conditions and extreme weather events
        VisScenarioTypesLegend(color="violet")
      |
      li
        span.sans Building flood defences and raising the levels of dykes
        VisScenarioTypesLegend(color="violet")
      |
      li
        span.sans Developing drought-tolerant crops
        VisScenarioTypesLegend(color="both2")
      |
      li
        span.sans Choosing tree species and forestry practices less vulnerable to storms and fires
        VisScenarioTypesLegend(color="both2")
      |
      li
        span.sans Setting aside land corridors to help species migrate
        VisScenarioTypesLegend(color="violet")
      |
    div.key.sans
      span.key-item
        VisScenarioTypesLegend(color="yellow")
        |  Crop yield failure
      span.key-item
        VisScenarioTypesLegend(color="violet")
        |  Increased flood/droughts
      span.key-item
        VisScenarioTypesLegend(color="both2")
        |  Both

    p Crucially, adaptation consists of actions throughout society and this can be motivated by many factors, including the protection of economic well-being or improvement of safety. These actions are context-dependent and require an understanding of the local enablers and obstacles. The integration of multiple sources of uncertainties, stemming both from socioeconomic and climate scenarios as well as evolving worldviews, enables adaptation to be implemented also under “deep uncertainty”, i.e. adaptation over time depends not only on what is known or projected but also on what is learned, experienced also including policy responses.

    div.box
      h3.h2 How is local adaptation contextualised from socioeconomic and climate scenarios?

      h3 Socioeconomic nested scenarios
      p Scenario development is typically “multiscale”, i.e. outcomes for countries are nested within a region or a global context. Multiscale scenarios are often co-produced with regional stakeholders by professionally matching simulations at the appropriate scale and iterating between modelling teams and stakeholders. The degree of matching can differ, as can the method of developing them. In all cases, socioeconomic scenarios need to be scientifically credible, yet legitimate and relevant to decision-making and include different views and stakes.

      h3 Downscaling climate scenarios
      p Global Climate Models (GCMs) too are downscaled to produce Regional Climate Models (RCMs), through CORDEX (Coordinated Regional Climate Downscaling Experiment), analogue to CMIP. The aim is to downscale global information, and to match regional climate specifics. Regional models typically cover relatively large areas, with most countries having national climate scenarios, related to national issues, e.g. sea-level rise, or extreme events (floods, droughts).

      h3 Linking Socioeconomic and Climate scenarios
      p The link between multiscale socioeconomic scenarios climate regional scenarios strongly depends on the policy needs and, methodologically, on model and data availability. For data rich regions, regional versions of the global IAMs exist to assess cross-sectoral climate change impacts on urbanisation, water resources, agriculture and land use, and biodiversity, to cite a few examples. Particularly the availability of reliable data of sufficient spatial resolution can be problematic. For larger or data-scarce regions, results of global models are sometimes employed.

    LayoutRecap
      li Adaptation refers to the process of anticipation and adjustment by individuals, groups and governments to observed or expected climate change and its adverse effects.
      li Climate adaptation scenarios contextualise combined socioeconomic and climate scenarios and their impacts, with knowledge from local stakeholders to iteratively inform robust decision-making in the face of deep uncertainty.

    LayoutFurtherReading
      li Haasnoot, M., Kwakkel, J. H., Walker, W. E., & ter Maat, J. (2013).
        a(href="https://www.sciencedirect.com/science/article/pii/S0016328702000903")
          strong  Dynamic adaptive policy pathways: A method for crafting robust decisions for a deeply uncertain world.
        |  Global environmental change, 23(2), 485-498.
      li Field, C. B., Barros, V. R., Mastrandrea, M. D., et al. (2014).
        a(href="https://www.ipcc.ch/report/ar5/wg2/")
          strong  IPCC: Summary for Policymakers. In: Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part A: Global and Sectoral Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change.
        |  Cambridge University Press.
      li Adger, W. N., Arnell, N. W., & Tompkins, E. L. (2005).
        strong  Successful adaptation to climate change across scales.
        |  Global environmental change, 15(2), 77-86.
      li Pedde, S., Kok, K., Hölscher, K., Frantzeskaki, N., Holman, I., Dunford, R., ... & Jäger, J. (2019).
        strong  Advancing the use of scenarios to understand society’s capacity to achieve the 1.5 degree target.
        |  Global environmental change, 56, 75-85.
      li Zurek, M. B., & Henrichs, T. (2007).
        strong  Linking scenarios across geographical scales in international environmental assessments.
        |  Technological forecasting and social change, 74(8), 1282-1295.
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

  .box {
    position: relative;
    background: $color-black;
    padding: $spacing $spacing / 2;
    color: $color-white;
    margin-top: 0;
    max-width: $max-width-extended;
    align-self: center;
    margin-bottom: $spacing;
    @include ie {
      max-width: $max-width !important;
      .ie-no-padding {
        padding: $spacing / 2 0 !important;
      }
    }

    p {
      font-family: $font-sans;
      @include light-text();
      margin: 0;
    }
    width: 100vw;
    @include print {
      width: 100%;
      border: 1px solid $color-black;
      background: none;
      // padding: $spacing $spacing / 2;
      color: $color-black;
    }
    @include flex-column();
    align-items: center;
    // @include ie {
    //   max-width: $max-width;
    //   width: 100%;
    // }

    h3, p {
      width: 100%;
      max-width: $max-width;

      @include print {
        max-width: 100%;
        // max-width: $max-width;
      }
    }

    h3 {
      margin-top: $spacing;
    }

    @include media-query($device-wide) {
      width: calc(100vw - 320 - #{$spacing * 2});
    }
  }
}

</style>