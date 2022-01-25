
/*
    API Factories for Vue.js
*/

import axios from 'axios'

import Auth from './api/authService'
import User from './api/userService'

const Plugin = {

    install(app, options={}){
   
        const token ='61eff0ab57cdc2f6dc99d117' //localStorage.getItem('token')

        const instance = axios.create({
            baseURL: 'https://dummyapi.io/data/v1',
            timeout: 1000,
            headers: {'app-id': token}
          });
          
        console.log ('Creando instancia axios')

        // Initialize API factoies
        const factories = {
            auth: Auth(instance),
            user: User(instance)
        }

        app.config.globalProperties.$api= factories


        const key='factories'
        app.provide(key,factories)
    }
}

export default Plugin

