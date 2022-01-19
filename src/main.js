import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import BeerToast from './components/Toast/'
import store from './store'


import 'beercss'
import('@/assets/styles/main.css')
import('@/assets/styles/clear-toast.css')


createApp(App)
    .use(store)
    .use(BeerToast)
    .use(router)
    .mount('#app')


    