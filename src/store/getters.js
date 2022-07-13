const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return state.user.userInfo || ''
  },
  hasPermission: (state) => {
    return (state.user.routes && state.user.menus) || ''
  }
}
export default getters
