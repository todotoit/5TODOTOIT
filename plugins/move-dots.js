import Vue from 'vue'

Vue.directive('move-dots', {
  inserted(el) {
    let x, y
    const strength = 750
    const mouseMoveHandler = (e) => {
      x = e.clientX
      y = e.clientY
    }
    const resetMouseForce = () => {
      x = -strength
      y = -strength
    }
    const animate = () => {
      const dots = el.querySelectorAll('.dot:not(.clickable)')
      dots.forEach((dot) => {
        const bcr = dot.getBoundingClientRect()
        const cx = bcr.left + bcr.width / 2
        const cy = bcr.top + bcr.height / 2
        let ex = 0
        let ey = 0
        // start repulsion calculation
        const dx = cx - x
        const dy = cy - y
        const angle = Math.atan2(dy, dx)
        const dist = Math.sqrt(dx * dx + dy * dy)
        ex += (Math.cos(angle) * strength) / dist
        ey += (Math.sin(angle) * strength) / dist
        // end repulsion calculation
        if (dist > 300) ex = ey = 0
        dot.style.transform = `scale(0.5) translate(${ex}px, ${ey}px)`
      })
      window.requestAnimationFrame(animate)
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseout', resetMouseForce)
    animate()
  }
})
