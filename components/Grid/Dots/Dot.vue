<template>
  <div
    class="dot"
    :class="[
      { clickable: action },
      currentDot === id ? 'active' : Number.isInteger(currentDot) ? 'disable' : ''
    ]"
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
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    },
    currentDot() {
      return this.$store.getters['grid/currentDot']
    }
  },
  methods: {
    runAction() {
      if (!this.action) return
      const mutation = this.currentGrid === 'team' ? 'setCurrentPerson' : 'setCurrentCopy'
      if (this.id !== this.currentDot) {
        this.$store.commit('grid/setCurrentDot', this.id)
        this.$store.commit(`grid/${mutation}`, this.action)
      } else {
        this.$store.commit('grid/setCurrentDot', null)
        this.$store.commit(`grid/${mutation}`, null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dot {
  pointer-events: none;
  transition: all $animationDuration $bezier;
  background-color: $col-white;
  border-radius: 50px;
  &.clickable:not(.active) {
    pointer-events: all;
    background-color: var(--col-secondary);
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  &.active {
    pointer-events: all;
    background-color: var(--col-secondary);
    transform-origin: center center;
    transform: scale(2);
    cursor: pointer;
  }
  &.disable:not(.clickable) {
    opacity: 0;
  }
}
</style>
