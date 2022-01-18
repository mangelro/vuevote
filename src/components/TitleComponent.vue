import { required } from '@vuelidate/validators';
<template>
    <div>
        <h4>{{title}}</h4>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true,
        }
    }
}
</script>

<style>

</style>