<template>
  <div
    class="dot"
    :class="{ clickable: action, active: id === activeDot }"
    @click="runAction"
  ></div>
</template>

<script>
export default {
  name: 'Dot',
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
    },
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    }
  },
  methods: {
    runAction() {
      if (!this.action) return
      const mutation = this.currentGrid === 'team' ? 'setPerson' : 'setStatement'
      if (this.id !== this.activeDot) {
        this.$store.commit('grid/setDot', this.id)
        this.$store.commit(`grid/${mutation}`, this.action)
      } else {
        this.$store.commit('grid/setDot', null)
        this.$store.commit(`grid/${mutation}`, null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dot {
  transition: all $animationDuration $bezier;
  background-color: $col-white;
  border-radius: 50px;
  &.clickable:not(.active) {
    background-color: $col-red;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  &.active {
    background-color: $col-red;
    transform-origin: center center;
    transform: scale(2);
  }
}
</style>
