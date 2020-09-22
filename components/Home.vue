<template>
  <div class="home">
    <div class="middle">
      <h1 class="big-title">
        Hello, we are TODO. <br> We design experiences that blend the digital world into real life, so
        people can live valuable, transformative moments.
      </h1>
    </div>
  </div>
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
