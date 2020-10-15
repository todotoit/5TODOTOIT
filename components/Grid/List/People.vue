<template>
  <div
    v-if="action"
    class="people"
    :class="isActive"
    @click.stop="runAction"
  >
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
    }
  },
  computed: {
    currentAction() {
      return this.$store.getters['grid/currentAction']
    },
    isActive() {
      if (this.currentAction) {
        if(this.action.id === this.currentAction) return 'active'
        else return 'disabled'
      }
      return ''
    }
  },
  methods: {
    runAction() {
      if (!this.action) return
      if (this.action.id !== this.currentAction) {
        this.$store.commit('grid/setCurrentAction', this.action.id)
        this.$store.commit('grid/setCurrentPerson', this.action)
      } else {
        this.$store.commit('grid/setCurrentAction', null)
        this.$store.commit('grid/setCurrentPerson', null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.people {
  align-self: baseline;
  transition: all $animationDuration $bezier;
  display: block;
  width: 20%;
  padding-right: $padding;
  padding-bottom: $padding * 4;
  &:hover {
    cursor: pointer;
  }
  &.disabled {
    opacity: 0.3;
  }
  @media screen and (max-width: $mqTablet) {
    width: 100%;
    padding-bottom: $padding;
  }
  .cta-link {
    span:first-child {
      color: var(--col-secondary);
    }
    span:last-child {
      width: 70%;
    }
  }
}
</style>
