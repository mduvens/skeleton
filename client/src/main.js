import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ProductMgr from './data/ProductMgr'

const app = createApp(App)

app.provide('ProductMgr',ProductMgr)

app.use(router)
app.mount('#app')


