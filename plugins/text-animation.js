import Vue from 'vue'
import gsap from 'gsap'

const animationOptionsDefaults = {
  duration: 0.8,
  delay: 0.5
}

Vue.directive('animate-in', {
  inserted(el, binding) {
    const observeOptions = {
      root: null,
      threshold: 1
    }
    const options = binding.value || {}
    const animationOptions = {
      ...animationOptionsDefaults,
      ...options,
      delay: animationOptionsDefaults.delay + (options.delay || 0)
    }
    // Check if IntersectionObserver are avaiable
    const hasIntersectionObserver = () => {
      return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype
    }
    if (hasIntersectionObserver()) {
      const observer = new IntersectionObserver((e) => {
        const intersection = e[0]
        gsap.set(el, { opacity: 0, y: '50px' })
        if (!intersection || intersection.intersectionRatio <= 0.1) {
          return false
        } else {
          // Trigger the transition
          gsap.to(el, { y: '0%', opacity: 1, ...animationOptions })
        }
      }, observeOptions)
      observer.observe(el)
    } else {
      // Intersection Observer isn't supported
      return false
    }
  }
})
