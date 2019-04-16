import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: null,
    email: null,
    password: null,
    token: null,
    isAuth: false
  },
  actions: {
    async signUp ({ commit }, authData) {
      const res = await axios.post('http://localhost:3000/custom/user', {
        name: authData.name,
        email: authData.email,
        password: authData.password
      })
      commit('SIGN_UP', res.data)
      console.log('signUp', res)
    },
    async signIn ({ commit }, authData) {
      const res = await axios.post('http://localhost:3000/login', {
        email: authData.email,
        password: authData.password
      })
      commit('SIGN_IN', res.data)
      console.log('signIn', res.data)
    }
  },
  mutations: {
    SIGN_IN (state, payload) {
      state.name = payload.name
      state.email = payload.email
      state.token = payload.token
      state.isAuth = true
    },
    SIGN_UP (state, payload) {
      state.name = payload.name
      state.email = payload.email
      state.password = payload.password
    }
  }
})
