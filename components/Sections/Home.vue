<template>
  <vue100vh>
    <section class="home">
      <div class="hint" :class="{ active: hint }"></div>
      <h1 v-animate-in="{ delay: 0.2 }" class="big-title">
        Hello, we are TODO. <br />
        We blend the digital world into real life, designing spaces and experiences. From Italy, with love, since 2007.
      </h1>
    </section>
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'
export default {
  name: 'Home',
  components: {
    vue100vh
  },
  props: {
    hint: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: $col-black;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .hint {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    background-color: var(--col-primary);
    z-index: 100;
    transition: height $animationDuration * 2 $bezier;
    &.active {
      height: 20px;
    }
  }
}
</style>
