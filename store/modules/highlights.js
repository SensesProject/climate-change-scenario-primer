import { getField, updateField } from 'vuex-map-fields'
const state = () => ({
  test: null,
  fingerprints: {
    properties: null,
    category: null,
    model: null
  },
  charts: {
    ssp: null,
    rcp: null,
    filter: null
  }
})

const getters = {
  // getField: (state) => (field) => {
  //   console.log(state, field)
  //   return state[field]
  // }
  getField
}

const mutations = {
  // setField (state, { field, value }) {
  //   state[field] = value
  // }
  updateField
}

export default { state, mutations, getters }
