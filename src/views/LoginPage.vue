<template>

    <article class="no-padding">
    <login :urlRegister="{name:'registro'}" @logging="loggingUser" @logged="loggedUser" @loggingError="loggingError"></login>
    </article>
    
    
    <Teleport to="body">
    <loader v-show="isLoading"></loader>    
    </Teleport>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import {loaderMixin} from './mixins'

export default {
   
    mixins:[loaderMixin],

    components:{
       Login: defineAsyncComponent(()=> import('../components/TheLogin')),
   },

   methods:{
        
        loggingUser(){
          this.isLoading=true
        },
       loggedUser(user){
        this.isLoading=false
        
        const {r} =this.$route.query
        console.log(r)
        this.$router.push(r)
       },
       loggingError(error){
           this.isLoading=false
           this.$beer.toast.warning(error)
       }

   },
   mounted(){
       setTimeout(()=>{this.isLoading=false},1000)
   }

}
</script>