export const state = () => ({
  sections: [
    { id: 0, target: '#home', name: 'Home' },
    { id: 1, target: '#substatement', name: 'Substatement' },
    { id: 2, target: '#team,', name: 'Team' },
    { id: 3, target: '#about', name: 'About' }
  ],
  section: { id: 0, target: '#home', name: 'Home' }
})

export const getters = {
  sections: (state) => {
    return state.sections
  },
  section: (state) => {
    return state.section
  }
}

export const mutations = {
  setSection(state, data) {
    state.page = data
  }
}
