export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export function average(array, take) {
  if (!take) take = array.length;
  let sum = 0;
  const lastElements = array.slice(Math.max(array.length - take, 1));
  for (let i = 0; i < lastElements.length; i++) {
    sum = sum + lastElements[i];
  }
  return sum / take;
}

export function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
