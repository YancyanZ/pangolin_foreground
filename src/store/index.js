import Vue from 'vue'
import Vuex from 'vuex'
import {getInfo} from '@/api/login.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    token: '',
    username: ''
  },
  getters:{},
  mutations:{
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, username) => {
      state.username = username
    },
  },
  actions:{
    // 获取用户信息
    async GetInfo ({state,commit}) {
      const {data:res} = await getInfo(state.token)
      const user = res.user
      commit('SET_NAME', user.userName)
    }
  },
  getters:{},
  modules:{}
})