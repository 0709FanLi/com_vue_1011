import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/order.vue')
  },
  {
    path: '/orderWatch',
    name: 'OrderWatch',
    component: () => import('@/views/orderWatch.vue')
  },
  {
    path: '/orderModule',
    name: 'OrderModule',
    component: () => import('@/views/orderModule.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
