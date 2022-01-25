<template>

    <div class="menu l left">

    <router-link to="/">
    <img src="/vuevote/favicon.ico" class="circle small-margin">
    </router-link>
    
    <router-link to="/">
      <i>arrow_upward</i>
      <div>Home</div>
    </router-link>

    <router-link to="/about">
      <i>arrow_downward</i>
      <div>About</div>  
    </router-link>

    <router-link :to="{ name: 'form' }">
        <i>arrow_back</i>
        <div>Valoración</div>
    </router-link>

       <router-link :to="{ name: 'registro' }">
        <i>arrow_back</i>
        <div>Registro</div>
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
      <i>exit_to_app</i>
      <div>Salir</div>
    </a>


    <a data-ui="#themes1" class="">
      <i>palette</i>
      <div>Themes</div>
    </a>
    <!--
    
    <div id="more1_" data-ui="#more1_" class="modal left"></div>
    -->
    <div class="overlay"></div>
    <div id="themes1" class="modal medium left no-scroll">
      <h1>hola</h1>
    </div>

  </div>
    
</template>


<script>


/*
* beforeRouteLeave must be defined on the component that is mapped to a path.
* Don´t work at sub-components
*/
export default {
  data() {
    return {
      currentUser: null,
    };
  },
  
  methods: {
    async logOut() {
      await signOut();
     // this.$router.push({ name: "home" });
    },
    async userData(){
      this.currentUser=await this.$api.auth.getCurrentUser()
    }
  },

  watch:{
    async '$route'(){
      this.userData()
    }
  }
}
</script>
