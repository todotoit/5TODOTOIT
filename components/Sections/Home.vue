<template>
  <section class="home">
    <Hint />
    <h1 v-animate-in="{ delay: 0.3 }" class="big-title">
      Hello, we are TODO. <br />
      We blend the digital world into real life, designing spaces and experiences.
    </h1>
    <h1 v-animate-in="{ delay: 0.9 }" class="big-title">From Italy, with love, since 2007.</h1>
  </section>
</template>

<script>
import Hint from '~/components/Hint'
export default {
  name: 'Home',
  components: { Hint }
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
}
</style>
