<template>
  <vue100vh>
    <section class="home">
      <div class="hint" :class="{ active: hint }"></div>
      <div class="middle">
        <h1 v-animate-in="{ delay: 0.2 }" class="big-title">
          Hello, we are TODO. <br />
          We design experiences that blend the digital world into real life, so people can live valuable, transformative moments.
        </h1>
      </div>
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
  .middle {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
