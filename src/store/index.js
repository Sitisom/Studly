import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostname: "http://localhost:8000",
    token: "",
    refresh_token: "",
  },
  getters: {
    hostname: (state) => {
      return state.hostname
    },
    getToken: (state) => {
      if (state.token) return state.token
      else {
        let token = window.localStorage.getItem('token')
        if (!token) {
          return null;
        }
        state.token = token;
      }
      return state.token;
    },
    getAuthHeader: (state, getters) => {
      return {"Authorization": `Bearer ${getters.getToken}`}
    }
  },
  mutations: {
    setToken: function(state, payload) {
      state.token = payload.access;
      state.refresh_token = payload.refresh;

      window.localStorage.setItem('token', payload.access)
    },
    getLocalToken: function (state) {
      state.token = window.localStorage.getItem('token');
    },
    logout: function (state) {
      state.token = "";
      state.refresh_token = "";
      window.localStorage.removeItem('token');
    }
  },
  actions: {
  },
  modules: {
  }
})
