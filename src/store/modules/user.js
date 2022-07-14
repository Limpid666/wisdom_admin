import UserApi from '@/api/user'
import { getItem, setItem, removeItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: '',
    menus: '',
    permission: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setPermission(state, permission) {
      state.permission = permission
    },
    setMenus(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await UserApi.login(loginForm)
      console.log('token=>', token)
      commit('setToken', token)
      return token
    },
    async getUserInfo({ commit }) {
      const userInfo = await UserApi.loginUserInfo()
      commit('setUserInfo', userInfo)
      return userInfo
    },
    async getRouters({ commit }) {
      const routes = await UserApi.getRouters()
      commit('setRouterrs', routes)
      return routes
    },
    async getPermission({ commit }) {
      const { authoritys, menus } = await UserApi.getPermissionList()
      if (authoritys.length > 0 && menus.length > 0) {
        commit('setPermission', authoritys)
        commit('setMenus', menus)
        return { authoritys, menus }
      } else {
        return false
      }
    },
    async logout({ commit }) {
      await UserApi.logout()
      commit('setToken', '')
      commit('setUserInfo', '')
      commit('setPermission', '')
      commit('setMenus', '')
      removeItem('token')
      return true
    }
  }
}
