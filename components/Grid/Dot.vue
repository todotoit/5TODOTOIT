<template>
  <div class="dot-wrapper">
    <div
      v-if="type === 'dot'"
      class="dot"
      :class="{ clickable: action, active: id === activeDot }"
      @click="runAction"
    ></div>
    <div
      v-if="type === 'people' && action"
      class="people"
      :class="{ active: id === activeDot }"
      @click="runAction"
    >
      <p class="cta-title">
        <span>{{ action.name }}</span>
        <br />
        <span class="cta-small-title"> {{ action.jobs }} </span>
      </p>
    </div>
  </div>
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
    },
    type: {
      type: String,
      default: 'dot'
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
.dot-wrapper {
  .people {
    transition: all $animationDuration $bezier;
    p {
      padding-right: $padding/2;
      & span:first-child {
        color: $col-red;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  .dot {
    transition: all $animationDuration $bezier;
    width: 100%;
    height: 100%;
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
}
</style>
