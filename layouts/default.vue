<template>
  <div class="root">
    <LayoutHeader/>
    <nuxt class="chapter"/>
    <LayoutNextChapter/>
    <LayoutNavigation/>
  </div>
</template>

<script />

<style scoped lang="scss">
@import "~@/assets/style/global";
.root {
  width: 100vw;
  @include flex-column();

  .chapter {

  }
}
</style>
