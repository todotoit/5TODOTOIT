<template>
  <section class="substatment">
    <div class="top">
      <h1 class="title">
        {{ title }}
      </h1>
    </div>
    <div
      v-show="!currentCopy"
      :key="1"
      class="bg-neutral"
      :class="{ 'is-disable': currentCopy }"
    ></div>
    <div v-show="currentCopy" :key="2" class="bg-anim" :class="{ 'is-enable': currentCopy }">
      <video
        loop
        autoplay
        muted
        playsinline
        class="video"
        :src="video"
      ></video>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Substatment',
  data() {
    return {
      defaultCopy:
        'Experiences are more than the sum of their parts. And what we do is more than the projects in our portfolio. Always be exploring.'
    }
  },
  computed: {
    currentCopy() {
      return this.$store.getters['grid/currentCopy']
    },
    title() {
      return this.currentCopy ? this.currentCopy.copy : this.defaultCopy
    },
    videoRatio() {
      return this.$mq === 'sm' || this.$mq === 'xs' ? 'vertical' : 'horizontal'
    },
    video() {
      return this.currentCopy ? this.currentCopy.file[this.videoRatio] : null
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
    background-color: var(--col-primary);
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
