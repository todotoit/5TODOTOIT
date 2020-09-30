import { substatements, team } from '~/assets/data.js'

export const state = () => ({
  currentGrid: null,
  currentDot: null,
  currentCopy: null,
  currentPerson: null,

  gridIsVisible: false,
  listIsVisible: false,

  actions: {
    substatements,
    team
  }
})

export const getters = {
  substatement: (state) => {
    return state.substatement
  },
  currentGrid: (state) => {
    return state.currentGrid
  },
  currentDot: (state) => {
    return state.currentDot
  },
  currentCopy: (state) => {
    return state.currentCopy
  },
  currentPerson: (state) => {
    return state.currentPerson
  },
  gridIsVisible: (state) => {
    return state.gridIsVisible
  },
  listIsVisible: (state) => {
    return state.listIsVisible
  },
  actions: (state) => (key) => {
    return state.actions[key] || []
  }
}

export const mutations = {
  setCurrentGrid(state, data) {
    if (state.currentGrid === data) return
    state.currentDot = null
    state.currentCopy = null
    state.currentPerson = null
    if (data) state.gridIsVisible = true
    else state.gridIsVisible = false
    state.currentGrid = data
  },
  setCurrentCopy(state, data) {
    state.currentCopy = data
  },
  setCurrentDot(state, data) {
    state.currentDot = data
  },
  setCurrentPerson(state, data) {
    state.currentPerson = data
  },
  setGridVisibility(state, data) {
    state.gridIsVisible = data
  },
  setListVisibility(state, data){
    state.listIsVisible = data
  }
}
