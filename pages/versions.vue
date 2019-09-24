<template lang="pug">
  section.wrapper
    h2.h1 Version History
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.2.4") 1.2.4
    ul
      li Socioeconomic Developement: Added chart on land use changes
      li Energy Land Use and Emissions: Updated model comparison chart
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.2.3") 1.2.3
    ul
      li Fixed label in carbon price chart on mitigation page
      li Improved flow chart in IAMs in Detail section
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.2.2") 1.2.2
    ul
      li Added version history
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.2.1") 1.2.1
    ul
      li Added RCP 1.9 scenario data
      li Removed ambiguous indicator from IAM comparison chart
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.2.0") 1.2.0
    ul
      li Added support for printing
      li Added support for Internet Explorer
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.1.0") 1.1.0
    ul
      li Added references for further reading
      li Minor fixes and improvements
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.0.0") 1.0.0
    ul
      li Initial release
    h3.h2
      a(href="https://github.com/SensesProject/climate-change-scenario-primer/releases/tag/1.0.0-Beta") 1.0.0-Beta
    ul
      li Beta-Version
</template>

<script>
export default { }
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

ul {
  list-style: url(~/assets/img/li-violet.svg);
  line-height: 1.4;
  margin: $spacing / 4 0 $spacing / 2;
}
</style>
