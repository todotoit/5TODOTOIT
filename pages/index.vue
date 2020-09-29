<template>
  <div class="main-container">
    <div class="logo">
      <img svg-inline class="todo" src="@/assets/icons/TODO_LOGO.svg" />
    </div>
    <Intersect :threshold="threshold" @enter="intersect">
      <Home />
    </Intersect>
    <Statement />
    <Intersect :threshold="threshold" @enter="intersect">
      <About />
    </Intersect>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'
import Home from '~/components/Home'
import Statement from '~/components/Statement/Statement'
import About from '~/components/About'

export default {
  name: 'Index',
  components: {
    Home,
    Intersect,
    Statement,
    About
  },
  data() {
    return {
      threshold: [0.4]
    }
  },
  methods: {
    intersect() {
      this.$store.commit('grid/setCurrentGrid', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: $navbar;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 $padding;
  @media screen and (max-width: $mqMobile) {
    height: 40px;
    padding: 0 $padding/2;
  }
  .todo {
    @media screen and (max-width: $mqMobile) {
      width: 70px;
    }
    @media screen and (max-width: $mqSmallMobile) {
      transform: translateX(-4px);
      width: 60px;
    }
    path {
      fill: $col-white;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
