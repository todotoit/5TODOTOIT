import Vue from 'vue'

const observeOptions = {
  root: null,
  threshold: 0.5
}

const hasIntersectionObserver = () => {
  return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window
}

Vue.directive('animate-in', {
  inserted(el) {
    // Check if IntersectionObserver are avaiable
    if (hasIntersectionObserver()) {
      el.classList.add('observer')
      const observer = new IntersectionObserver((e) => {
        const intersection = e[0]
        if (intersection.isIntersecting) {
          el.classList.remove('leave')
          setTimeout(() => {
            el.classList.add('enter')
          })
        } else {
          el.classList.add('leave')
          el.classList.remove('enter')
        }
      }, observeOptions)
      observer.observe(el)
    }
  }
})
