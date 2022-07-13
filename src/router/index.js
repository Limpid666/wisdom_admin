import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Logout from '../logout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'logout',
    component: Logout,
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/menus',
        name: 'menus',
        component: () => import('../views/menus')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/users')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
