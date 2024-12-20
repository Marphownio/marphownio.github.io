import { createRouter, createWebHistory } from 'vue-router'

// 导入你的组件
import Home from '../views/Home.vue'
import PdfViewer from '../views/PdfViewer.vue'; // 新增的路由组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pdf/:pdfName', // 动态路由
    name: 'PdfViewer',
    component: PdfViewer
  }
]

// 创建路由实例并传入路由配置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router