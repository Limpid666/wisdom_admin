import store from '@/store'
import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截
service.interceptors.request.use(
  function (config) {
    const token = store.getters.token
    config.headers.token = token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.data.code === 200) {
      return response.data.data
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 统一传参处理
const request = (options) => {
  if (options.method.toLocaleLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
export default request
