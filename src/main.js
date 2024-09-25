import './assets/main.css'

import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowLeft, faBars, faRotateRight} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'

// Добавьте иконки в библиотеку
library.add(faBars, faYoutube, faDiscord, faArrowLeft, faRotateRight)

const app = createApp(App)

// Зарегистрируйте компонент FontAwesomeIcon глобально
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')
