<template>
  <div v-if="!done" class="preloader">
    <video
      ref="video"
      preload="none"
      :src="videoSrc"
      muted
      autoplay
      loop
    ></video>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    videos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: 0,
      done: false
    }
  },
  computed: {
    videoSrc() {
      if (this.videos && this.videos.length > this.current) return this.videos[this.current]
      return ''
    }
  },
  mounted() {
    if (this.canPlay(this.$refs.video)) this.next()
    this.$refs.video.addEventListener('canplay', () => {
      this.next()
    })
  },
  methods: {
    canPlay(video) {
      return video.readyState === 4
    },
    next() {
      this.current++
      if (this.current >= this.videos.length) {
        setTimeout(() => {
          this.done = true
        }, 0.2)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  opacity: 0;
  pointer-events: none;
}
</style>
