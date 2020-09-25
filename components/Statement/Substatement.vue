<template>
  <section class="substatment">
    <div class="top">
      <h1 class="title">
        {{ copy }}
      </h1>
    </div>
    <div
      v-show="!substatement"
      :key="1"
      class="bg-neutral"
      :class="{ 'is-disable': substatement }"
    ></div>
    <div v-show="substatement" :key="2" class="bg-anim" :class="{ 'is-enable': substatement }">
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
      defaultSubstatement:
        'Experiences are more than the sum of their parts. And what we do is more than the projects in our portfolio. Always be exploring.'
    }
  },
  computed: {
    substatement() {
      return this.$store.getters['grid/substatement']
    },
    copy() {
      return this.substatement ? this.substatement.copy : this.defaultSubstatement
    },
    currentVideo() {
      return this.substatement ? this.substatement.file : null
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
  .bg-neutral {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $col-violet;
  }
  .bg-anim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .video {
      filter: brightness(50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
