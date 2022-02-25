<template>

    <div class="menu s bottom">

    <router-link to="/">
    <img src="/favicon.ico" class="circle small  small-margin">
    </router-link>
    
    <router-link to="/">
      <i class="small">home</i>

    </router-link>

    <router-link to="/about">
      <i class="small">question_answer</i>

    </router-link>

    <router-link :to="{ name: 'form' }">
        <i class="small">assessment</i>
    </router-link>

       <router-link :to="{ name: 'registro' }">
        <i class="small">assignment</i>
    </router-link>

    
    <!--
    <a>
      <i>arrow_forward</i>
      <div>Right</div>
    </a>
    <a>
      <i>image</i>
      <div>Icons</div>
    </a>
    <a>
      <i>light_mode</i>
      <div>Light/Dark</div>
    </a>
    <a data-ui="#themes1_">
      <i>palette</i>
      <div>Themes</div>
    </a>
    <a data-ui="#more1_">
      <i>collections</i>
      <div>Templates</div>
    </a>
    -->
    
    <a href="./" @click="logOut" v-if="currentUser">
      <i class="small">exit_to_app</i>
    </a>


    <a data-ui="#themes2">
      <i class="small">palette</i>
    </a>
    <!--
    
    <div id="more1_" data-ui="#more1_" class="modal left"></div>
    -->
    <div class="overlay"></div>
    <div id="themes2" class="modal medium bottom no-scroll">
      <h1>hola</h1>
    </div>

  </div>
    
</template>


<script>



export default {
  data() {
    return {
      currentUser: null,
    };
  },
  
  methods: {
    async logOut() {
      await this.$api.auth.signOut()
      
      //decremento el número de usuarios
      this.$store.commit('removeVisitante')
    },
    async userData(){
      this.currentUser=await this.$api.auth.getCurrentUser()
    }
  },
/*
* beforeRouteLeave must be defined on the component that is mapped to a path.
* Don´t work at sub-components
*/
  watch:{
    async '$route'(){
      this.userData()
    }
  }
}
</script>
