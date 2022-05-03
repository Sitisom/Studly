import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostname: "http://localhost:8000",
    endpoints: {
      profile: {
          list: "/core/profile",
          my: "/core/profile/my"
      },
      auth: {
        login: "/auth/login/",
        register: "/auth/register/"
      },
      rate_plan: {
        list: "/course/rate-plan",
        purchase: "/course/rate-plan/purchase/"
      },
      course: {
        list: "/course/",
        subscribe: "/course/subscribe/"
      },
      lesson: {
        list: "/lesson/",
      }
    },
    token: "",
    refresh_token: "",
  },
  getters: {
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
    setToken(state, payload) {
      state.token = payload.access;
      state.refresh_token = payload.refresh;

      window.localStorage.setItem('token', payload.access)
    },
    setLocalToken(state) {
      state.token = window.localStorage.getItem('token');
    },
    logout(state) {
      state.token = "";
      state.refresh_token = "";
      window.localStorage.removeItem('token');
    }
  },
  actions: {},
  modules: {
    user
  }
})
