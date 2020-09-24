<template>
  <section class="team">
    <div v-if="!substatement" class="top">
      <h1 class="title">{{ copy }}</h1>
    </div>
    <div v-else class="top">
      <h1 class="title">{{ substatement.name }}</h1>
      <h1 class="title">{{ substatement.jobs }}</h1>
    </div>
    <div v-if="substatement" class="background-anim">
      <img :src="substatement.file" alt />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      defaultsubstatement:
        'Different is better. Our team shares rich layers of expertise, diverse backgrounds and a common passion for a job well done.'
    }
  },
  computed: {
    actions() {
      return this.$store.getters['grid/actions']('substatements')
    },
    substatement() {
      return this.$store.getters['grid/substatement']
    },
    copy() {
      return this.substatement
        ? this.substatement.copy
        : this.defaultsubstatement
    },
    currentVideo() {
      return this.substatement ? this.substatement.file : null
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  position: relative;
  background-color: $col-black;
  .top {
    .title:first-child:not(:only-child) {
      color: $col-red;
    }
  }
  .background-anim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: -1;
    img {
      width: 100% ;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
