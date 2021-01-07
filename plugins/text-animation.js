import Vue from 'vue'

const observeOptions = {
  root: null,
  threshold: 0.2
}

const hasIntersectionObserver = () => {
  return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window
}

Vue.directive('animate-in', {
  inserted(el, binding) {
    const animateOptions = { ...binding.value }
    const delay = (animateOptions.delay || 0.1) * 1000
    // Check if IntersectionObserver are avaiable
    if (hasIntersectionObserver()) {
      el.classList.add('observer')
      const observer = new IntersectionObserver((e) => {
        const intersection = e[0]
        if (intersection.isIntersecting) {
          el.classList.remove('leave')
          setTimeout(() => {
            el.classList.add('enter')
          }, delay)
        } else {
          el.classList.add('leave')
          el.classList.remove('enter')
        }
      }, observeOptions)
      observer.observe(el)
    }
  }
})
