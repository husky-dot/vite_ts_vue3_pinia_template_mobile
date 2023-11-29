import { createApp } from 'vue'

import router from './router'
import store from './stores'
import App from './App.vue'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
