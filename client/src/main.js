import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ProductMgr from './data/ProductMgr'
import Product from './classes/Product'

const app = createApp(App)

app.provide('ProductMgr',ProductMgr)
app.provide('Product',Product)

app.use(router)
app.mount('#app')


