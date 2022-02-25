<template>
  <div class="row">

    <div class="col s12 m4 ">
      <base-card title="Lorem ipsum"></base-card>
    </div>

    <div class="col s12 m4 ">
      <base-card title="Lorem ipsum">
        <template #header>
          <img src="https://www.beercss.com/beer-and-woman.jpg" class="responsive small"> 
        </template>
        
      </base-card>
    </div>

    <div class="col s12 m4 ">
      <base-card title="Lorem ipsum">
      <template #header>
         <video autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" class="responsive small">
          <source src="https://www.beercss.com/dance.mp4" type="video/mp4">
        </video>
      </template>
      </base-card>
    </div>

    <div class="col s12 m4">
      <base-card title="Lorem ipsum">
        <template #header>
          <img src="https://www.beercss.com/beer-and-woman.jpg" class="responsive small"> 
        </template>
        <template #nav>
          <button class="border small responsive">Press me</button>
        </template>    
     </base-card>
    </div>

    <div class="col s12 m4 ">
      <base-card title="Lorem ipsum">
        <template #header>
          <img src="https://www.beercss.com/beer-and-woman.jpg" class="responsive small"> 
        </template>
        <template #content>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lobortis enim. Sed et viverra est, malesuada pharetra tellus. Duis nec urna cursus orci euismod lobortis in nec elit. Nulla tincidunt volutpat neque, non vehicula ante mollis et. Sed rutrum elit ac dolor ornare scelerisque. Curabitur sed ex diam. Proin mollis tellus eget arcu sagittis varius.</span>  
        </template>    

        <template #nav>
          <div class="row">
            <div class="col s6"><button class="none"><i>stars</i>123</button></div>
            <div class="col s6"><em class="bottom-align">22-01-2020</em></div>
          </div>
        </template>
      </base-card>
    </div>



  </div><!--row-->


  
  <div class="row">
    <div class="col s12 m8">
      <article class="flat large scroll">
        <header class="fixed">
          <h5 class="no-margin">Empleados</h5>
          <em>{{pagedLabel}}</em>
        </header>

        <list-base :items="items">
          
            <!-- <template #icon={currentItem}>
              <template v-if="currentItem.status.endsWith('.jpg')">
                <img :src="currentItem.status" class="circle tiny">
              </template>
              <template v-else>
                <i class="grey-text">{{currentItem.status}}</i>
              </template>
            </template> -->

            <template #icon={currentItem}>
              <img :src="currentItem.picture" class="circle tiny">
            </template>

            <template #default={currentItem}>
              <div>{{currentItem.firstName}}</div>
              <label>{{currentItem.lastName}}</label>
            </template>

            
            <template #nav={currentItem}>
                <button class="none" @click="viewDetails(currentItem.id)">Ver detalle</button>
                <button class="none" :data-ui="'#dropdown_' + currentItem.id"><i>more_vert</i>
                  <div :id="'dropdown_' + currentItem.id" :data-ui="'#dropdown_' + currentItem.id" class="dropdown no-wrap left">
                    <a>Title</a>
                    <a>
                      <div>Title</div>
                      <label>Complementary text</label>
                    </a>
                  </div>
                </button>
            </template>

        </list-base>
      </article>
      <nav class="right">
        <button class="circle" @click="goFirstPage"><i>first_page</i><div class="tooltip bottom">pág. 1</div></button>
        <button class="circle" @click="goPreviousPage"><i>keyboard_arrow_left</i><div class="tooltip bottom">pág. {{previousPage()}}</div></button>
        <button class="circle" @click="goNextPage"><i>keyboard_arrow_right</i><div class="tooltip bottom">pág. {{nextPage()}}</div></button>
        <button class="circle" @click="goLastPage"><i>last_page</i><div class="tooltip bottom">pág. {{totalPages}}</div></button>
      </nav>
    </div>
  </div><!-- row -->
 
    <Teleport to="body">
    <loader v-show="isLoading"></loader>    
    </Teleport>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import BaseCard from '../components/BaseCard'
import ListBase from '../components/ListBase'
import {loaderMixin} from './mixins'


export default {
  components:{
    BaseCard,
    ListBase
  },

  mixins:[loaderMixin],

  data(){
    return{
       items:[],
    }
  },
   async created(){
    try{
      const {data,total}= await this.queryData(this.currentPage,this.pageSize)
      this.items=data
      this.$store.commit('users/setTotalItems',total) //total de usuario en la BD
    }
    catch (error){this.$beer.toast.error(error.message)}
    finally
    {
    
    }
  },
  computed:{
    pagedLabel(){
          return `página ${this.currentPage} de ${this.totalPages}`
        },

    ...mapState({
          currentPage: state => state.users.currentPage,
          pageSize: state => state.users.pageSize
      }),
    
    ...mapGetters('users',
      {
        totalPages:'getTotalPages'
      }),
  },

  watch:{
    async currentPage(newValue){
      try {
        const {data} = await this.queryData(this.currentPage,this.pageSize)
        this.items=data
      } 
      catch (error){this.$beer.toast.error(error.message)}      
    },
    items(){
      this.$nextTick(()=>ui()) //No es el sitio que más me guste, pero debe ejecutarse cada vez que cambiamos los items
    }

  },
  
  methods:{
   
    ...mapMutations('users',['setTotalItems','setCurrentPage']),

    async queryData(page,size){
      try{
        this.isLoading=true
        const {data,total} = await this.$api.user.getUsers(page,size)
        return {data,total}
      }
      finally
      {
        this.isLoading=false        
      }
    },

    viewDetails(id){
      this.$router.push({name:'tab1',query:{id}})
    },

    nextPage() {
      return Math.min(this.totalPages,this.currentPage + 1)
    },
    
    previousPage() {
      return Math.max(1,this.currentPage - 1)
    },

    goNextPage(){
      //this.$store.commit('users/setCurrentPage',this.nextPage())
      this.setCurrentPage(this.nextPage())
    },

    goPreviousPage(){
      //this.$store.commit('users/setCurrentPage',this.previousPage())
      this.setCurrentPage(this.previousPage())
    },

    goFirstPage(){
      //this.$store.commit('users/setCurrentPage',1)
      this.setCurrentPage(1)
    },

    goLastPage(){
      //this.$store.commit('users/setCurrentPage',this.totalPages)
      this.setCurrentPage(this.totalPages)
    }

  }
}
</script>

<style scoped>
  h6.list-item{
    margin:10
  }
</style>