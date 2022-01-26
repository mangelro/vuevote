<template>
    <img src="../assets/Signup.svg" class="responsive medium">
    <div class="padding">
        <h5 class="no-margin">{{$t('login.titulo')}}</h5>
        <div>
            <div class="row">
                <div class="col s1 m2">&nbsp;</div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>account_circle</i>
                        <input type="text" v-model.trim="model.name">
                        <label>{{$t('login.inputNombre')}}</label>
                        <span v-if="v$.model.name.$dirty && v$.model.name.required.$invalid" class="error">{{v$.model.name.required.$message}}</span>
                        <span v-if="v$.model.name.$dirty && v$.model.name.email.$invalid" class="error">{{v$.model.name.email.$message}}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s1 m2">&nbsp;</div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>password</i>
                        <input type="password" v-model="model.pass">
                        <label>{{$t('login.inputPass')}}</label>
                        <span v-if="v$.model.pass.$dirty && v$.model.pass.required.$invalid" class="error">{{v$.model.pass.required.$message}}</span>
                        <span v-if="v$.model.pass.$dirty && v$.model.pass.minLength.$invalid" class="error">{{v$.model.pass.minLength.$message}}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s1 m2"></div>
                <div class="col s10 m8">
                    <label class="switch">
                        <input type="checkbox" v-model="model.rememberMe">
                        <span>{{$t('login.inputRemember')}}</span>
                    </label>
                </div>
            </div>
        </div>

        <nav>
            <div class="row">
                <div class="col s2 m2">&nbsp;</div>
                <div class="col s9">
                    <button @click="authUser" class="large-width center-aling">{{$t('login.login')}}</button>
                </div>
            </div>
        </nav>
        
        <div class="row">
            <div class="col s12 m6 center-align">{{$t('login.olvidoClave')}}</div>
            <div class="col s12 m6 center-align">{{$t('login.registro')}}&nbsp;<router-link :to="urlRegister">{{$t('login.registroLink')}}</router-link></div>
        </div>
        <em>{{ $d(new Date())}}</em>
    </div>

</template>

<script>

import  {model,validations} from '../models/loginModel'
import useVuelidate from '@vuelidate/core'
import {mapMutations} from 'vuex'

export default {
    props:{

        urlRegister:{
            type:[String,Object],
            required:true
        }
    },
    data(){
        return{
            model,
            v$:useVuelidate(),
        }
    },
    validations, //validations: validations(imported)

    mounted(){
        this.$nextTick(()=> {if (!window.ui) ui()})
    },
    
    emits:['logging','logged','loggingError'],

    methods:{

        ...mapMutations(['addVisitante']),

        async authUser(){

            const isFormCorrect = await this.v$.$validate()

            if (isFormCorrect){
                this.$emit('logging',this.model)

                if (await this.$api.auth.signIn(this.model)){
                    this.onLogin()
                }
                else{
                    this.onError()
                }
            }
        },
        onLogin(){
            //imcrementamos el número de visitantes 
            this.$store.commit('addVisitante')
            this.$emit('logged',this.model)
        },
        onError(){
            this.errorForm='Usuario o clave no válida'
            this.model.pass=''
            this.$emit('loggingError',this.errorForm)
        }
    },
    mounted(){
        this.$nextTick(()=> ui())
    },

}
</script>