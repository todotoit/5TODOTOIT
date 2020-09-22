<template>
  <div class="container">
    <full-page ref="fullpage" :options="options">
      <About class="section" />
      <div class="section">Section 1</div>
      <div class="section">Section 2</div>
    </full-page>
  </div>
</template>

<script>
import About from '~/components/About'
export default {
  components: {
    About,
  },
  data() {
    return {
      // Vue-FullPage Options
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        scrollingSpeed: 600,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
