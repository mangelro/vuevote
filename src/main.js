import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import BeerToast from './components/Toast/'
import store from './store'
import eventBus from  './utils/event-bus'
import i18n from './i18n'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import Factories from './api'


//import 'beercss'
import('@/assets/styles/main.css')
import('@/assets/styles/clear-toast.css')


// resize for scaling the board size
window.addEventListener('resize', onResize)
// set size on startup
onResize()

function onResize() {
  // get actual vh on mobile
  //document.body.style.setProperty('--vh', window.innerHeight + 'px')
  let vh = window.innerHeight * 0.01; //1%
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}



const app=createApp(App)
app.use(store)
app.use(eventBus)
app.use(BeerToast)
app.use(router)
app.use(i18n)
//app.use(VueAxios, axios) //podemos acceder a través de this.$axios this.$http
app.use(Factories) //Monta las factorias para tener acceso a treves de this.$api
app.mount('#body') 

//console.log(app.config)