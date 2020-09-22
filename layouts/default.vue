<template>
  <div>
    <img svg-inline class="logo" src="@/assets/icons/TODO_LOGO.svg" />
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: fixed;
  top: $padding;
  left: $padding;
  z-index: 100;
  path {
    fill: $col-white;
  }
}
</style>
