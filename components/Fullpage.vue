<template>
  <div class="fullpage sections">
    <slot></slot>
  </div>
</template>

<script>
import { One } from '@ebondioli/one-scroll'
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
    this.one = new One(this.$el)
    this.one.addEventListener('*', this.scroll)
  },
  destroyed() {
    // this.$el.removeEventListener('wheel', this.scroll)
  },
  methods: {
    scroll(e) {
      const dir = e.one.direction
      // console.log(e.one.id, 'inertial:', e.one.inertial, e.one.target, this.hasScrollableInPath(e.one.target, dir))
      // allows scrolling inside the section without triggering global navigation
      if (this.hasScrollableInPath(e.one.target, dir)) {
        // console.log('scrollable', e.one.target)
        return false
      }
      e.stopPropagation()
      e.preventDefault()
      // prevent default browser scrolling
      if (!e.one.inertial) this.move(dir)
      return false
    },
    move(direction) {
      const next = clamp(this.current + direction, 0, this.sections.length - 1)

      if (this.lock !== null) return
      // console.log(`move from: ${this.current}, to: ${next}`)
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
        const isScrollable =
          (scrollOffset > 10 && dir > 0) || // end of scroll area, going down
          (scrollOffset <= scrollHeight - 10 && dir < 0) // begin of scroll area, going up

        if (isScrollable) return true
        else if (target.parentElement !== this.$el) return this.hasScrollableInPath(target.parentElement, dir)
      } else if (target.parentElement !== this.$el) {
        // target is not scrollable, check parent or bail if root $el
        return this.hasScrollableInPath(target.parentElement, dir)
      } else {
        return false // target is not scrollable
      }
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
  height: 100%;
}
</style>
