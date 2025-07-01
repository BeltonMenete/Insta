import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router/router'
import Antd from 'ant-design-vue'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia)
app.use(router)
app.use(Antd)
app.mount('#app')
