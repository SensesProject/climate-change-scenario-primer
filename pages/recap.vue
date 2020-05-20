<template lang="pug">
  article.wrapper
    h2.h1 Recap
    p Climate change scenarios are a powerful tool for understanding climate change, charting response strategies, and supporting climate policy making. They are not about predicting the future, but come in the form of projections of what can happen or pathways of how to reach certain goals.

    div.cycle
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

    client-only
      SensesMeta.narrow(id="primer")
  </section>
</template>

<script>
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.index'
import SensesMeta from 'library/src/components/SensesMetaNuxt.vue'
import 'vue-js-modal/dist/styles.css'

Vue.use(VModal)
export default {
  components: {
    SensesMeta
  },
  data () {
    return {
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

  .cycle {
    display: flex;
    justify-content: center;
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
