<template>
  <div class="main-container">
    <div class="logo">
      <img svg-inline class="todo" src="@/assets/icons/TODO_LOGO.svg" />
    </div>
    <Dots />
    <Fullpage ref="fullpage" @start="handleStart" @done="handleDone">
      <Home id="home" :hint="hint" />
      <Substatement id="substatement" />
      <Team id="team" />
      <About id="about" />
    </Fullpage>
  </div>
</template>

<script>
import Home from '~/components/Sections/Home'
import Fullpage from '~/components/Fullpage'
import Substatement from '~/components/Sections/Substatement'
import Team from '~/components/Sections/Team'
import About from '~/components/Sections/About'
import Dots from '~/components/Grid/Dots/Dots'
import { random, debounce } from '~/utils/'

const palette = [
  ['#6123F3', '#FF4A00'],
  ['#09DA9C', '#FF4A00']
]

export default {
  name: 'Index',
  components: {
    Fullpage,
    Home,
    Substatement,
    Team,
    Dots,
    About
  },
  data() {
    return {
      hint: false
    }
  },
  computed: {
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
    }, 1500)
    window.addEventListener(
      'resize',
      debounce(() => this.$refs.fullpage.reposition(), 200)
    )
  },
  methods: {
    hideHint() {
      this.hint = false
      clearTimeout(this.hintTimeout)
    },
    handleDone({ current }) {
      if (current === this.$store.getters['sections/currentIndex']) return
      this.$store.commit('sections/setCurrent', current)
      this.$store.commit('grid/setCurrentGrid', this.current.grid)
    },
    handleStart(nav) {
      if (this.hint) this.hideHint()
      if (nav.to <= 0 || nav.to >= 3) this.$store.commit('grid/setCurrentGrid', null)
    },
    updatePalette() {
      const index = random(0, palette.length - 1)
      document.documentElement.style.setProperty('--col-primary', palette[index][0])
      document.documentElement.style.setProperty('--col-secondary', palette[index][1])
    }
  }
}
</script>

<style lang="scss" scoped>
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
