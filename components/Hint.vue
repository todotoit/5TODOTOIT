<template>
  <div class="hintBar" :class="{ active: !animate, inverted }"></div>
</template>

<script>
export default {
  name: 'Hint',
  props: {
    inverted: { type: Boolean, default: false }
  },
  data() {
    return {
      animate: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.animate = true
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.hintBar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--col-primary);
  height: 20px;
  z-index: 100;
  transition: height $animationDuration * 2 $bezier;
  &.active {
    height: 0px;
  }
  &.inverted {
    background-color: $col-black;
  }
  @media screen and (max-width: $mqMobile) {
     height: 15px;
  }
  @media screen and (max-width: $mqSmallMobile) {
     height: 15px;
  }
}
</style>
