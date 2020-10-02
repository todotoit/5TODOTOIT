<template>
  <section class="team">
    <div class="top">
      <h1 v-if="isListVisible || !currentPerson" class="title">{{ teamCopy }}</h1>
      <h1 v-else class="title">
        <span>{{ currentPerson.name }}</span>
        <br />
        <span>{{ currentPerson.jobs }}</span>
      </h1>
    </div>
    <div class="controls">
      <div class="cta-link">
        SWITCH MODE
        <span :class="{ 'is-active': isGridVisible }" @click.prevent="toggleView(true)">GRID</span>
        <span> / </span>
        <span :class="{ 'is-active': isListVisible }" @click.prevent="toggleView(false)">LIST</span>
      </div>
    </div>
    <div v-show="isListVisible" class="list">
      <People v-for="(action, id) in actions" :id="id" :key="id" :action="action" />
    </div>
    <div v-if="currentPerson" class="background-anim">
      <img :src="currentPerson.file" />
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
      this.$store.commit('grid/setCurrentDot', null)
      this.$store.commit('grid/setCurrentPerson', null)
      this.$store.commit('grid/setGridVisibility', data)
      this.$store.commit('grid/setListVisibility', !data)
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
    height: 50%;
    height: 55%;
    @media screen and (max-width: $mqMobile) {
      height: 65%;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    z-index: 4;
    /deep/ .people {
      width: 20%;
      padding-right: $padding;
      display: inline-block;
    }
    @media screen and (max-width: $mqTablet) {
      max-width: 100%;
      overflow-y: scroll;
      flex-direction: column;
      flex-wrap: nowrap;
      /deep/ .people {
        width: 100%;
        padding-bottom: $padding;
      }
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
    position: absolute;
    top: 40%;
    @media screen and (max-width: $mqMobile) {
      top: 30%;
    }
    display: inline-block;
    .cta-link {
      span.is-active {
        color: var(--col-secondary);
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
