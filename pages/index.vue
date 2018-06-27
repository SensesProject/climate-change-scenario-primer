<template>
  <section class="wrapper index">
    <h1>Climate Change Scenarios</h1>
    <div class="intro">
      <p>
        We can’t predict the future. Scenarios allow us to explore possible futures based on assumptions about them.
      </p>
      <p>
        This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate and climate impacts.
      </p>
    </div>
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
  @include flex-column;
  max-width: 1280px;

  h1 {
    max-width: none;
    font-size: 120px;
    color: #FFFFFF;
    letter-spacing: 1px;
    line-height: 128px;
    margin-bottom: $spacing-unit * 2;
  }

  .intro {
    font-size: 1.4rem;
    width: 100%;
    @include flex-column;

    p {
      max-width: 700px;
      align-self: flex-end;
    }
  }
}

</style>
