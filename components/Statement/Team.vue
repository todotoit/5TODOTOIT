<template>
  <section class="team">
    <div class="top">
      <h1 v-if="!substatement" class="title">{{ copy }}</h1>
      <h1 v-else class="title">
        <span>{{ substatement.name }}</span>
        <br />
        {{ substatement.jobs }}
      </h1>
      <div class="cta-link">
        SWITCH MODE
        <span :class="{ 'is-active': isGrid }" @click.prevent="toggleView(true)">GRID</span> /
        <span :class="{ 'is-active': !isGrid}" @click.prevent="toggleView(false)">LIST</span>
      </div>
    </div>
    <div v-if="substatement" class="background-anim">
      <img :src="substatement.file" alt />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      defaultsubstatement:
        'Different is better. Our team shares rich layers of expertise, diverse backgrounds and a common passion for a job well done.'
    }
  },
  computed: {
    actions() {
      return this.$store.getters['grid/actions']('substatements')
    },
    substatement() {
      return this.$store.getters['grid/substatement']
    },
    isGrid() {
      return this.$store.getters['grid/isVisible']
    },
    copy() {
      return this.substatement
        ? this.substatement.copy
        : this.defaultsubstatement
    },
    currentVideo() {
      return this.substatement ? this.substatement.file : null
    }
  },
  methods: {
    toggleView(data) {
      if (data === null) return
      this.$store.commit('grid/setVisibility', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  position: relative;
  background-color: $col-black;
  .top {
    .title span {
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
