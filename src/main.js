import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import BeerToast from './components/Toast/'

import 'beercss'
import store from './store'

import('@/assets/styles/main.css')

createApp(App)
    .use(store)
    .use(BeerToast)
    .use(router)
    .mount('#app')


    