const width = window.innerWidth

const state = () => ({
  showMenu: false,
  width: null,
  onPalm: width >= 600,
  onLaptop: width >= 800
})

const actions = {
  toggleMenu ({ commit }) {
    commit('TOGGLE_MENU')
  },
  hideMenu ({ commit }) {
    commit('HIDE_MENU')
  },
  setClientWidth ({ commit }) {
    const width = window.innerWidth
    commit('SET_WIDTH', width)
    commit('SET_ON_PALM', width >= 600)
    commit('SET_ON_LAPTOP', width >= 800)
  }
}

const mutations = {
  TOGGLE_MENU (state) {
    state.showMenu = !state.showMenu
  },
  HIDE_MENU (state) {
    state.showMenu = false
  },
  SET_WIDTH (state, width) {
    state.width = width
  },
  SET_ON_PALM (state, onPalm) {
    state.onPalm = onPalm
  },
  SET_ON_LAPTOP (state, onLaptop) {
    state.onLaptop = onLaptop
  }
}

export default { state, mutations, actions }
