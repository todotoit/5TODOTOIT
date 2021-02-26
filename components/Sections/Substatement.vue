<template>
  <vue100vh>
    <section class="substatment">
      <div class="top">
        <transition name="fade" mode="out-in">
          <h1 :key="title" v-animate-in="{ delay: 0.1 }" class="title">{{ title }}</h1>
        </transition>
        <div class="controls">
          <transition name="fade" mode="out-in">
            <div v-if="!currentCopy" :key="'buttons'" v-animate-in="{ delay: 0.15 }" class="cta-link">
              <p>CURIOUS? CLICK ON THE <span class="btn-active">RED DOTS</span></p>
            </div>
            <div v-else :key="'button'" class="cta-link btn-active" @click.prevent="close"><p>CLOSE</p></div>
          </transition>
        </div>
      </div>
      <div v-show="currentCopy" class="bg-anim">
        <video
          v-for="(v, i) in videoAssets"
          v-show="v.horizontal === video"
          :key="i"
          loop
          autoplay
          muted
          playsinline
          class="video"
          :src="v.horizontal"
        ></video>
      </div>
    </section>
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'

export default {
  name: 'Substatment',
  components: {
    vue100vh
  },
  data() {
    return {
      defaultCopy: 'Design and technology are not our product, but our creative tools. That’s why what we can do for you is more than the projects in our portfolio.'
    }
  },
  computed: {
    videoAssets() {
      return this.$store.getters['grid/videoAssets']
    },
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
  },
  methods: {
    close() {
      this.$store.commit('grid/reset')
    }
  }
}
</script>

<style lang="scss" scoped>
.substatment {
  position: relative;
  background-color: var(--col-primary);
  .bg-anim {
    .video {
      filter: brightness(45%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
