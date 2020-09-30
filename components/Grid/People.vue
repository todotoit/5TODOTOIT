<template>
  <div
    v-if="action"
    class="people"
    :class="[currentDot === id ? 'active' : Number.isInteger(currentDot) ? 'disable' : '', '']"
    @click="runAction"
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
    },
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentDot() {
      return this.$store.getters['grid/currentDot']
    }
  },
  methods: {
    runAction() {
      if (!this.action) return
      if (this.id !== this.currentDot) {
        this.$store.commit('grid/setCurrentDot', this.id)
        this.$store.commit('grid/setCurrentPerson', this.action)
      } else {
        this.$store.commit('grid/setCurrentDot', null)
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
  &.disable {
    opacity: 0.3;
  }
}
</style>
