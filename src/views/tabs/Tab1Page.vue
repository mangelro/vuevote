<template>

     <div  class="row">
          <template v-if="model">
               <div class="col s8">
               <article>
               <div class="row no-wrap">
               <div class="col min">
                    <img :src="model.picture" class="circle huge">
               </div>
               <div class="col">
                    <h5 class="no-margin">{{ fullName }}</h5>
                    <div><i class="small">email</i> {{model.email}}<br>
                    <i class="small">local_phone</i> {{model.phone}}</div>
               </div>
               </div>
               <nav>
                    <button class="border small responsive" @click="goBack">Volver</button>
               </nav>
               </article>
               </div>
          </template>
          <template v-else>
               <div class="col s8">
                    <em>No existe datos</em><br>
                    <router-link :to="{name:'about'}">Volver a empleados</router-link>
               </div>
          </template>
     </div>
     <Teleport to="body">
          <loader v-show="isLoading"></loader>    
    </Teleport>
</template>
<script>
import {loaderMixin} from '../mixins'

export default {
      mixins:[loaderMixin],

     data:()=>({
          model:null
     }),
     computed:{

          fullName(){
               return `${this.model.title} ${this.model.firstName} ${this.model.lastName}`
          }
     },

     async created(){
          try{
               const {id} = this.$route.query
               if (id){
                    this.model=await this.$api.user.getUserById(id)
                    console.log(this.model)
               }
          } 
          catch (error){this.$beer.toast.error(error.message)}
          finally{
               this.isLoading=false
          }
          
     },
     methods:{
          goBack(){
               this.$router.push({name:'about'})
          }

     }
}
</script>