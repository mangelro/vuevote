

import Auth from '../api/authService'



export default async (to,_,next)=>{

  try{
      const auth=await Auth(null).isAuth() //Servicio de autorización externo
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
}