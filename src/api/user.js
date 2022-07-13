import request from '@/utils/request'

// 获取验证码接口
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}

// 登录接口
const login = (data) => {
  return request({
    url:
      '/login?username=' +
      data.username +
      '&password=' +
      data.password +
      '&code=' +
      data.code +
      '&token=' +
      data.token,
    method: 'POST',
    data
  })
}
// 获取用户信息
const loginUserInfo = () => {
  return request({ url: '/user/info', method: 'GET' })
}
// 当前用户退出登录
const loginOutUserInfo = () => {
  return request({ url: '/logout', method: 'POST' })
}
// 导出api
export default {
  getCaptcha,
  login,
  loginUserInfo,
  loginOutUserInfo
}
