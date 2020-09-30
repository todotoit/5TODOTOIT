<template>
  <div class="main-container">
    <div class="logo">
      <img svg-inline class="todo" src="@/assets/icons/TODO_LOGO.svg" />
    </div>
    <transition name="fade">
      <Dots v-show="isGridVisible" />
    </transition>
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
      threshold: [0.2]
    }
  },
  computed: {
    isGridVisible() {
      return this.$store.getters['grid/isVisible']
    },
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    }
  },
  methods: {
    intersect(page) {
      if (this.currentGrid === page) return
      this.$store.commit('grid/setCurrentGrid', page)
    }
  }
}
</script>

<style lang="scss">
:root {
  --col-primary: #6123F3;
  --col-secondary: #FF4A00;   
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
