<template>
  <div class="people" :class="{ active: id === activeDot }" @click="runAction">
    <h1 class="cta-link">
      <span> {{ action.name }}</span>
      <br />
      <span class="cta-small-title"> {{ action.jobs }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'People',
  props: {
    action: {
      type: Object,
      default: null
    },
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    activeDot() {
      return this.$store.getters['grid/activeDot']
    }
  },
  methods: {
    runAction() {
      if (!this.action) return
      if (this.id !== this.activeDot) {
        this.$store.commit('grid/setDot', this.id)
        this.$store.commit('grid/setStatement', this.action)
      } else {
        this.$store.commit('grid/setDot', null)
        this.$store.commit('grid/setStatement', null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.people {
  align-self: baseline;
  transition: all $animationDuration $bezier;
  .cta-link {
    span:first-child {
      color: $col-red;
    }
    span:last-child {
      width: 70%;
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
