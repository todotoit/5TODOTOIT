<template>
  <section class="substatment" :class="{ 'has-video': currentVideo }">
    <div class="top">
      <h1 class="title">
        {{ copy }}
      </h1>
    </div>
    <div v-show="currentVideo" class="background-video">
      <video
        loop
        autoplay
        muted
        playsinline
        class="video"
        :src="currentVideo"
      ></video>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Substatment',
  data() {
    return {
      defaultSubstatment:
        'Experiences are more than the sum of their parts. And what we do is more than the projects in our portfolio. Always be exploring.'
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
.substatment {
  position: relative;
  background-color: $col-violet;
  &.has-video {
    background-color: transparent;
  }
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
