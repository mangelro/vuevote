<template>

<div class="container">
  <div class="tabs">
    <a data-ui="#tab10_" class="wrap active" @click="changeTab('tab1')">
      <i>home</i>
      <span>Operaciones</span>
    </a>
    <a data-ui="#tab11_" class="wrap" @click="changeTab('tab2')">
      <i>home</i>
      <span>Producciones</span>
    </a>
    <a data-ui="#tab12_" class="wrap " @click="changeTab('tab3')">
      <i>home</i>
      <span>Regularizaciones</span>
    </a>
  </div>
  <!-- contenido -->
  <router-view></router-view>
</div>
</template>

<script>
export default {

    mounted(){
        this.$nextTick(()=>ui())
    },

    methods:{
        changeTab(tabName){
            this.$router.push({name:tabName})
        }
    }

}
</script>