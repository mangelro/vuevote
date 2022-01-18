<template>
    <div v-if="isVisible" class="row" >
        <em>{{resultado.respuestas[question.id]}}</em>
        <subtile-component :title="question.name" subTitle="por favor, seleccione una respuesta"></subtile-component>
        <span style="color:red" v-if="!isValid">La respuesta es obligatoria</span>
        <div v-for="(r,i) in question.responses" :key="i" class="col max">
                <label class="custom" v-if="question.multiSelect">
                        <!-- Input oculto -->
                        <input type="checkbox" :name="r.id" :value="r.id" v-model="response" @change="$emit('uservote',{id:question.id,response})" >
                        <!-- Texto -->
                        <span>{{r.label}}</span>
                </label>                       
                <label class="custom" v-else>
                        <!-- Input oculto -->
                        <input type="radio" :name="question.id" :value="r.id" v-model="response"  @change="$emit('uservote',{id:question.id,response})" >
                        <!-- Texto -->
                        <span>{{r.label}}</span>
                </label>
        </div>
    </div>
</template>

<script>
import SubtileComponent from './SubtileComponent.vue'
import {mapState} from 'vuex'

export default {
    components: { SubtileComponent },

    data(){
        return{
            isVoted:false,
            isValid:true,
            verHijos:false,
            isVisible:this.visible,
            response:[]
        }
    },

   computed:{
        ...mapState(['resultado'])

    },

    props:{
        question:{
            type:Object,
            required:true
        },
        visible:{
            type:Boolean,
            required:false,
            default:false,
        },
   
    },

    emits:['uservote','invisible'],

    methods:{
      
        isValidQuestion(){
            this.isValid = this.question.optional || !this.isVisible || (!this.question.optional && this.isVisible && this.response.length>0)
            return this.isValid               
            
        },

        visibleIfNeeded(ids){
            this.isVisible= (this.question.ref==undefined) || (this.question.ref!=undefined && ids.findIndex((element) => element == this.question.ref) > -1)
            
            if (!this.isVisible)
                this.$emit('invisible',this.question.id)
        }

    }
}
</script>