import { createRouter, createWebHashHistory } from "vue-router";
// type: 声明导入到是一个类型
import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router