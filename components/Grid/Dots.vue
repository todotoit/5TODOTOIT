<template>
  <div ref="dots" class="dots">
    <transition-group name="scale" tag="div" class="dots-container" :class="{ disable: dotIsActive }">
      <Dot v-for="dot in dots" :id="dot.id" :key="dot.id" :action="dot.action" />
    </transition-group>
  </div>
</template>

<script>
import Dot from '~/components/Grid/Dot'

const breakpoints = {
  lg: 90,
  md: 70,
  sm: 60,
  xs: 50
}

export default {
  name: 'Dots',
  components: {
    Dot
  },
  data() {
    return {
      dots: []
    }
  },
  computed: {
    actions() {
      return this.$store.getters['grid/actions'](this.currentGrid)
    },
    dotIsActive() {
      return this.$store.getters['grid/activeDot'] !== null
    },
    isGrid() {
      return this.$store.getters['grid/isVisible']
    },
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    }
  },
  watch: {
    currentGrid() {
      this.init()
    }
  },
  mounted() {
    this.gridContainer = this.$refs.dots
    window.addEventListener('resize', this.debounceResizeCanvas)
  },
  methods: {
    init() {
      this.initGrid()
    },
    initGrid() {
      this.device = this.$mq || 'md'
      this.modulo = this.updateModulo()
      this.bounds = this.gridContainer.getBoundingClientRect()

      // Clear dots array
      this.dots = []

      // if (!this.currentGrid) return

      this.cols = Math.floor(this.bounds.width / this.modulo)
      this.rows = Math.floor(this.bounds.height / this.modulo)

      document.documentElement.style.setProperty('--cols', this.cols)
      document.documentElement.style.setProperty('--rows', this.rows)
      document.documentElement.style.setProperty('--dotSize', this.modulo / 2 + 'px')

      for (let i = 0; i < this.cols * this.rows; i++) {
        this.dots.push({
          id: i,
          action: null
        })
      }
      this.actions.forEach((action) => {
        let dot = 0
        let current = 0
        while (
          dot % this.cols === this.cols - 1 ||
          dot % this.cols === 0 ||
          current < 2000 ||
          this.dots[dot].action
        ) {
          dot = Math.floor(Math.random() * this.dots.length)
          current++
        }
        this.dots[dot].action = action
        this.current = 0
      })
    },
    updateModulo() {
      for (const point in breakpoints) {
        if (point === this.device) {
          return breakpoints[point]
        }
        return this.modulo
      }
    },
    debounceResizeCanvas() {
      if (this.resizeDebounce) clearTimeout(this.resizeDebounce)
      this.resizeDebounce = setTimeout(() => {
        this.init()
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
.dots {
  z-index: 1000;
  position: sticky;
  top: calc(50% - (500px) - #{$padding});
  left: 0;
  width: 100%;
  height: 500px;
  .dots-container {
    height: 100%;
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
