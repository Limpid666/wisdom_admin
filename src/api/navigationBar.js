import request from '@/utils/request'

// 左侧导航栏
const navigation = () => {
  return request({ url: 'menu/nav', method: 'GET' })
}
export default {
  navigation
}