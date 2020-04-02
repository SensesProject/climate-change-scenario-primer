import noScroll from 'no-scroll'

const state = () => ({
  showMenu: false,
  width: null,
  onPalm: false
})

const actions = {
  toggleMenu ({ commit }) {
    commit('TOGGLE_MENU')
  },
  closeMenu ({ commit }) {
    commit('CLOSE_MENU')
  },
  setClientWidth ({ commit }) {
    const width = typeof window !== 'undefined' ? window.innerWidth : 121
    commit('SET_WIDTH', width)
    commit('SET_ON_PALM', width >= 600)
  }
}

const mutations = {
  TOGGLE_MENU (state) {
    state.showMenu = !state.showMenu
    if (state.showMenu) noScroll.on()
    else noScroll.off()
  },
  CLOSE_MENU (state) {
    noScroll.off()
    state.showMenu = false
  },
  SET_WIDTH (state, width) {
    if (width >= 1400) {
      noScroll.off()
      state.showMenu = false
    }
    state.width = width
  },
  SET_ON_PALM (state, onPalm) {
    state.onPalm = onPalm
  }
}

export default { state, mutations, actions }
