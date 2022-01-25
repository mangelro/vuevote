
<template>
    <title-component :title="title">
    <span>{{subTitle}}</span> 
    </title-component>
</template>

<script>
import TitleComponent from './TitleComponent.vue'

export default {
    extends:TitleComponent,
    
    components:{TitleComponent},

    props:{
        subTitle:{
            type:String,
            required:true,
        }
    }
}
</script>