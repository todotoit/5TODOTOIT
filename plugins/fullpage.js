import Vue from 'vue'
import { normalizeWheel } from '~/plugins/vendor/normalize-scroll'

const currentScroll = 0
const scrollOffset = 100

let touchStart = 0
let offsetMobile = 0

Vue.directive('fullpage-scroll', {
  inserted(el, binding) {
    const options = binding.value
    let timeout
    let lastspin = 0
    const handleScroll = function (event) {
      const wheel = normalizeWheel(event)
      event.preventDefault()
      event.stopPropagation()
      if(Math.abs(wheel.spinY) <= 0.025) lastspin = 0
      if (timeout || Math.abs(lastspin) >= Math.abs(wheel.spinY)) return
      lastspin = wheel.spinY
      timeout = setTimeout(() => {
        timeout = null
      }, options.delay)
      if (wheel.spinY > 0.125) options.callback(1)
      if (wheel.spinY < -0.125) options.callback(-1)
    }
    el.addEventListener('mousewheel', handleScroll)
    el.addEventListener('touchstart', (e) => {
      touchStart = e.touches[0].pageY
    })
    el.addEventListener('touchmove', (e) => {
      offsetMobile = touchStart - e.touches[0].pageY
    })
  }
})
