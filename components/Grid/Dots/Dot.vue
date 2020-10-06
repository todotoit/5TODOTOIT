<template>
  <div class="dot" :class="[{ clickable: action }, isActive]" @click="runAction"></div>
</template>

<script>
export default {
  name: 'Dot',
  props: {
    action: {
      type: Object,
      default: null
    }
  },
  computed: {
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    },
    currentAction() {
      return this.$store.getters['grid/currentAction']
    },
    isActive() {
      if (this.currentAction) {
        if (!this.action) return 'disabled'
        else if (this.action.id === this.currentAction) return 'active' 
      }
      return ''
    }
  },
  methods: {
    runAction() {
      if (!this.action) return
      const mutation = this.currentGrid === 'team' ? 'setCurrentPerson' : 'setCurrentCopy'
      if (this.action.id !== this.currentAction) {
        this.$store.commit('grid/setCurrentAction', this.action.id)
        this.$store.commit(`grid/${mutation}`, this.action)
      } else {
        this.$store.commit('grid/setCurrentAction', null)
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
  &.disabled:not(.clickable) {
    opacity: 0;
  }
}
</style>
