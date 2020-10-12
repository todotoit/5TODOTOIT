import Vue from 'vue'
import { normalizeWheel } from '~/plugins/vendor/normalize-wheel'

Vue.directive('fullpage-scroll', {
  inserted(el, binding) {
    const options = binding.value
    let timeout
    let lastspin = 0
    let touchStart = 0
    let offsetMobile = 0
    let isScrolling = false

    const hasScrollableParent = (target) => {
      // if element is not scrollable check parent
      if (target.scrollTop <= 0 && target.scrollHeight - target.clientHeight <= 10) {
        if (target.parentElement === el) return false
        return hasScrollableParent(target.parentElement)
      }
      return target.parentElement
    }

    const handleScroll = (event, handler) => {
      if (!hasScrollableParent(event.target)) return handler(event)
    }

    const handleWheel = (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (isScrolling) return
      const wheel = normalizeWheel(event)
      const spinY = Math.abs(wheel.spinY)
      if (spinY <= 0.025) lastspin = 0
      if (timeout || Math.abs(lastspin) >= spinY) return

      timeout = setTimeout(() => {
        lastspin = 0
        clearTimeout(timeout)
        timeout = null
        isScrolling = false
      }, options.delay)

      lastspin = wheel.spinY
      if (wheel.spinY > 0.05) options.callback(1)
      if (wheel.spinY < -0.05) options.callback(-1)
    }

    const handleTouch = (event) => {
      event.preventDefault()
      event.stopPropagation()
      offsetMobile = touchStart - event.touches[0].pageY

      if (timeout || Math.abs(lastspin) >= Math.abs(offsetMobile)) return

      timeout = setTimeout(() => {
        lastspin = 0
        clearTimeout(timeout)
        timeout = null
      }, options.delay)

      lastspin = offsetMobile
      if (offsetMobile > 8) return options.callback(1)
      if (offsetMobile < -8) return options.callback(-1)
    }

    const wheel = (event) => {
      handleScroll(event, handleWheel)
    }

    const touch = (event) => {
      handleScroll(event, handleTouch)
    }

    el.addEventListener('mousewheel', wheel)
    el.addEventListener('touchstart', (e) => {
      touchStart = e.touches[0].pageY
    })
    el.addEventListener('touchmove', touch)
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      if(e.key === 'ArrowUp') return options.callback(-1)
      if(e.key === 'ArrowDown') return options.callback(1)
    })
  }
})
