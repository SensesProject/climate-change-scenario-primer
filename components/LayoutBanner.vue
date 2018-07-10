<template>
  <div class="LayoutBanner">
    <span>Beta Version</span>
    <a :href="`mailto:thomet@fh-potsdam.de?subject=Primer Feedback&body=${template}`"><span>→ Provide Feedback!</span></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      template: `Thanks for your interest in the Climate Change Scenarios Primer and for sharing Feedback with us. You can give us your feedback in any form you like - but you can use this outline for any comments and suggestions:

# Usefulness
- Please rate the overall usefulness of the Primer!
 (0: not useful at all, 10: extremely useful)
- What would make the primer more useful for you?

# Content
- Which parts of the Primer do you like most and least?
- Is anything missing or unclear?

# Context
- In which way and in which context will you be using the primer?
- Do you use the primer to educate others and in which way?

# Format
- Is the length of the primer good? Should it be shorter or longer?
- Which parts could be shorter or longer?`.replace(/\n/g, '%0D%0A')
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutBanner {
  bottom: 0px;
  font-weight: bold;
  position: fixed;
  z-index: 9999;
  width: 100vw;
  color: $color-white;
  background: $color-red;
  @include flex-row;
  justify-content: space-between;
  padding: $spacing-unit / 4 $spacing-unit;

  a {
    color: $color-white;
    font-weight: normal;
  }
}
</style>
