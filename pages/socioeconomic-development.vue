<template lang="pug">
  section.wrapper
    h2.h1 Socioeconomic Development
    p
      | With climate change so dependent on socioeconomic development, we need scenarios  of possible socioeconomic futures to explore projections, implications and solutions to climate change. Such socioeconomic scenarios provide a consistent set of assumptions about societal, technical, cultural and economic developments over the 21
      sup st
      |  century. To reflect the multifaceted and inherently uncertain nature of these developments, they often centre around a general narrative about the world’s future. The narrative is augmented by quantitative projections of factors like population, economic activity, and urbanisation that are needed as inputs to energy, land use, climate impacts and integrated assessment modelling.

    p The current generation of socioeconomic scenarios in climate change research is increasingly based on the Shared Socio-Economic Pathways (SSPs). The SSPs offer a systematic exploration of possible socioeconomic futures in terms of widely different predispositions to mitigate and adapt to climate change. Socioeconomic challenges to mitigate vary, e.g., with the resource and carbon intensity of consumption. Socioeconomic challenges to adapt vary, e.g., with the level of education, health care, poverty and inequality in societies around the world.

    VisSspComparison.center

    p The SSPs comprise five different narratives of the world’s future augmented by an expanding set of projections, e.g., for population, economic activity, urbanisation, and income inequality. The SSPs fall into the category of “Projections” as defined in the introduction although they have been named “Pathways” when introduced to the literature. While the use of “Pathway” for goal-oriented scenarios is more common in the literature, the term has also been used to describe a subset of trajectories of a multi-dimensional scenario.

    img.extended.no-margin(src="~/assets/img/SSP1.png")
    h3 SSP&#8239;1: Sustainability - Taking the green road
    ul
      li This future poses
        strong.yellow  low challenges to mitigation
        |  and
        strong.red  low challenges to adaptation
      li Global population peaks mid-century
      li Emphasis on human well-being
      li Environmentally friendly technologies and renewable energy
      li Strong and flexible institutions on global, regional, and national level

    img.extended.no-margin(src="~/assets/img/SSP2.png")
    h3 SSP&#8239;2: Middle of the road
    ul
      li This future poses
        strong.yellow  moderate challenges to mitigation
        |  and
        strong.red  moderate challenges to adaptation
      li Population growth stabilizes toward the end of the century
      li Current social, economic, and technological trends continue
      li Global and national institutions make slow progress toward achieving sustainable development goals

    img.extended.no-margin(src="~/assets/img/SSP3.png")
    h3 SSP&#8239;3: Regional rivalry - A rocky road
    ul
      li This future poses
        strong.yellow  high challenges to mitigation
        |  and
        strong.red  high challenges to adaptation
      li Population growth continues with high growth in developing countries
      li Emphasis on national issues due to regional conflicts and nationalism
      li Economical development is slow and fossil fuel dependent
      li Weak global institutions and little international trade

    img.extended.no-margin(src="~/assets/img/SSP4.png")
    h3 SSP&#8239;4: Inequality - A road divided
    ul
      li This future poses
        strong.yellow  low challenges to mitigation
        |  and
        strong.red  high challenges to adaptation
      li Population growth stabilizes toward the end of the century
      li Growing divide between globally-connected, well educated society and fragmented lower income societies
      li Unrest and conflict becomes more common
      li Global, regional, and national institutions are ineffective

    img.extended.no-margin(src="~/assets/img/SSP5.png")
    h3 SSP&#8239;5: Fossil-fueled development - Taking the highway
    ul
      li This future poses
        strong.yellow  high challenges to mitigation
        |  and
        strong.red  low challenges to adaptation
      li Global population peaks mid-century
      li Emphasis on economic growth and technological progress
      li Global adoption of resource and energy intensive lifestyles
      li Lack of environmental awareness

    div.detail.extended.no-margin.white
      div.center.default
        h3.h2 SSPs in Detail
        p.sans These narratives play out differently for key characteristics of socioeconomic futures. In the following charts, a few of these key characteristics are mapped across the five SSPs covering the space of varying challenges to mitigation and adaptation: Education, Trade, and Technological Development.

        h3 Education
        LayoutColumns.center.default(center)
          div.ssp-comparison(slot="right")
            VisSspComparison(:step=0)
          p.sans(slot="left") Education plays a key role for population and human development. The higher the educational attainment, the lower the fertility rate and the higher social inclusion. The progressive SSP&#8239;1 and SSP&#8239;5 futures with high educational attainment have therefore substantially lower population projections than the SSP&#8239;3 world in which educational attainment remains low. SSP&#8239;4 is characterized by an unequal distribution of educational attainment between rich and poor households and regions.
        h3 International Trade
        LayoutColumns.center.default(center)
          div.ssp-comparison(slot="right")
            VisSspComparison(:step=1)
          p.sans(slot="left") The amount of international trade is an indicator for globalization. SSP&#8239;5 is the most globalized world, while regional rivalry in SSP&#8239;3 is posing a barrier to globalization. The other futures have intermediate levels of globalization (SSP&#8239;2), a balance between globalized institutions and an emphasis on local communities (SSP&#8239;1), or fragmented societies with a globalized elite and disconnected local work forces (SSP&#8239;4).
        h3 Technology development
        LayoutColumns.center.default(center)
          div.ssp-comparison(slot="right")
            VisSspComparison(:step=2)
          p.sans(slot="left") Technological development drives economic productivity. It also plays a key role for mitigating and adapting to climate change. SSP&#8239;5 has highest economic growth due to rapid technological change and human development, globalizing markets, and an emphasis on production and consumption. In contrast, regional isolation dampens technological progress in SSP&#8239;3. Intermediate developments occur due to different levels of technological progress across regions (SSP&#8239;2) and societal groups (SSP&#8239;4), or an emphasis on a broad concept of wellbeing  that goes beyond a narrow focus on economic gains (SSP&#8239;1).
    LayoutRecap
      li
        | Socioeconomic scenarios provide a consistent set of assumptions about societal, technical, cultural and economic developments over the 21
        sup st
        |  century.
      li They typically centre around a general narrative about the world’s future augmented by projections of factors like population, economic activity, and urbanisation.
      li Socioeconomic scenarios in climate change research are increasingly based on the Shared Socioeconomic Pathways (SSPs) which represent five different futures with widely varying challenges to mitigation and adaptation.

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
  img {
    margin: $spacing / 2;

    // background: $color-white;
    // padding: $spacing / 2;
    // margin: $spacing 0 $spacing / 2;
    // filter: invert(1) contrast(0.6) brightness(2.0) sepia(2) hue-rotate(205deg) saturate(1.7) brightness(0.8) contrast(2.2);

    &:first-of-type {
      margin-top: 0;
    }
  }
  ul {
    font-family: $font-serif;
    list-style: url(~/assets/img/li-black.svg);
    line-height: 1.4em;
    li {
      padding-top: $spacing / 4;
      hyphens: none;
    }
  }

  .detail {
    margin: $spacing * 2 0 #{-$spacing};

    @include media-query($device-medium) {
      margin: $spacing * 2 0 $spacing;
    }

    padding: $spacing 0;
    background: $color-black;
    @include flex-column;

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
          margin: #{-$spacing * 0.75} 0 0 0;
          align-self: center;

          @include media-query($device-narrow) {
            margin: #{-$spacing / 4} 0 #{-$spacing / 2};
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
