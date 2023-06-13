import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faShoppingCart)

app.use(router)
app.use(store)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
