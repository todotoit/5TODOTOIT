import Vue from 'vue'

/**
 * if a wheel event is followed by a scroll event, it means the div
 * was scrollable in that direction, so prevent the event from bubbling up
*/

Vue.directive('scrollable', {
  inserted: (el) => {
    el.lastScrollTime = 0
    el.canScroll = false
    el.addEventListener('wheel', (e) => {
      e.stopPropagation()
      // set timeout to be cleared by scroll event
      if (!el.lastScrollTime || e.timeStamp - el.lastScrollTime > 100) {
        // reset event bubbling and begin new scroll action
        el.canScroll = true
        setEventBubblingTimeout(el, e)
      }
      el.lastScrollTime = e.timeStamp
    })

    el.addEventListener('touchstart', () => {
      // reset event bubbling and begin new scroll action
      el.canScroll = true
    })

    el.addEventListener('touchmove', (e) => {
      e.stopPropagation()
      setEventBubblingTimeout(el, e)
    })

    el.addEventListener('scroll', () => {
      // disable event bubbling for this scroll action
      el.canScroll = false
      // clear section change timeout
      clearTimeout(el.scrollTimeout)
    })
  }
})

function setEventBubblingTimeout(el, e) {
  clearTimeout(el.scrollTimeout)
  const timeout = setTimeout(() => {
    if (el.canScroll) el.parentElement.dispatchEvent(e)
  }, 50)
  el.scrollTimeout = timeout
}
