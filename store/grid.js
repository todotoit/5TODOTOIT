import { substatements, people } from '~/assets/data.js'

export const state = () => ({
  substatement: null,
  activeDot: null,
  actions: {
    substatements,
    people
  }
})

export const getters = {
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
  setStatement(state, data) {
    state.substatement = data
  },
  setDot(state, data) {
    state.activeDot = data
  }
}
