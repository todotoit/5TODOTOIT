<template>
  <section class="substatment">
    <Hint :inverted="true" />
    <div class="top">
      <transition name="fade" mode="out-in">
        <h1 :key="title" v-animate-in="{ delay: 0.1 }" class="title">
          {{ title }}
        </h1>
      </transition>
      <div class="controls">
        <transition name="fade" mode="out-in">
          <div v-if="!currentCopy" :key="'buttons'" v-animate-in="{ delay: 0.15 }" class="cta-link">
            <p>CURIOUS? CLICK ON THE <span>RED DOTS</span></p>
          </div>
          <div v-else :key="'button'" class="cta-link btn-active" @click.prevent="close">
            <p>CLOSE</p>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="currentCopy" class="bg-anim">
      <div v-for="(v, i) in videoAssets" :key="i" class="video" :class="{ visible: currentCopy ? v.id === currentCopy.id : false }">
        <transition name="videofade">
          <video
            v-if="currentCopy ? v.id === currentCopy.id : false"
            loop
            autoplay
            muted
            playsinline
            :poster="v.file.poster[ratio]"
            :src="v.file.videos[ratio]"
          ></video>
        </transition>
      </div>
      <div class="gradient" />
    </div>
  </section>
</template>

<script>
import Hint from '~/components/Hint'
export default {
  name: 'Substatment',
  components: { Hint },
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
    ratio() {
      return this.$mq === 'sm' || this.$mq === 'xs' ? 'vertical' : 'horizontal'
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
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &.visible {
        display: block;
      }
    }
    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%);
    }
  }
}
</style>
