

<template>
    <div v-if="schema">
        <title-component :title="schema.title"></title-component>
        <div v-for="(p,i) in schema.form" :key="i">
            <pregunta-form ref="preguntas" 
                :question="p" 
                :visible="p.ref===undefined" 
                @uservote="setUserSelection" 
                @invisible="deleteUserSelection">
            </pregunta-form>
        </div>
    </div>
    
    <button @click="saveSeleccion" >Guardar</button>

    <Teleport to="body">
    <loader v-show="isLoading"></loader>    
    </Teleport>

</template>

<script>
import {mapMutations} from 'vuex'

import TitleComponent from '../components/TitleComponent'

import PreguntaForm from '../components/PreguntaForm'

import {getData,saveData} from '../helpers/schema'
import Positions from '../components/Toast/positions'

import {loaderMixin} from './mixins'

export default {

    

    mixins:[loaderMixin],

    components: { 
        PreguntaForm,
        TitleComponent
    },
    
    data(){
        return {
            schema:null,
            responses:new Map(),
            isValid:true,
            isChanged:false,
          
        }
    },

    methods:{
        ...mapMutations(['setResultado','getResultado']),

        validateForm(){
            let isFormValid=true
            
            this.$refs.preguntas.forEach(p => {
                isFormValid &= p.isValidQuestion()
            });

            this.isValid=isFormValid
        },

   
        async saveSeleccion(){

            const defaultPosition=Positions.TOP

            try{
                if (this.isChanged){
                    this.validateForm()

                    if (this.isValid){
                        const obj = Object.fromEntries(this.responses);
                        await saveData(obj)
                        this.$store.commit('setResultado',{usuario:'mmmm',respuestas:obj})
                        this.isChanged=false
                        this.$beer.toast.done('Respuestas registradas correctamente',{position:defaultPosition})
                    }
                    else
                    {
                        this.$beer.toast.warning('Verifique el formulario',{position:defaultPosition})
                        console.log("Formulario incorrecto")
                    }
                    
                }
                else{
                    this.$beer.toast.warning('Nada nuevo que enviar',{position:defaultPosition,duration:2000})
                    console.log("Nada que enviar")
                }
            }catch (error){
                this.$beer.toast.error(error,{position:defaultPosition})
                console.error(error)
            }
        },

        deleteUserSelection(e){
            this.responses.delete(e)
            this.isChanged=true
        },

        setUserSelection(e){
             const {id,response}=e;

             this.responses.set(id,[].concat(response))
             
             this.visibilizeQuestions()
             this.isChanged=true
        },        

        visibilizeQuestions(){
            this.$refs.preguntas.forEach(p => {
                p.visibleIfNeeded(Array.from(this.responses.values()))
            });
        }
    },
    
    async created(){
        this.schema=await getData()
    },
   
    /*
    *   Guard para evitar salir de la página si se ha modificado el form
    */
    beforeRouteLeave (to, from, next) {
        if (this.isChanged)
            next(window.confirm('¿Realmente desea salir?'));
        else
            next()
    },
    mounted(){
       setTimeout(()=>{this.isLoading=false},500)
   }
}
</script>

<style scoped>

</style>
