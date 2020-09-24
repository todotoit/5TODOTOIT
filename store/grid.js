import { substatements, team } from '~/assets/data.js'

export const state = () => ({
  substatement: null,
  activeDot: null,
  actions: {
    substatements,
    team
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
    console.log('DATA', data)
    state.substatement = data
  },
  setDot(state, data) {
    state.activeDot = data
  }
}
