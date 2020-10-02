export const state = () => ({
  current: 0,
  sections: [
    { id: 0, target: '#home', name: 'Home' },
    { id: 1, target: '#substatement', name: 'Substatement' },
    { id: 2, target: '#team,', name: 'Team' },
    { id: 3, target: '#about', name: 'About' }
  ]
})

export const getters = {
  sections: (state) => {
    return state.sections
  },
  current: (state) => {
    return state.current
  }
}

export const mutations = {
  updateCurrent(state, data) {
    if (
      (state.current === 0 && data < 0) ||
      (state.current === state.sections.length - 1 && data > 0)
    )
      return
    state.current += data
  }
}
