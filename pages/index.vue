<template>
  <div class="container">
    <full-page ref="fullpage" :options="options">
      <Home class="section" />
      <About class="section" />
      <div class="section">Section 1</div>
      <div class="section">Section 2</div>
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
        scrollingSpeed: 600
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
