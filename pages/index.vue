<template>
  <section class="wrapper index">
    <h1>Climate Change<br>Scenarios</h1>
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
    color: #FFFFFF;
    margin-top: -$spacing-unit * 2;
    margin-bottom: $spacing-unit * 2;
    line-height: 1.1;

    font-size: 2rem;

    @include media-query($device-narrow) {
      font-size: 3rem;
    }

    @include media-query($device-medium) {
      font-size: 4rem;
    }

    @include media-query($device-wide) {
      font-size: 6rem;
    }
  }

  .intro {
    width: 100%;
    @include flex-column;

    p {
      font-size: 1.3rem;
      max-width: 700px;
      align-self: flex-end;

      @include media-query($device-narrow) {

      }

      @include media-query($device-medium) {
        max-width: 640px;
        font-size: 1.3rem;
      }

      @include media-query($device-wide) {
        max-width: 700px;
        font-size: 1.4rem;
      }
    }
  }
}

</style>
