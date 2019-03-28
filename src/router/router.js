import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home'
import UserList from '@/views/User'
import { getToken } from '@/utils/auth.js'
import rights from '@/views/Rights/index.vue'
import roles from '@/views/Roles/index.vue'
import goods from '@/views/Goods/index.vue'
import GoodsAdd from '@/views/Goods/add.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/users',
          component: UserList
        },
        {
          path: '/rights',
          component: rights
        },
        {
          path: '/roles',
          component: roles
        },
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/toadd',
          component: GoodsAdd
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  const token = getToken()
  if (!token) {
    return next('/login')
  }
  next()
})
export default router
