import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
import axios from './utils/axios'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$http = axios
app.mount('#app')
