<template>
  <div class="row">
    <div class="col s1 m2">&nbsp;</div>
    <div class="col s10 m8">
      <nav>
        <router-link to="/">Home</router-link>&nbsp;|
        <router-link to="/about">About</router-link>&nbsp;|
        <router-link :to="{ name: 'form' }">Valoración</router-link>&nbsp;|
        <a href="./vuevote" @click="logOut" v-if="currentUser"><i class="small outlined">exit_to_app</i>Salir</a>
      </nav>
    </div>
    <div v-if="currentUser" class="col s1 m2"><span><i class="outlined">account_circle</i>{{ currentUser }}</span></div>
  </div>
</template>

<script>
import { getCurrentUser, signOut } from "../helpers/authService";
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      currentUser: null,
    };
  },
  
  methods: {
    ...mapMutations(['removeVisitante']),

    async logOut() {
      await signOut();

      //decremento el número de usuarios
        this.$store.commit('removeVisitante')

      // this.$router.push({ name: "home" });
    },
    
    async userData(){
      this.currentUser=await getCurrentUser()
    }
  },

  watch:{
  /*
  * beforeRouteLeave must be defined on the component that is mapped to a path.
  * Don´t work at sub-components
  */
  async '$route'(){
      this.userData()
    }
  }
}
</script>

<style  scoped>
.router-link-exact-active {
  text-decoration: underline;
}
/* 
#nav {
  float: left;
  display: block;
}

#nav-user {
  float: right;
}
#nav,
#nav-user {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>