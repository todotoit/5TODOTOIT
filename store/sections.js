import { clamp } from '~/utils'

export const state = () => ({
  current: 0,
  isScrolling: false,
  sections: [
    { id: 0, target: '#home', name: 'Home', grid: null },
    { id: 1, target: '#substatement', name: 'Substatement', grid: 'substatements' },
    { id: 2, target: '#team', name: 'Team', grid: 'team' },
    { id: 3, target: '#about', name: 'About', grid: null }
  ]
})

export const mutations = {
  setCurrent(state, value) {
    value = clamp(value, 0, state.sections.length)
    state.current = value
  },
  isScrolling(state, value) {
    state.isScrolling = value
  }
}

export const getters = {
  sections: (state) => {
    return state.sections
  },
  current: (state) => {
    return state.sections[state.current]
  },
  currentIndex: (state) => {
    return state.current
  },
  isScrolling: (state) => {
    return state.isScrolling
  }
}
