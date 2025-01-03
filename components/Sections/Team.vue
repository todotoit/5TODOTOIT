<template>
  <section class="team">
    <Hint />
    <div class="top">
      <transition name="fade" mode="out-in">
        <h1 v-if="isListVisible || !currentPerson" :key="teamCopy" v-animate-in="{ delay: 0.1 }" class="title">
          {{ teamCopy }}
        </h1>
        <h1 v-else :key="currentPerson.name" v-animate-in class="title">
          <span>{{ currentPerson.name }}</span>
          <br />
          <span>{{ currentPerson.jobs }}</span>
        </h1>
      </transition>
      <div class="controls">
        <transition name="fade" mode="out-in">
          <div v-if="!currentPerson" key="buttons" v-animate-in="{ delay: 0.15 }" class="cta-link switch">
            <template v-if="$mq === 'lg'">
              SWITCH MODE
              <a :class="{ 'btn-active': isGridVisible }" @click="toggleView(true)">GRID</a>
              <p>/</p>
              <a :class="{ 'btn-active': isListVisible }" @click="toggleView(false)">LIST</a>
            </template>
            <template v-else>
              <div key="buttons" v-animate-in="{ delay: 0.15 }" class="cta-link">
                <p>CURIOUS? CLICK ON THE <span>RED DOTS</span></p>
              </div>
            </template>
          </div>
          <div v-else key="button" class="cta-link btn-active" @click="close">
            <p>CLOSE</p>
          </div>
        </transition>
      </div>
    </div>
    <transition name="fade" :duration="{ enter: 500, leave: 200 }">
      <div v-if="isListVisible" v-scrollable class="fp-noscroll list-wrapper">
        <div class="list">
          <People v-for="(action, id) in actions" :id="id" :key="id" :action="action" />
        </div>
      </div>
    </transition>
    <div v-if="currentPerson" class="bg-anim">
      <transition name="fade" mode="out-in">
        <video
          :key="currentPerson.name"
          loop
          autoplay
          muted
          playsinline
          class="video"
          :src="currentPerson.file"
        ></video>
      </transition>
    </div>
  </section>
</template>

<script>
import Hint from '~/components/Hint'
import People from '~/components/Grid/List/People'

export default {
  name: 'Team',
  components: { Hint, People },
  data() {
    return {
      teamCopy: 'Different is better. Our team shares rich layers of expertise, diverse backgrounds and a common passion for a job well done.'
    }
  },
  computed: {
    actions() {
      return this.$store.getters['grid/actions']('team')
    },
    isGridVisible() {
      return this.$store.getters['grid/gridIsVisible']
    },
    isListVisible() {
      return this.$store.getters['grid/listIsVisible']
    },
    currentPerson() {
      return this.$store.getters['grid/currentPerson']
    },
    currentVideo() {
      return this.currentPerson ? this.currentPerson.file : null
    }
  },
  methods: {
    toggleView(data) {
      if (data === null) return
      this.$store.commit('grid/setCurrentAction', null)
      this.$store.commit('grid/setCurrentPerson', null)
      this.$store.commit('grid/setGridVisibility', data)
      this.$store.commit('grid/setListVisibility', !data)
    },
    close() {
      this.$store.commit('grid/reset')
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $col-black;
  justify-content: space-between;
  .list-wrapper {
    height: 65%;
    z-index: 4;
    position: relative;
    @media screen and (max-width: $mqMobile) {
      height: 65%;
    }
    @media screen and (max-width: $mqTablet) {
      overflow: scroll;
    }
  }
  .list {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    align-content: baseline;
    @media screen and (max-width: $mqTablet) {
      flex-flow: column nowrap;
    }
  }
  .top {
    .title span:first-child {
      color: var(--col-secondary);
    }
  }
  .controls {
    // .switch {
    //   @media screen and (max-width: $mqTablet) {
    //     display: none;
    //   }
    // }
  }
  .bg-anim {
    video {
      filter: brightness(80%);
      width: 540px;
      height: 540px;
      margin-top: 80px;
      object-fit: cover;
      @media screen and (max-width: $mqMobile) {
        margin-top: 0;
        filter: brightness(70%);
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
