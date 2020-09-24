<template>
  <div ref="grid" class="grid" :class="{ disable: dotIsActive }">
    <div v-show="isGrid" class="dots">
      <Dot v-for="dot in dots" :id="dot.id" :key="dot.id" :action="dot.action" />
    </div>
    <div v-show="!isGrid" class="list">
      <List />
    </div>
  </div>
</template>

<script>
import List from '~/components/Grid/List'
import Dot from '~/components/Grid/Dot'

const breakpoints = {
  lg: 100,
  md: 80,
  sm: 60,
  xs: 50
}
export default {
  name: 'Grid',
  components: {
    Dot,
    List
  },
  props: {
    actions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dots: [],
      availableActions: []
    }
  },
  computed: {
    dotIsActive() {
      return this.$store.getters['grid/activeDot'] !== null
    },
    isGrid() {
      return this.$store.getters['grid/isVisible']
    }
  },
  mounted() {
    this.availableActions = [...this.actions]
    this.bounds = this.$refs.grid.getBoundingClientRect()
    this.device = this.$mq
    this.gridContainer = this.$refs.grid.firstChild
    window.addEventListener('resize', this.debounceResizeCanvas)
  },
  methods: {
    initGrid(device) {
      console.log('Init Grid')
      this.device = device || 'md'
      this.modulo = null
      this.bounds = this.gridContainer.getBoundingClientRect()
      this.updateModulo()

      // Clear dots array
      this.dots = []

      this.cols = Math.floor(this.bounds.width / this.modulo)
      this.rows = Math.floor(this.bounds.height / this.modulo)

      document.documentElement.style.setProperty('--cols', this.cols)
      document.documentElement.style.setProperty('--rows', this.rows)
      document.documentElement.style.setProperty(
        '--dotSize',
        this.modulo / 2 + 'px'
      )

      for (let i = 0; i < this.cols * this.rows; i++) {
        this.dots.push({
          id: i,
          action: this.getAction(i)
        })
      }
    },
    getAction(i) {
      if (!this.availableActions.length) return
      if (i % this.cols === this.cols - 1 || i % this.cols === 0) return
      return this.availableActions.shift()
    },
    updateModulo() {
      for (const point in breakpoints) {
        if (point === this.device) {
          this.modulo = breakpoints[point]
        }
      }
    },
    getDotAction(i) {
      if (!this.availableActions.length && i > this.availableActions.length - 1)
        return
      return this.availableActions[i]
    },
    debounceResizeCanvas() {
      if (this.resizeDebounce) clearTimeout(this.resizeDebounce)
      this.resizeDebounce = setTimeout(() => {
        this.initGrid(this.$mq)
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
:root {
  --cols: 0;
  --rows: 0;
  --dotSize: 20px;
}
.grid {
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .dots {
    width: 100%;
    height: 30%;
    display: grid;
    grid-template-columns: repeat(var(--cols), 0.5fr);
    grid-template-rows: repeat(var(--rows), 0.5fr);
    grid-gap: $padding * 1.5;
    align-items: center;
    transform: all $animationDuration $bezier;
    &.disable /deep/ .dot:not(.clickable) {
      opacity: 0;
    }
    /deep/ .dot {
      width: var(--dotSize);
      height: var(--dotSize);
      justify-self: center;
    }
  }
}
</style>
