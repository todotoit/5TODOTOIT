<template>
  <div class="statement">
    <Intersect :threshold="threshold" @enter="intersect('substatements')">
      <Substatement />
    </Intersect>
    <Dots v-show="isGridVisible" />
    <Intersect :threshold="threshold" @enter="intersect('team')">
      <Team />
    </Intersect>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'
import Substatement from '~/components/Statement/Substatement'
import Team from '~/components/Statement/Team'
import Dots from '~/components/Grid/Dots'
export default {
  components: {
    Intersect,
    Substatement,
    Dots,
    Team
  },
  data() {
    return {
      threshold: [0.4, 0.4]
    }
  },
  computed: {
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    },
    isGridVisible() {
      return this.$store.getters['grid/isVisible']
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

<style lang="scss" scoped>
.statement {
  position: relative;
  padding: 0;
}
</style>
