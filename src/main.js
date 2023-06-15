import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'

const app = createApp(App)

library.add(faShoppingCart)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
