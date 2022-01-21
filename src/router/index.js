import { createRouter, createWebHistory } from 'vue-router'
import isAuth from '../helpers/authService'

import Home from '../views/Home'
import ErrorPage from '../views/ErrorPage'
import LoginPage from '../views/LoginPage'
import PathNotFound from '../views/PathNotFound'
import RegisterPage from '../views/RegisterPage.vue'


const routes = [
  {
    path: '/',
    redirect: {name:'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage')
  },
  {
    path: '/form',
    name: 'form',
    beforeEnter:async (to,from,next)=>{

        try{
          const auth=await isAuth() //Servicio de autorización externo

          if (auth){
            next()
          }
          else{
            next({name:'login', query:{r:to.fullPath}})
          }
        }
        catch (error){
          console.log (`Se ha producio un error. ${error}`)
          next({name:'error'})
        }
    },
    component: () => import(/* webpackChunkName: "form" */ '../views/FormPage')
  },
  { 
    path: '/login', 
    name:"login",
    component: LoginPage
  },
  { 
    path: '/registro', 
    name:"registro",
    component: RegisterPage
  },
  { 
    path: '/error', 
    name:"error",
    component: ErrorPage
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: PathNotFound 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
