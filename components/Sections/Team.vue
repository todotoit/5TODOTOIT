<template>
  <section class="team">
    <div class="top">
      <transition name="fade" mode="out-in">
        <h1 v-if="isListVisible || !currentPerson" :key="teamCopy" class="title">{{ teamCopy }}</h1>
        <h1 v-else :key="currentPerson.name" class="title">
          <span>{{ currentPerson.name }}</span>
          <br />
          <span>{{ currentPerson.jobs }}</span>
        </h1>
      </transition>
    </div>
    <div class="controls">
      <transition name="fade" mode="out-in">
        <div v-if="!currentPerson" :key="'buttons'" class="cta-link">
          SWITCH MODE
          <p :class="{ 'is-active': isGridVisible }" @click.prevent="toggleView(true)">GRID</p>
          <p>/</p>
          <p :class="{ 'is-active': isListVisible }" @click.prevent="toggleView(false)">LIST</p>
        </div>
        <div v-else :key="'button'" class="cta-link" @click.prevent="close">
          <p class="is-active">CLOSE</p>
        </div>
      </transition>
    </div>
    <div v-show="isListVisible" class="list">
      <People v-for="(action, id) in actions" :id="id" :key="id" :action="action" />
    </div>
    <div v-if="currentPerson" class="background-anim">
      <transition name="fade" mode="out-in">
        <img :key="currentPerson.name" :src="currentPerson.file" />
      </transition>
    </div>
  </section>
</template>

<script>
import People from '~/components/Grid/List/People'

export default {
  name: 'Team',
  components: {
    People
  },
  data() {
    return {
      teamCopy:
        'Different is better. Our team shares rich layers of expertise, diverse backgrounds and a common passion for a job well done.'
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
  .list {
    width: 100%;
    height: 55%;
    display: flex;
    flex-flow: row wrap;
    align-content: baseline;
    z-index: 4;
    @media screen and (max-width: $mqTablet) {
      overflow-y: scroll;
      flex-flow: column nowrap;
    }
    @media screen and (max-width: $mqMobile) {
      height: 65%;
    }
  }
  .top {
    .title span:first-child {
      color: var(--col-secondary);
    }
    .is-active {
      color: var(--col-secondary);
    }
  }
  .controls {
    .cta-link {
      p {
        &.is-active {
          color: var(--col-secondary);
        }
      }
    }
  }
  .background-anim {
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
    align-items: center;
    z-index: 1;
    img {
      filter: brightness(80%);
      @media screen and (max-width: $mqMobile) {
        filter: brightness(70%);
      }
      width: 540px;
      height: 540px;
      object-fit: cover;
      @media screen and (max-width: $mqMobile) {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
