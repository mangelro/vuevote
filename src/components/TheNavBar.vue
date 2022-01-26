<template>
  <div class="row">
    <div class="col s1 m2">&nbsp;</div>
    <div class="col s9 m6">
      <nav>
        <router-link to="/">Home</router-link>&nbsp;|
        <router-link to="/about">About</router-link>&nbsp;|
        <router-link :to="{ name: 'form' }">Valoración</router-link>&nbsp;|
        <router-link :to="{ name: 'tabs' }">Tabs</router-link>&nbsp;|
        <locale-switcher></locale-switcher>🌐{{$i18n.locale}}
      </nav>
    </div>
    <div class="col s2 m4"><login-user></login-user></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import LocaleSwitcher from './LocaleSwitcher';
import LoginUser from './TheLoginUser';

export default {
  components: { 
    LocaleSwitcher,
    LoginUser
  },

  methods: {
    ...mapMutations(['removeVisitante']),

  }
 }
</script>

<style  scoped>
.router-link-active,
.router-link-exact-active {
  text-decoration: underline;
}
</style>