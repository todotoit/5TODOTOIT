<template>
  <div class="statement">
    <Intersect :threshold="threshold" @enter="intersect('substatements')">
      <Substatement />
    </Intersect>
    <Grid ref="grid" :actions="actions" />
    <Intersect :threshold="threshold" @enter="intersect('team')">
      <Team />
    </Intersect>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'
import Substatement from '~/components/Statement/Substatement'
import Team from '~/components/Statement/Team'
import Grid from '~/components/Grid/Grid'
export default {
  components: {
    Intersect,
    Substatement,
    Grid,
    Team
  },
  data() {
    return {
      threshold: [0.2, 0.2]
    }
  },
  computed: {
    currentGrid() {
      return this.$store.getters['grid/currentGrid']
    },
    actions() {
      return this.$store.getters['grid/actions'](this.currentGrid)
    }
  },
  methods: {
    intersect(page) {
      if (this.currentGrid === page) return
      this.$store.commit('grid/setGrid', page)
      this.$refs.grid.initGrid(this.$mq)
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
