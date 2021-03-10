<template>
  <div v-if="!done" class="preloader">
    <video ref="video" :src="videoSrc" muted autoplay loop></video>
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
      if (this.videos && this.videos.length > this.current)
        return this.videos[this.current]
      return ''
    }
  },
  mounted() {
    this.boundCheckReady = this.checkVideoIsReady.bind(this)
    this.interval = setInterval(this.boundCheckReady, 50)
    if (this.canPlay(this.$refs.video)) this.next()
  },
  methods: {
    canPlay(video) {
      return video.readyState >= 2 && this.getPlayableLength(video) >= 3
    },
    getPlayableLength(video) {
      const buffered = video.buffered
      if (!buffered.length) return 0
      else return buffered.end(0) - buffered.start(0)
    },
    checkVideoIsReady() {
      const playable = this.getPlayableLength(this.$refs.video)
      if (this.canPlay(this.$refs.video)) {
        console.log(
          `${this.current} canplay - ready state: ${
            this.$refs.video.readyState
          } ready time: ${playable.toFixed(1)}`
        )
        this.next()
      }
    },
    next() {
      console.log('next')
      this.current++
      if (this.current >= this.videos.length) {
        clearInterval(this.interval)
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
