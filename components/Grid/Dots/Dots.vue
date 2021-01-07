<template>
  <div ref="dots" class="dots">
    <div v-show="isGridVisible" v-move-dots class="dots-container" :class="{ hint: hint }">
      <Dot v-for="dot in dots" ref="dot" :key="dot.id" :action="dot.action" :index="dot.index" />
    </div>
  </div>
</template>

<script>
import Dot from '~/components/Grid/Dots/Dot'
import { debounce } from '~/utils/'

const breakpoints = {
  lg: 60,
  md: 60,
  sm: 50,
  xs: 50
}

export default {
  name: 'Dots',
  components: {
    Dot
  },
  data() {
    return {
      dots: [],
      hint: false
    }
  },
  computed: {
    isGridVisible() {
      return this.$store.getters['grid/gridIsVisible']
    },
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    },
    actions() {
      return this.$store.getters['grid/actions'](this.currentGrid)
    }
  },
  watch: {
    currentGrid() {
      this.dots.map((d) => {
        d.action = null
      })
      setTimeout(this.initGrid, 500)
    }
  },
  mounted() {
    this.gridContainer = this.$refs.dots
    window.addEventListener('resize', debounce(this.initGrid, 1000))
    this.hintTimeout = setTimeout(() => {
      this.hint = true
    }, 2000)
  },
  methods: {
    initGrid() {
      this.modulo = this.updateModulo()
      this.bounds = this.gridContainer.getBoundingClientRect()

      this.dots = []

      this.cols = Math.floor(this.bounds.width / this.modulo)
      this.rows = Math.floor(this.bounds.height / this.modulo)

      document.documentElement.style.setProperty('--cols', this.cols)
      document.documentElement.style.setProperty('--rows', this.rows)
      document.documentElement.style.setProperty('--dotSize', this.modulo / 2.5 + 'px')

      for (let i = 0; i < this.cols * this.rows; i++) {
        this.dots.push({
          id: i,
          action: null
        })
      }
      this.actions.forEach((action) => {
        let dot = 0
        let current = 0
        while (dot % this.cols === this.cols - 1 || dot % this.cols === 0 || current < 2000 || this.dots[dot].action) {
          dot = Math.floor(Math.random() * this.dots.length)
          current++
        }
        this.dots[dot].action = action
        this.current = 0
      })
      this.dots
        .filter((d) => {
          return d.action
        })
        .map((d, i) => {
          d.index = i
          return d
        })
      if (this.$refs.dot)
        this.$refs.dot.forEach((d) => {
          d.$el.style.transform = ''
        })
    },
    updateModulo() {
      for (const point in breakpoints) {
        if (point === this.$mq) return breakpoints[point]
      }
      return this.modulo
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
  --cols: 0;
  --rows: 0;
  --dotSize: 20px;
}
.dots {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65%;
  padding: 0 $padding/2;
  padding-bottom: $padding/2;
  pointer-events: none;
  @media screen and (max-width: $mqMobile) {
    height: 65%;
    padding: 0 $padding/4;
    padding-bottom: $padding/4;
  }
  @media screen and (max-width: $mqSmallMobile) {
    padding: 0 $padding/6;
    padding-bottom: $padding/6;
  }
  .dots-container {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(var(--cols), 0.5fr);
    grid-template-rows: repeat(var(--rows), 0.5fr);
    grid-gap: $padding;
    align-items: center;
    pointer-events: none;
    /deep/ .dot {
      animation: pop 1.2s $bezier;
      width: var(--dotSize);
      height: var(--dotSize);
      justify-self: center;
    }
    &.hint {
      /deep/ .clickable {
        animation: pop 1.2s $bezier, hint 1.2s $bezier 2s;
      }
    }
  }
}

@keyframes pop {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes hint {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
