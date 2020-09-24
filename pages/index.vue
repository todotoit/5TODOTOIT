<template>
  <div class="container">
    <img svg-inline class="logo" src="@/assets/icons/TODO_LOGO.svg" />
    <Home class="section" />
    <Substatment class="section" />
    <About class="section" />
  </div>
</template>

<script>
import Home from '~/components/Home'
import Substatment from '~/components/Substatment'
import About from '~/components/About'

export default {
  components: {
    Home,
    Substatment,
    About
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .logo {
    position: fixed;
    top: $padding;
    left: $padding;
    z-index: 100;
    path {
      fill: $col-white;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
