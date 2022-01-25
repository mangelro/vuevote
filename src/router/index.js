import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import ErrorPage from '../views/ErrorPage'
import LoginPage from '../views/LoginPage'
import PathNotFound from '../views/PathNotFound'
import RegisterPage from '../views/RegisterPage.vue'
import authGuard from './guard'


const routes = [
  {
    path: '/', 
    name:'default',
    component: ()=> import('../layouts/DefaultLayout'),
    redirect:{name:'home'}, //permite la carga inicial desde router-link
    children:[
      {
        path: '',
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
        beforeEnter: authGuard,
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
    ]

  },
  { 
    path: '/tabs', 
    name:"tabs",
    component: ()=> import('../layouts/TabsLayout'),
    redirect:{name:'tab1'}, //permite la carga inicial desde router-link
    children:[
      {path:'', redirect:{name:'tab1'}},
      {path:'tab1',name:'tab1',component: ()=> import('../views/tabs/Tab1Page')},
      {path:'tab2',name:'tab2',component: ()=> import('../views/tabs/Tab2Page')},
      {path:'tab3',name:'tab3',component: ()=> import('../views/tabs/Tab3Page')},

    ]
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
