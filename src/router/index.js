import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404/404.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/index',
    children: [
      // 首页
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index'),
        meta: {
          title: '控制台',
          icon: 'el-icon-home'
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('../layout'),
    redirect: '/sys/user',
    children: [
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/role'),
        meta: {
          title: '角色管理',
          icon: 'el-icon-user-solid'
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    meta: {
      title: '菜单管理',
      icon: 'el-icon-s-grid'
    },
    component: () => import('../layout'),
    redirect: '/sys/user',
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user'),
        meta: {
          title: '用户管理',
          icon: 'el-icon-user'
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('../layout'),
    redirect: '/sys/user',
    children: [
      {
        path: '/menus',
        name: 'menus',
        component: () => import('@/views/menus'),
        meta: {
          title: '菜单管理',
          icon: 'el-icon-menu'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
