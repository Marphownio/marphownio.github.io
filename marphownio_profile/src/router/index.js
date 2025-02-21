import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 导入你的组件
import Home from '../views/Home.vue'
import News from '../views/News.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
]

// 创建路由实例并传入路由配置
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router