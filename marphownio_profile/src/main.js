import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'

createApp(App).use(router).use(ElementPlus).mount('#app')
