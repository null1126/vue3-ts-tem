import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue"

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    meta: { title: '首页', noCache: true },
    component: Layout
  },
  {
    path: '/LoginRegister',
    name: 'LoginRegister',
    meta: { title: '登录/注册', noCache: true },
    component: () => import('@/views/public/LoginRegister.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404', noCache: true },
    component: () => import('@/views/public/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router