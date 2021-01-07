import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue"

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    meta: { title: '', noCache: true },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', noCache: true },
        component: () => import('@/views/home/index.vue'), 
      },
      {
        path: '/404',
        name: '404',
        meta: { title: '404', noCache: true },
        component: () => import('@/views/public/404.vue')
      },
      {
        path: '/:pathMatch(.*)',
        redirect: '/404'
      }
    ]
  },
  {
    path: '/LoginRegister',
    name: 'LoginRegister',
    meta: { title: '登录/注册', noCache: true },
    component: () => import('@/views/public/LoginRegister.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router