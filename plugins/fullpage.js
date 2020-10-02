import Vue from 'vue'

const currentScroll = 0
const scrollOffset = 100

let touchStart = 0
let offsetMobile = 0

Vue.directive('fullpage-scroll', {
  inserted(el, binding) {
    const options = binding.value
    console.log(options)
    let timeout
    const handleScroll = function (event) {
      event.preventDefault()
      event.stopPropagation()
      console.log(event.deltaY)
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (event.deltaY > 10) options.callback(1)
        if (event.deltaY < -10) options.callback(-1)
      }, options.delay)
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
