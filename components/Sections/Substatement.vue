<template>
  <section class="substatment" :class="{ hint: hint }">
    <div class="top">
      <transition name="fade" mode="out-in">
        <h1 :key="title" v-animate-in class="title">{{ title }}</h1>
      </transition>
    </div>
    <div v-show="!currentCopy" class="bg-neutral" :class="{ 'is-disable': currentCopy }" />
    <div class="controls">
      <transition name="fade" mode="out-in">
        <div v-if="!currentCopy" :key="'buttons'" v-animate-in="{ delay: 0.25 }" class="cta-link">CURIOUS? CLICK ON THE <span>RED DOTS</span></div>
        <div v-if="currentCopy" :key="'button'" v-animate-in="{ delay: 0.25 }" class="cta-link" @click.prevent="close"><p>CLOSE</p></div>
      </transition>
    </div>
    <div v-show="currentCopy" class="bg-anim" :class="{ 'is-enable': currentCopy }">
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
  props: {
    hint: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultCopy: 'Experiences are more than the sum of their parts. And what we do is more than the projects in our portfolio. Always be exploring.'
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
  transition: transform $animationDuration $bezier;
  &.hint {
    transform: translateY(-20px);
  }
  position: relative;
  .controls {
    .cta-link {
      span {
        color: var(--col-secondary);
      }
      p {
        color: var(--col-secondary);
      }
    }
  }
  .bg-neutral {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--col-primary);
  }
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
