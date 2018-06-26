<template>
  <section class="wrapper">
    <h2>Climate</h2>

    <p>Climate models take us from emissions to things like temperature and precipitation. As with IAMs they describe a complex system,  in this case the earth. Climate models are therefore sometimes also related to as Earth System Models. In contrast to weather models they focus on long term changes whereas spatial and temporal resolution is less important.</p>

    <span>Change in average near surface temperature (2006-2010 to 2095-2099)</span>
    <LayoutColumns>
      <VisMap
        slot="left"
        scenario="rcp26"/>
      <VisMap
        slot="right"
        scenario="rcp60"/>
    </LayoutColumns>

    <p>This shows the change in average near surface temperature from 2006-2010 to 2095-2099 for two different emission scenarios: RCP 2.6 and RCP 6.0. As you can see: the overall temperature is going to raise, the intensity varies between regions and the temperature changes in the RCP 6.0 scenario are far more severe.</p>
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
}
</style>
