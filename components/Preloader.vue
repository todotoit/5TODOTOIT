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
    this.interval = setInterval(this.boundCheckReady, 100)
    if (this.canPlay(this.$refs.video)) this.next()
  },
  methods: {
    canPlay(video) {
      return this.getLoadedPercent(video) >= 0.2
    },
    getLoadedPercent(video) {
      let percent = 0
      // FF4+, Chrome
      if (
        video &&
        video.buffered &&
        video.buffered.length > 0 &&
        video.buffered.end &&
        video.duration
      ) {
        percent = video.buffered.end(0) / video.duration
      }
      // e.g., FF3.6 and Safari 5
      else if (
        video &&
        video.bytesTotal !== undefined &&
        video.bytesTotal > 0 &&
        video.bufferedBytes !== undefined
      ) {
        percent = video.bufferedBytes / video.bytesTotal
      }
      return percent
    },
    checkVideoIsReady() {
      const playable = this.getLoadedPercent(this.$refs.video)
      console.log(playable.toFixed(5))
      if (this.canPlay(this.$refs.video)) {
        console.log(
          `${this.current} canplay - ready state: ${
            this.$refs.video.readyState
          } ready percent: ${playable.toFixed(1)}`
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
