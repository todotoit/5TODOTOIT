import { substatements, team } from '~/assets/data.js'

export const state = () => ({
  currentGrid: null,
  currentCopy: null,
  currentPerson: null,
  currentAction: null,

  gridIsVisible: false,
  listIsVisible: false,

  actions: {
    substatements,
    team
  }
})

export const getters = {
  videoAssets: (state) => {
    return state.actions.substatements
  },
  teamAssets: (state) => {
    return state.actions.team.map((t) => t.file)
  },
  substatement: (state) => {
    return state.substatement
  },
  currentGrid: (state) => {
    return state.currentGrid
  },
  currentAction: (state) => {
    return state.currentAction
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
    state.currentAction = null
    state.currentCopy = null
    state.currentPerson = null
    if (data && state.listIsVisible) {
      state.gridIsVisible = true
      state.listIsVisible = false
    } else if (data) {
      state.gridIsVisible = true
    } else {
      state.gridIsVisible = false
    }
    state.currentGrid = data
  },
  setCurrentCopy(state, data) {
    state.currentCopy = data
  },
  setCurrentAction(state, data) {
    state.currentAction = data
  },
  setCurrentPerson(state, data) {
    state.currentPerson = data
  },
  setGridVisibility(state, data) {
    state.gridIsVisible = data
  },
  setListVisibility(state, data) {
    state.listIsVisible = data
  },
  reset(state) {
    state.currentAction = null
    state.currentCopy = null
    state.currentPerson = null
  }
}
