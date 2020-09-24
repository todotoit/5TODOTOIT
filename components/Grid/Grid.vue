<template>
  <div class="grid" :class="{ disable: dotIsActive }">
    <Dot v-for="dot in dots" :id="dot.id" :key="dot.id" :action="dot.action" />
  </div>
</template>

<script>
import Dot from '~/components/Grid/Dot'
export default {
  name: 'Grid',
  components: {
    Dot
  },
  props: {
    actions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      grid: {
        cols: 14,
        rows: 7
      },
      dots: [],
      availableActions: []
    }
  },
  computed: {
    dotIsActive() {
      return this.$store.getters['grid/activeDot'] !== null
    }
  },
  mounted() {
    this.availableActions = [...this.actions]
    for (let i = 0; i < this.grid.cols * this.grid.rows; i++) {
      setTimeout(() => {
        this.dots.push({
          id: i,
          action: this.getDotAction(i)
        })
      }, i * 30)
    }
  },
  methods: {
    getDotAction() {
      if (!this.availableActions.length) return
      return this.availableActions.pop()
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  z-index: 1000;
  padding: $padding 0;
  position: absolute;
  left: 0;
  bottom: $padding;
  display: grid;
  grid-template-columns: 0.75fr repeat(12, 1fr) 0.75fr;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: $padding * 2;
  /deep/ .dot {
    justify-self: center;
  }
  /deep/ .dot:nth-child(14n) {
    justify-self: end;
  }
  /deep/ .dot:nth-child(14n + 1) {
    justify-self: start;
  }
  &.disable /deep/ .dot:not(.clickable) {
    opacity: 0.2;
  }
}
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));
  @return $randomNum;
}
</style>
