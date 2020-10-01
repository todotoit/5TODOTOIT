<template>
  <div class="main-container">
    <div class="logo">
      <img svg-inline class="todo" src="@/assets/icons/TODO_LOGO.svg" />
    </div>
    <Dots v-show="isGridVisible" />
    <div class="sections">
      <Intersect :threshold="threshold" @enter="intersect(null)">
        <Home />
      </Intersect>
      <Intersect :threshold="threshold" @enter="intersect('substatements')">
        <Substatement />
      </Intersect>
      <Intersect :threshold="threshold" @enter="intersect('team')">
        <Team />
      </Intersect>
      <Intersect :threshold="threshold" @enter="intersect(null)">
        <About />
      </Intersect>
    </div>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'
import Home from '~/components/Sections/Home'
import Substatement from '~/components/Sections/Substatement'
import Team from '~/components/Sections/Team'
import About from '~/components/Sections/About'
import Dots from '~/components/Grid/Dots/Dots'
import { random } from '~/utils/'

const palette = [
  ['#6123F3', '#FF4A00'],
  ['#02E19F', '#FF4A00']
]

export default {
  name: 'Index',
  components: {
    Intersect,
    Home,
    Substatement,
    Team,
    Dots,
    About
  },
  data() {
    return {
      threshold: [0.8]
    }
  },
  computed: {
    isGridVisible() {
      return this.$store.getters['grid/gridIsVisible']
    },
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    }
  },
  mounted() {
    this.updatePalette()
  },
  methods: {
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
