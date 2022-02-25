<template>
  <main-menu></main-menu>
  <nav-bar></nav-bar>
  <router-view />
  <main-menu-movil></main-menu-movil>
</template>

<script>
import NavBar from "./components/TheNavBar";
import MainMenu from "./components/TheMainMenu";
import MainMenuMovil from "./components/TheMainMenuMovil.vue";



export default {
  components: { 
    NavBar,
    MainMenu,
    MainMenuMovil,
  
  },

};
</script>