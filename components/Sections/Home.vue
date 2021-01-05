<template>
  <section class="home">
    <div class="middle">
      <h1 v-animate-in class="big-title">
        Hello, we are TODO. <br />
        We design experiences that blend the digital world into real life, so people can live valuable, transformative moments.
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  background-color: $col-black;
  .middle {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
