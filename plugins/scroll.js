import Vue from 'vue'
import { normalizeWheel } from './vendor/normalize-wheel'
import { average } from '~/utils'

const defaultOptions = {
  container: document.body,
  offset: 0,
  cancelable: false,
  threshold: 0.5,
  delay: 1500,
  mobile: true
}

Vue.directive('scroll', {
  inserted(el, options) {
    options = { ...defaultOptions, ...options.value }

    const goToSection = options.callback

    let deltas = []
    let lastScrollTime = new Date().getTime()
    const scrolling = false
    let touchStart = 0
    let offsetMobile = 0
    let delayTimeout = null

    const hasScrollableParent = (target) => {
      console.log(target.scrollTop, target.scrollHeight)
      // if element is not scrollable check parent
      if (target.scrollTop <= 0 && target.scrollHeight - target.clientHeight <= 10) {
        console.log('Is inside')
        if (target.parentElement === el) return false
        return hasScrollableParent(target.parentElement)
      }
      console.log('Is Outside')
      return target.parentElement
    }

    const handleScroll = (event, handler) => {
      if (!hasScrollableParent(event.target)) return handler(event)
    }

    function handleTouch(event) {
      console.log('Scroll')
      offsetMobile = touchStart - event.touches[0].clientY
      event.deltaY = event.wheelDelta = Math.sign(offsetMobile) * -2
      if (Math.abs(offsetMobile) > 8) return handleWheel(event)
    }

    function handleWheel(e) {
      const wheel = normalizeWheel(e)
      const delta = Math.abs(wheel.spinY)
      e.stopPropagation()
      if (e.cancelable) e.preventDefault()
      if (delayTimeout) return false
      const currentScrollTime = new Date().getTime()
      if (currentScrollTime - lastScrollTime > 200) {
        deltas = []
        offsetMobile = 0
      }
      lastScrollTime = currentScrollTime
      if (delta < 0.01) return false
      if (deltas.length > 149) deltas.shift()
      deltas.push(delta)
      if (scrolling || !isAccelerating()) return false
      delayTimeout = setTimeout(() => {
        delayTimeout = null
      }, options.delay)
      const direction = Math.sign(wheel.spinY)
      move(direction)
      return false
    }

    // Check for acceleration
    function isAccelerating() {
      if (deltas.length <= 1) return true
      const averageEnd = average(deltas, 10)
      const averageMiddle = average(deltas, 70)
      const delta = averageEnd - averageMiddle
      return delta >= options.threshold
    }

    const wheel = (event) => {
      handleScroll(event, handleWheel)
    }
    const touch = (event) => {
      handleScroll(event, handleTouch)
    }

    function move(direction) {
      if (direction === -1) goToSection(-1)
      if (direction === 1) goToSection(1)
    }

    // Listen for events
    el.addEventListener('wheel', wheel, { passive: false })
    el.addEventListener('touchstart', (e) => (touchStart = e.touches[0].clientY), {
      passive: false
    })
    el.addEventListener('touchmove', touch, { passive: false, cancelable: true })

    // Keyboards events
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        goToSection(-1)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        goToSection(1)
      }
    })
  }
})
