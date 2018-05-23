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
  }
}

export default { state, getters }
