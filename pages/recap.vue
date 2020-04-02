<template lang="pug">
  section.wrapper
    h2.h1 Recap
    p Climate change scenarios are a powerful tool for understanding climate change, charting response strategies, and supporting climate policy making. They are not about predicting the future, but come in the form of projections of what can happen or pathways of how to reach certain goals.

    VisCycleCircle.center

    p Socioeconomics and climate change are inseparably intertwined. Socioeconomics define for example our land and energy needs, which are closely linked to emissions. Increased emissions lead to higher GHG concentrations, which leads to climate change and its impacts. Climate impacts close the cycle as they will also influence our socioeconomics.

    p Socioeconomic scenarios in climate change research are increasingly based on the
      strong  Shared Socioeconomic Pathways
      |  which represent five different futures with widely varying challenges to mitigation and adaptation.

    p On the model side
      strong  integrated assessment models
      |  get us from those socioeconomic assumptions to energy, land use and emissions.
      strong  Climate models
      |  take the next step towards future climate. And
      strong  climate impact models
      |  show us how that effects nature and society.
    div.share.extended.no-margin.hide-print
      div.center.default
        h3.h2.white Share
        div.button-group
          a.button(href="mailto:?subject=Climate Change Scenario Primer&body=→ https://climatescenarios.org/primer ")
            span.mono
              span.arrow →
              |  Mail
          a.button(href="https://twitter.com/home?status=→ https://climatescenarios.org/primer", rel="noopener noreferrer")
            span.mono
              span.arrow →
              |  Twitter
          |
          a.button(href="https://www.facebook.com/sharer/sharer.php?u=https://climatescenarios.org/primer", rel="noopener noreferrer")
            span.mono
              span.arrow →
              |  Facebook
          |
    div.contact.extended.no-margin.hide-print
      div.center.default
        h3.h2.violet Get in Touch 👋
        client-only
          a.button(:href="`mailto:${address}?subject=Climate Change Scenario Primer`")
            span.mono
              span.arrow →
              |  Send Mail
  </section>
</template>

<script>
export default {
  data () {
    return {
      address: 'cornelia.auer@pik-potsdam.de'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.wrapper {
  margin-bottom: $spacing;
  .h2 {
    margin-bottom: $spacing * 0.5;
  }

  .share {
    margin-top: $spacing;
  }

  .share, .contact {
    padding: $spacing 0;
    @include flex-column;
    background: $color-accent;

    @include ie {
      padding: $spacing / 2;
    }

    .button-group {
      .button {
        color: $color-white;
      }
    }

    .button {
      white-space: nowrap;
      padding: 0 $spacing / 2 0 0;
      .arrow {
        transition: transform $transition-time;
        display: inline-block;
      }
      &:hover {
        .arrow {
          transform: translateX($spacing / 8);
        }
      }
    }
  }

  .contact {
    background: $color-white;
    @include media-query($device-medium) {
      border: 1px solid $color-accent;
    }
    .button {
      background: $color-white;
      .hand {
        transition: transform .2s;
        display: inline-block;
      }
      &:hover {
        .hand {
          transform: rotate(7deg);
        }
      }
    }
  }
}

</style>
