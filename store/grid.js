import { substatements, team } from '~/assets/data.js'

export const state = () => ({
  substatement: null,
  activeDot: null,
  currentGrid: null,
  isVisible: true,
  actions: {
    substatements,
    team
  }
})

export const getters = {
  currentGrid: (state) => {
    return state.currentGrid
  },
  isVisible: (state) => {
    return state.isVisible
  },
  activeDot: (state) => {
    return state.activeDot
  },
  substatement: (state) => {
    return state.substatement
  },
  actions: (state) => (key) => {
    return state.actions[key]
  }
}

export const mutations = {
  setGrid(state, data) {
    if (state.currentGrid === data) return
    state.currentGrid = data
  },
  setStatement(state, data) {
    state.substatement = data
  },
  setDot(state, data) {
    state.activeDot = data
  },
  setVisibility(state, data) {
    console.log(data)
    state.isVisible = data
  }
}
