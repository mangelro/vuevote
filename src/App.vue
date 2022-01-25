<template>
  <main-menu></main-menu>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from "./components/TheNavBar";
import MainMenu from "./components/TheMainMenu";



export default {
  components: { 
    NavBar,
    MainMenu,
  
  },

};
</script>