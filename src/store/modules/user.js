
export default {
  namespaced: true,
  state: {
    profile: {
      subscription: {
        rate_plan: {
          order: 10
        }
      }
    }
  },
  getters: {

  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {
  }
}