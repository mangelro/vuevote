<template>

<div class="container">
  <div class="tabs">
    <a data-ui="#tab10_" class="wrap active" @click="changeTab('tab1')">
      <i>home</i>
      <span>{{$t('tabs.tab1')}}</span>
    </a>
    <a data-ui="#tab11_" class="wrap" @click="changeTab('tab2')">
      <i>favorite_border</i>
      <span>{{$t('tabs.tab2')}}</span>
    </a>
    <a data-ui="#tab12_" class="wrap " @click="changeTab('tab3')">
      <i>flash_on</i>
      <span>{{$t('tabs.tab3')}}</span>
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