<template>
  <main-menu></main-menu>
  <nav-bar></nav-bar>
  <visitantes-counter></visitantes-counter>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import MainMenu from "./components/MainMenu";

import { defineAsyncComponent } from '@vue/runtime-core';

export default {
  components: { 
    NavBar,
    MainMenu,
    VisitantesCounter: defineAsyncComponent(()=> import('./components/VisitantesCounter'))
  },

};
</script>