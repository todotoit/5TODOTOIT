<template>
  <section class="team">
    <div class="top">
      <h1 v-if="!person" class="title">{{ teamCopy }}</h1>
      <h1 v-else class="title">
        <span>{{ person.name }}</span>
        <br />
        <span>{{ person.jobs }}</span>
      </h1>
      <div class="cta-link">
        SWITCH MODE
        <span :class="{ 'is-active': isGridVisible }" @click.prevent="toggleView(true)">GRID</span>
        /
        <span
          :class="{ 'is-active': !isGridVisible }"
          @click.prevent="toggleView(false)"
        >LIST</span>
      </div>
    </div>
    <div v-if="!isGridVisible" class="list" :class="{ disable: activePeople }">
      <People v-for="(action, id) in actions" :id="id" :key="id" :action="action" />
    </div>
    <div v-if="person" class="background-anim">
      <img :src="person.file" />
    </div>
  </section>
</template>

<script>
import People from '~/components/Grid/People'

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
    activePeople() {
      return !!this.$store.getters['grid/currentPerson']
    },
    isGridVisible() {
      return this.$store.getters['grid/isVisible']
    },
    person() {
      return this.$store.getters['grid/currentPerson']
    },
    currentVideo() {
      return this.person ? this.person.file : null
    }
  },
  methods: {
    toggleView(data) {
      if (data === null) return
      this.$store.commit('grid/setCurrentDot', null)
      this.$store.commit('grid/setCurrentPerson', null)
      this.$store.commit('grid/setVisibility', data)
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
  .list {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    z-index: 4;
    padding: $padding 0;
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
    &.disable /deep/ .people:not(.active) {
      opacity: 0.3;
    }
  }
  .top {
    .title span:first-child {
      color: $col-red;
    }
    .is-active {
      color: $col-red;
    }
    .cta-link {
      padding-top: $padding * 2;
      z-index: 1000;
      &:hover {
        cursor: pointer;
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
      filter: brightness(90%);
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
