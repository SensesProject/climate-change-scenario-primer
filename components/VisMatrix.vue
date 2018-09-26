<template lang="pug">
  div.VisMatrix.extended
    div.row(
      v-for="rcp in rcps"
      :key="rcp.value"
      :style="rcp.style")
      div.rcp RCP&#8239;{{ rcp.value }}
      div.combination(
        v-for="(combo, i) in rcp.combinations"
        :key="`${rcp.value}-${i}`")
        div.circle(
          v-if="combo !== null"
          :class="{infeasable: combo === false}")
        div.ssp(v-if="rcp.value === '2.6'")
          div.label SSP&#8239;{{ ssps[i].label }}
          div.range(:style="ssps[i].style")
    div.key
      div.baseline.key-item
        div.icon
        div.label Baseline
      |
      div.feasable.key-item
        div.icon
        div.label Stabilsation Scenario Combination
      |
      div.infeasable.key-item
        div.icon
        div.label Infeasible Scenario Combination
</template>

<script>
export default {
  data () {
    return {
      rcps: [
        {label: '8.5', combinations: [null, null, null, null, null]},
        {label: '6.0', combinations: [null, true, true, null, true]},
        {label: '4.5', combinations: [true, true, true, true, true]},
        {label: '3.4', combinations: [true, true, true, true, true]},
        {label: '2.6', combinations: [true, true, false, true, false]}
      ].map((d, i, rcps) => {
        return {
          value: d.label,
          combinations: d.combinations,
          style: {
            height: `${(+d.label - (rcps[i + 1] ? +rcps[i + 1].label : 2.1)) * 2}rem`
          }
        }
      }),
      ssps: [
        {label: '1', range: [5.2, 5.8]},
        {label: '2', range: [6.5, 7.3]},
        {label: '3', range: [6.7, 8.0]},
        {label: '4', range: [5.8, 5.9]},
        {label: '5', range: [8.2, 8.9]}
      ].map((d) => {
        return {
          label: d.label,
          style: {
            transform: `translateY(${(-d.range[1] + 2.6) * 2}rem)`,
            height: `${(d.range[1] - d.range[0]) * 2}rem`
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.VisMatrix {
  font-size: 0.9rem;
  margin: 1.1rem 0 0;
  .row {
    border-top: 1px solid $color-gray;
    display: flex;
    .rcp {
      color: $color-dark-gray;
      transform: translateY(-100%);
      align-self: flex-start;
    }
    .combination {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      .circle {
        transform: translateY(-50%);
        width: 0.9rem;
        // max-width: 0.9rem;
        // min-width: 0.9rem;
        height: 0.9rem;
        // max-height: 0.9rem;
        // min-height: 0.9rem;
        border-radius: 50%;
        background: $color-white;
        border: 2px solid $color-green;

        &.infeasable {
          border-color: $color-red;
        }
      }
      .ssp {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

        .label {
          transform: translateY(0.75rem);
        }

        .range {
          position: absolute;
          width: 0.9rem;
          background: $color-accent;
          position: absolute;
          top: 0;
        }
      }
    }
  }

  .key {
    margin: #{$spacing / 2 + 1.1rem} 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .key-item + .key-item {
      margin-left: $spacing / 2;
    }

    .key-item {
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 0.9rem;
        height: 0.9rem;
        margin-right: $spacing / 4;
      }

      &.baseline {
        .icon {
          background: $color-accent;
        }
      }
      &.feasable {
        .icon {
          border-radius: 50%;
          border: 2px solid $color-green;
        }
      }
      &.infeasable {
        .icon {
          border-radius: 50%;
          border: 2px solid $color-red;
        }
      }
    }
  }
}
</style>
