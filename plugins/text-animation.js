import Vue from 'vue'

const observeOptions = {
  root: null,
  threshold: 0.5
}

Vue.directive('animate-in', {
  inserted(el, binding) {
    const options = binding.value || {}

    // Check if IntersectionObserver are avaiable
    const hasIntersectionObserver = () => {
      return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype
    }

    if (hasIntersectionObserver()) {
      const observer = new IntersectionObserver((e) => {
        const intersection = e[0]
        el.classList.add('observer')
        if (intersection.isIntersecting) {
          el.classList.add('enter')
          el.classList.remove('leave')
        } else {
          el.classList.add('leave')
          el.classList.remove('enter')
        }
      }, observeOptions)
      observer.observe(el)
    } else {
      // Intersection Observer isn't supported
      return false
    }
  }
})
