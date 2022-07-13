import router from './router'
import store from './store'
import { Message } from 'element-ui'

const whitelist = ['/login', '/404', '401']
// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      Message.error('请勿重复登录')
      next('/')
    } else {
      if (store.getters.userInfo.role === 'admin') {
        next()
      }
    }
  } else {
    if (whitelist.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
