<template>
  <div class="container">
    <img svg-inline class="logo" src="@/assets/icons/TODO_LOGO.svg" @click="backToTheTop" />
    <full-page ref="fullpage" :options="options">
      <Home class="section" />
      <About class="section" />
    </full-page>
  </div>
</template>

<script>
import Home from '~/components/Home'
import About from '~/components/About'
export default {
  components: {
    Home,
    About
  },
  data() {
    return {
      // Vue-FullPage Options
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        anchors: ['home', 'substatment', 'team', 'about'],
        scrollingSpeed: 600
      }
    }
  },
  mounted() {
    this.fullpageApi = this.$refs.fullpage.api
  },
  methods: {
    backToTheTop() {
      this.fullpageApi.moveTo('home', 0)
    }
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
