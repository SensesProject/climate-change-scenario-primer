<template lang="pug">
  div.LayoutFurtherReading
    div.further-reading
      h3 Further reading
      ul
        slot
</template>

<script>
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutFurtherReading {
  h3 {
    margin-bottom: $spacing / 4;
  }

  ul {
    list-style: url(~/assets/img/li-black.svg);

    @include print {
      /* list-style-position: inside; */
      margin-left: $spacing / 2;
    }

    li + li {
      margin-top: $spacing / 4;
    }
  }

  margin-bottom: $spacing / 2;
}
</style>
