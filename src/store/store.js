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
    isAuth: false,
    clickPopup: false
  },
  actions: {
    async signUp ({ commit }, authData) {
      try {
        const res = await axios.post('https://ez-json-server.herokuapp.com/user', {
          name: authData.name,
          email: authData.email,
          password: authData.password
        })
        commit('SIGN_UP', res.data)
        console.log('signUp', res)
      } catch (error) {
        console.log('handle', error)
      }
    },
    async signIn ({ commit }, authData) {
      try {
        const res = await axios.post('https://ez-json-server.herokuapp.com/login', {
          email: authData.email,
          password: authData.password
        })
        commit('SIGN_IN', res.data)
        console.log('signIn', res.data)
      } catch (error) {
        console.log('handle', error)
      }
    },
    async LoginOut ({ commit }, data) {
      commit('LOGOUT', false)
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
    },
    SHOW_POPUP (state, payload) {
      state.clickPopup = payload
    },
    LOGOUT (state, payload) {
      state.clickPopup = false
      state.isAuth = false
    }
  }
})
