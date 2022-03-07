<template>
  <div class="cookie" :class="{ active: show }">
    <p class="cta-title">We use cookies to improve your browsing experience, find out how on our cookie policy (<a href="/todo-cookie-policy-it.pdf" target="_blank">IT</a>-<a href="/todo-cookie-policy-en.pdf" target="_blank">EN</a>) and privacy policy (<a href="/todo-privacy-policy-it.pdf" target="_blank">IT</a>-<a href="/todo-privacy-policy-en.pdf" target="_blank">EN</a>).</a></p>
    <img svg-inline src="~/assets/icons/cross.svg" class="cross" @click="acceptCookie" />
  </div>
</template>

<script>
export default {
  name: 'Cookie',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    if (!this.$cookies.get('todo-cookie-consent')) {
      setTimeout(() => {
        this.show = true
      }, 2000)
    }
  },
  methods: {
    acceptCookie() {
      this.$cookies.set('todo-cookie-consent', true, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  position: fixed;
  z-index: 10000;
  left: 0;
  bottom: $padding * 1.5;
  background-color: var(--col-secondary);
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 48%;
  padding: $padding;
  transform: translateX(-100%);
  transition: transform $animationDuration * 2 $bezier;
  justify-content: space-between;
  a {
    color: white;
  }
  @media screen and (max-width: $mqTablet) {
    width: 80%;
  }
  @media screen and (max-width: $mqMobile) {
    width: 100%;
    padding: $padding/2;
    p {
      width: 80%;
    }
  }
  &.active {
    transform: translateX(0);
  }
  .cross {
    width: 40px;
    @media screen and (max-width: $mqMobile) {
      width: 25px;
      margin-right: $padding;
    }
    outline: none;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
}
</style>
