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

      <article class="flat small scroll">
        <header class="fixed">
          <h5 class="no-margin">Saludos internacionales</h5>
        </header>

        <list-base :items="items">
          <template #icon={currentItem}>
            <i class="grey-text">{{currentItem.status}}</i>
          </template>
          <template #nav={currentItem,select}>
              <button class="none" @click="select(currentItem.id)">Button</button>
              <button class="none"  :data-ui="'#dropdown1_' + currentItem.id"><i>more_vert</i>
              <div :id="'dropdown1_' + currentItem.id" :data-ui="'#dropdown1_' + currentItem.id" class="dropdown no-wrap left">
                  <a>Title</a>
                </div>              
              </button>
          </template>
        </list-base>
      </article>
    </div>
  </div><!-- row -->

</template>

<script>
import BaseCard from '../components/BaseCard'
import ListBase from '../components/ListBase'
export default {
  components:{
    BaseCard,
    ListBase
  },

  data(){
    return{
      items:[
        {id:1, title:'Hola, mundo',subTitle:'¿Cómo estas?',status:'check_circle'},
        {id:2, title:'Hi, world',subTitle:'¿How are you?',status:'check_circle'},
        {id:3, title:'Hola, mundo',status:'warning'},
        {id:4, title:'Hola, mundo',subTitle:'¿Cómo estas?',status:'error'}
      ]
    }
  },
  mounted(){
    this.$nextTick(()=>ui())
  }


}
</script>

<style scoped>

h6.list-item{
  margin:10
}

</style>