import UserApi from '@/api/user'
import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await UserApi.login(loginForm)
      console.log('token=>', token)
      commit('setToken', token)
      return token
    }
  }
}
