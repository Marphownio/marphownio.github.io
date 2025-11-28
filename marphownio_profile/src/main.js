import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
import './assets/global.css'  // 引入全局样式

createApp(App).use(router).use(ElementPlus).mount('#app')

const setHtmlFontSize = () => {
    const htmlDom = document.getElementsByTagName('html')[0];
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (htmlWidth >= 1200) {
      htmlWidth = 1200;
    }
    if (htmlWidth <= 1000) {
      htmlWidth = 1000;
    }
    htmlDom.style.fontSize = `${htmlWidth / 8}px`;
  };
  window.onresize = setHtmlFontSize;
  setHtmlFontSize();
