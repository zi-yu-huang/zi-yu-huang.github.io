import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '../src/assets/main.scss'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const app = createApp(App)
app.use(router)
.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app')