<template>
  <div
    v-on-clickaway="close"
    class="dot"
    :class="[{ clickable: action }, isActive]"
    @click.stop="runAction"
  ></div>
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
    },
    close() {
      const mutation = this.currentGrid === 'team' ? 'setCurrentPerson' : 'setCurrentCopy'
      this.$store.commit('grid/setCurrentAction', null)
      this.$store.commit(`grid/${mutation}`, null)
    }
  }
}
</script>

<style lang="scss" scoped>
.dot {
  pointer-events: none;
  background-color: $col-white;
  border-radius: 50px;
  transition: background-color 0.3s $bezier, transform 0.2s ease-out;
  will-change: transform;
  &.clickable {
    cursor: pointer;
    pointer-events: auto;
    background-color: var(--col-secondary);
    will-change: transform;
    &:hover {
      transform: scale(1.5);
    }
    &.active {
      transform: scale(2);
    }
  }
  &.disabled {
    opacity: 0;
  }
}
</style>
