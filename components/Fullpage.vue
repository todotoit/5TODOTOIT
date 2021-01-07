<template>
  <div class="fullpage sections">
    <slot></slot>
  </div>
</template>

<script>
import { clamp } from '~/utils'
const SCROLL_DELAY = 1200

export default {
  name: 'Fullpage',
  data() {
    return {
      current: 0,
      sections: [],
      lock: null
    }
  },
  mounted() {
    const children = this.$children
    this.sections = children.map((c) => c.$el)
    this.$el.addEventListener('wheel', this.scroll)
    this.$el.addEventListener('touchstart', (e) => {
      this.touchStart = e.touches[0].clientY
    })
    this.$el.addEventListener('touchmove', this.handleTouch, {
      passive: false,
      cancelable: true
    })
  },
  destroyed() {
    this.$el.removeEventListener('wheel', this.scroll)
  },
  methods: {
    scroll(e) {
      const dir = Math.sign(e.deltaY)
      // allows scrolling inside the section without triggering global navigation
      if (this.hasScrollableInPath(e.target, dir)) return false
      this.move(dir)
      // prevent default browser scrolling
      e.preventDefault()
      return false
    },
    handleTouch(e) {
      // checks if minimum offset threshold for scrolling has been reached
      const offsetMobile = this.touchStart - e.touches[0].clientY
      e.deltaY = e.wheelDelta = Math.sign(offsetMobile) * 2
      if (Math.abs(offsetMobile) > 8) return this.scroll(e)
    },
    move(direction) {
      const next = clamp(this.current + direction, 0, this.sections.length - 1)
      // console.log(`move from: ${this.current}, to: ${this.current}`, this.lock ? 'LOCKED' : '')

      if (this.lock !== null) return
      // scroll to current section
      this.scrollTo(next)
      this.current = next

      // lock scrolling to prevent double scrolling
      this.lock = setTimeout(() => {
        this.lock = null
      }, SCROLL_DELAY)
    },
    hasScrollableInPath(target, dir) {
      if (target.scrollHeight > target.clientHeight) {
        // target is scrollable
        const scrollHeight = target.scrollHeight - target.clientHeight
        const scrollOffset = Math.abs(target.scrollTop - scrollHeight)
        return (
          (scrollOffset > 10 && dir > 0) || // end of scroll area, going down
          (scrollOffset <= scrollHeight - 10 && dir < 0) // begin of scroll area, going up
        )
      } else if (target.parentElement !== this.$el) {
        // target is not scrollable, check parent or bail if root $el
        return this.hasScrollableInPath(target.parentElement, dir)
      } else return false // target is not scrollable
    },
    scrollTo(idx) {
      this.$scrollTo(this.sections[idx], 700, {
        easing: 'ease',
        container: this.$el,
        cancelable: false,
        onStart: () => {
          // console.log('start')
          this.$emit('start', { from: this.current, to: idx })
        },
        onDone: () => {
          // console.log('done')
          this.$emit('done', { current: idx })
        }
      })
    },
    reposition() {
      this.scrollTo(this.current)
    }
  }
}
</script>

<style lang="scss" scoped>
.fullpage {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
}
</style>
