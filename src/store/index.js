import { createStore } from 'vuex'
import Users from './usersStore'

//import createPersistedState from "vuex-persistedstate";
//import b64CodeState from  './b64State'
//const dataState = createPersistedState(b64CodeState)
//const dataState = createPersistedState()

export default createStore({
  state(){
    return{
      numVisitantes:0,
      scroll:0,
      resultado:{
        usuario:'',
        respuestas:{}
      }
    }
  },

  mutations: {

    addVisitante:(state)=>state.numVisitantes++,
    
    removeVisitante:(state)=>
    {
      state.numVisitantes--
     
      if(state.numVisitantes<0)
        state.numVisitantes=0
    },

    setResultado: (state,val)=>{
        state.resultado ={...val}
    },

    setScroll: (state,pos) => state.scroll=pos,

  },

  actions: {
  },

  modules: {
    users: Users
  },

  //plugins: [dataState],
})
