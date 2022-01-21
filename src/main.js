import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import BeerToast from './components/Toast/'
import store from './store'
import eventBus from  './utils/event-bus'
import i18n from './i18n'

//import 'beercss'
import('@/assets/styles/main.css')
import('@/assets/styles/clear-toast.css')


const app=createApp(App)
app.use(store)
app.use(eventBus)
app.use(BeerToast)
app.use(router)
app.use(i18n)
app.mount('#body') 
//console.log(app.config)