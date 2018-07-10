<template>
  <section class="wrapper">
    <h2>Climate</h2>

    <p>The scenarios discussed above lead to particular concentrations of green house gases (GHG) in the atmosphere. Climate models then simulate the atmosphere and translate these GHG concentrations to meteorological quantities such as temperature or precipitation. Temperature and precipitation are the two most important quantities in climate impact research. It turns out that many more systems than just the atmosphere decisively influence the climate. Therefore more and more subsystems, e.g. oceans, vegetation or sea ice, had to be added to climate models. Because of that these models are also known as "Earth System Models".</p>

    <span>Change in average near surface temperature (2006-2010 to 2095-2099)</span>
    <LayoutColumns>
      <VisMap
        slot="left"
        scenario="rcp26"/>
      <VisMap
        slot="right"
        scenario="rcp60"/>
    </LayoutColumns>

    <p>The above plot shows the change in average near surface temperature from 2006- 2010 to 2095-2099 for two different GHG scenarios: RCP 2.6 and RCP 6.0. As you can see: the overall temperature is going to raise, the intensity varies between regions and the temperature changes in the RCP 6.0 scenario are far more severe.</p>

    <LayoutRecap>
      <li>Climate models are complex systems describing the physical world including its atmosphere.</li>
      <li>Climate models generate projections on future temperature and precipitation based on GHG concentrations.</li>
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
}
</style>
