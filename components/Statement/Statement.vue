<template>
  <div class="statement">
    <Substatement />
  </div>
</template>

<script>
import Substatement from '~/components/Statement/Substatement'
export default {
  components: {
    Substatement
  }
}
</script>

<style lang="scss" scoped>
.statement {
  padding: 0;
}
</style>
