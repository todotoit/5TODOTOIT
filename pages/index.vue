<template>
  <div class="main-container">
    <div class="logo">
      <img svg-inline class="todo" src="@/assets/icons/TODO_LOGO.svg" />
    </div>
    <div v-scroll="{ callback: goToTheSection }" class="sections">
      <Dots />
      <Home id="home" />
      <Substatement id="substatement" :hint="hint" />
      <Team id="team" />
      <About id="about" />
    </div>
  </div>
</template>

<script>
import Home from '~/components/Sections/Home'
import Substatement from '~/components/Sections/Substatement'
import Team from '~/components/Sections/Team'
import About from '~/components/Sections/About'
import Dots from '~/components/Grid/Dots/Dots'
import { random, debounce } from '~/utils/'

const palette = [
  ['#6123F3', '#FF4A00'],
  ['#02E19F', '#FF4A00']
]

export default {
  name: 'Index',
  components: {
    Home,
    Substatement,
    Team,
    Dots,
    About
  },
  data() {
    return {
      threshold: [0.8],
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
    sections() {
      return this.$store.getters['sections/sections']
    },
    current() {
      return this.$store.getters['sections/current']
    }
  },
  mounted() {
    this.updatePalette()
    this.hintTimeout = setTimeout(() => {
      this.hint = true
    }, 3000)
    window.addEventListener(
      'resize',
      debounce(() => {
        this.goToTheSection(0)
      }, 400)
    )
  },
  methods: {
    hideHint() {
      this.hint = false
      clearTimeout(this.hintTimeout)
    },
    goToTheSection(value) {
      this.hideHint()
      this.$store.commit('sections/isScrolling', true)
      this.$store.commit('sections/updateCurrent', value)
      const targetSection = this.$store.getters['sections/sections'][this.current]
      this.$scrollTo(targetSection.target, 50, {
        easing: 'ease',
        onDone: () => {
          this.$store.commit('grid/setCurrentGrid', targetSection.grid)
          this.$store.commit('sections/isScrolling', false)
        }
      })
    },
    intersect(page) {
      if (this.currentGrid === page) return
      this.$store.commit('grid/setCurrentGrid', page)
    },
    updatePalette() {
      const index = random(0, palette.length - 1)
      document.documentElement.style.setProperty('--col-primary', palette[index][0])
      document.documentElement.style.setProperty('--col-secondary', palette[index][1])
    }
  }
}
</script>

<style lang="scss">
:root {
  --col-primary: #6123f3;
  --col-secondary: #ff4a00;
}

.logo {
  height: $navbar;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 $padding;
  @media screen and (max-width: $mqMobile) {
    height: 40px;
    padding: 0 $padding/2;
  }
  .todo {
    @media screen and (max-width: $mqMobile) {
      width: 70px;
      transform: translateX(2px);
    }
    @media screen and (max-width: $mqSmallMobile) {
      transform: translateX(-4px);
      width: 60px;
    }
    path {
      fill: $col-white;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
