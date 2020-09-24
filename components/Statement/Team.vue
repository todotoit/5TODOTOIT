<template>
  <section class="team">
    <div class="top">
      <h1 class="title">
        {{ copy }}
      </h1>
    </div>
    <!-- <div v-show="currentGIF" class="background-anim">
      <img :src="" alt="">
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      defaultSubstatment:
        'Different is better. Our team shares rich layers of expertise, diverse backgrounds and a common passion for a job well done.'
    }
  },
  computed: {
    substatment() {
      return this.$store.getters['grid/substatement']
    },
    copy() {
      return this.substatment ? this.substatment.copy : this.defaultSubstatment
    },
    currentVideo() {
      return this.substatment ? this.substatment.file : null
    },
    actions() {
      return this.$store.getters['grid/actions']('substatements')
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  position: relative;
  background-color: $col-black;
  .background-video {
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
    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
