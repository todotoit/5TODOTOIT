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
    if (this.canPlay(this.$refs.video)) this.next()

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const event = isSafari ? 'loadedmetadata' : 'canplaythrough'

    this.$refs.video.addEventListener(event, () => {
      this.next()
      this.$nextTick(() => {
        this.$refs.video.load()
      })
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
        }, 100)
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
