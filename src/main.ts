import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).mount('#app')
