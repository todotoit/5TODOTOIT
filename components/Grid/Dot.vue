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
.dot {
  background-color: $col-white;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  transition: all $animationDuration $bezier;
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
