<template>
    <img src="../assets/Signup.svg" class="responsive medium">
    <div class="padding">
        <h5 class="no-margin">{{$t('titulo')}}</h5>
        <div>
            <div class="row">
                <div class="col s1 m2">&nbsp;</div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>account_circle</i>
                        <input type="text" v-model="model.name">
                        <label>Nombre de usuario</label>
                        <span v-if="v$.model.name.$dirty && v$.model.name.required.$invalid" class="error">{{v$.model.name.required.$message}}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s1 m2">&nbsp;</div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>email</i>
                        <input type="text" v-model="model.mail">
                        <label>Email usuario</label>
                        <span v-if="v$.model.mail.$dirty && v$.model.mail.required.$invalid" class="error">{{v$.model.mail.required.$message}}</span>
                        <span v-if="v$.model.mail.$dirty && v$.model.mail.email.$invalid" class="error">{{v$.model.mail.email.$message}}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s1 m2">&nbsp;</div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>password</i>
                        <input type="password" v-model="model.pass">
                        <label>Clave de acceso</label>
                        <span v-if="v$.model.pass.$dirty && v$.model.pass.required.$invalid" class="error">{{v$.model.pass.required.$message}}</span>
                        <span v-if="v$.model.pass.$dirty && v$.model.pass.minLength.$invalid" class="error">{{v$.model.pass.minLength.$message}}</span>
                    </div>
                </div>
            </div>

        </div>

        <nav>
            <div class="row">
                <div class="col s2 m2">&nbsp;</div>
                <div class="col s9">
                    <button @click="registerUser" class="large-width center-aling">Sign Up</button>
                </div>
            </div>
        </nav>
        
        <div class="row">
            <div class="col s12 m6 center-align">Already have an account? <router-link :to="urlLogin">Sign In</router-link></div>
        </div>

    </div>

</template>


<i18n>
{
    "es":{
        "titulo":"Registro usuario"
    },
    "en":{
        "titulo":"Sign Up"
    }
}
</i18n>


<script>

import {model,modelValidations} from '../models/userModel'
import useVuelidate from '@vuelidate/core'


export default {
    props:{

        urlLogin:{
            type:[String,Object],
            required:true,
            default:'/login'
        }
    },
    data(){
        return{
            model,
            v$:useVuelidate(),
    errorForm:'',
            isAuth:false,
        }
    },
    validations:modelValidations,
    
    methods:{
        async registerUser(){
            const isFormCorrect = await this.v$.$validate()
            if (isFormCorrect){
                    console.table(this.model)
            }
        },
    },
    mounted(){
        this.$nextTick(()=> ui() )
    },

}
</script>


