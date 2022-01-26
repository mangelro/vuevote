<template>
    <article class="no-padding">
    <register :urlLogin="{name:'login'}"></register>
    </article>
    
    
    <Teleport to="body">
    <loader v-show="isLoading"></loader>    
    </Teleport>
</template>

<script>
import Register from '../components/Register.vue'
import {loaderMixin} from './mixins'

export default {
    components: { Register },
    mixins:[loaderMixin],
    mounted(){
        setTimeout(() => {this.isLoading=false}, 500);
    }
}
</script>