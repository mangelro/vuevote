<template>
    <visitantes-counter></visitantes-counter>
    <div class="container">
        <router-view />
    </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';

export default {
    components:{
          VisitantesCounter: defineAsyncComponent(()=> import('../components/VisitantesCounter'))
    }
}
</script>