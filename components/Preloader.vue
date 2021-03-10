<template>
  <div v-if="!done" class="preloader">
    <video ref="video" :src="videos[current]" muted autoplay loop></video>
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
  mounted() {
    console.log(this.videos)

    console.log('begin preload', this.current)
    if (this.canPlay(this.$refs.video)) this.next()
    this.$refs.video.addEventListener('canplaythrough', () => {
      console.log('can play', this.current)
      this.next()
    })
  },
  methods: {
    canPlay(video) {
      return video.readyState === 4
    },
    next() {
      this.current++
      console.log('next', this.current)
      if (this.current >= this.videos.length) {
        this.done = true
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
