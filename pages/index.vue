<template>
  <div class="main-container">
    <Cookie />
    <div class="logo">
      <img svg-inline class="todo" src="@/assets/icons/TODO_LOGO.svg" />
    </div>
    <Preloader :videos="videoAssets" />
    <Dots />
    <client-only>
      <full-page :options="options">
        <Home class="section" />
        <Substatement class="section" />
        <!-- <Team class="section" /> -->
        <!-- commit -->
        <About class="section" />
      </full-page>
    </client-only>
  </div>
</template>

<script>
import Home from '~/components/Sections/Home'
import Substatement from '~/components/Sections/Substatement'
import Team from '~/components/Sections/Team'
import About from '~/components/Sections/About'
import Dots from '~/components/Grid/Dots/Dots'
import Preloader from '~/components/Preloader'
import { random } from '~/utils/'

const palette = [
  ['#6123F3', '#FF4A00'],
  ['#09DA9C', '#FF4A00']
]

export default {
  name: 'Index',
  components: {
    Home,
    Substatement,
    Team,
    Dots,
    About,
    Preloader
  },
  data() {
    return {
      hint: false,
      options: {
        licenseKey: '3427928C-E0174480-B0DC05AF-C88703F7',
        verticalCentered: false,
        scrollingSpeed: 800,
        // normalScrollElements: '.fp-noscroll',
        afterLoad: (origin, destination) => {
          const { index: destinationIndex } = destination
          console.log('Current Section: ' + destinationIndex)
          if (destinationIndex === this.$store.getters['sections/currentIndex']) return
          this.$store.commit('sections/setCurrent', destinationIndex)
          this.$store.commit('grid/setCurrentGrid', this.current.grid)
        },
        onLeave: (origin, destination) => {
          const { index: destinationIndex } = destination
          if (this.hint) this.hideHint()
          if (destinationIndex <= 0 || destinationIndex >= 3) {
            this.$store.commit('grid/setCurrentGrid', null)
          }
        }
      }
    }
  },
  computed: {
    current() {
      return this.$store.getters['sections/current']
    },
    videoAssets() {
      return this.$store.getters['grid/videoAssets'].map((v) => {
        const ratio = this.$mq === 'sm' || this.$mq === 'xs' ? 'vertical' : 'horizontal'
        return v.file.videos[ratio]
      })
    }
  },
  mounted() {
    this.updatePalette()
    // window.addEventListener(
    //   'resize',
    //   debounce(() => this.$refs.fullpage.reposition(), 200)
    // )
  },
  methods: {
    // handleDone({ current }) {
    //   if (current === this.$store.getters['sections/currentIndex']) return
    //   this.$store.commit('sections/setCurrent', current)
    //   this.$store.commit('grid/setCurrentGrid', this.current.grid)
    // },
    // handleStart(nav) {
    //   if (this.hint) this.hideHint()
    //   if (nav.to <= 0 || nav.to >= 3) this.$store.commit('grid/setCurrentGrid', null)
    // },
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
