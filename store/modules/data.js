import data from '~/assets/data'

const state = () => (data)

const getters = {
  chapters (state) {
    return state.chapters.map(({ title, route }) => {
      if (route !== undefined) return { title, route }
      return {
        title,
        route: `/${title.toLowerCase().replace(/ /g, '-')}`
      }
    })
  },
  iam (state) {
    return state.iam
  },
  fingerprints (state) {
    return state.fingerprints
  },
  scenario: (state) => (scenario) => {
    return state.scenarios[scenario]
  }
}

export default { state, getters }
