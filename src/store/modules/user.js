import axios from "axios";

export default {
  namespaced: true,
  state: {
    profile: {}
  },
  getters: {

  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    getProfile(ctx) {
      axios.get(
        ctx.rootGetters.hostname + ctx.rootState.endpoints.profile.my,
        {headers: ctx.rootGetters.getAuthHeader}
      ).then((resp) => {
        ctx.commit('setProfile', resp.data)
      })
    }
  }
}