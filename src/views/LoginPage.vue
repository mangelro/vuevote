<template>
    <article class="no-padding">
    
    <img src="../assets/Signup.svg" class="responsive medium">

    <div class="padding">
        <h5 class="no-margin">Acceso al sistema</h5>

        <div>
            <div class="row">
                <div class="col s1 m2"></div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>account_circle</i>
                        <input type="text" v-model="userName">
                        <label>Nombre de usuario</label>
                        <span v-if="v$.userName.$dirty && v$.userName.required.$invalid" class="error">{{v$.userName.required.$message}}</span>
                        <span v-if="v$.userName.$dirty && v$.userName.email.$invalid" class="error">{{v$.userName.email.$message}}</span>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col s1 m2"></div>
                <div class="col s10 m8">
                    <div class="field label prefix">
                        <i>password</i>
                        <input type="password" v-model="userPass">
                        <label>Clave de acceso</label>
                        <span v-if="v$.userPass.$dirty && v$.userPass.required.$invalid" class="error">{{v$.userPass.required.$message}}</span>
                        <span v-if="v$.userPass.$dirty && v$.userPass.minLength.$invalid" class="error">{{v$.userPass.minLength.$message}}</span>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <button @click="authUser" class="none">Acceder</button>
            <span class="error">{{errorForm}}</span>
        </nav>
    </div>
    </article>
</template>

<script>
import  {signIn} from '../helpers/authService'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import {mapMutations} from 'vuex'


export default {
    data(){
        return{
            v$:null,
            userName:'',
            userPass:'',
            errorForm:'',
            isAuth:false,
        }
    },
    validations(){
        return{
            
            userName:{
                required,
                email},

            userPass:{
                required, 
                minLength: minLength(5)}
        }
    },
    created(){
        this.v$=useVuelidate()
    },

    mounted(){
        this.$nextTick=ui()
        
    },

    methods:{

        ...mapMutations(['addVisitante']),

        async authUser(){
            const isFormCorrect = await this.v$.$validate()

            if (isFormCorrect)
                if (await signIn(this.userName,this.userPass)){
                    const {r} =this.$route.query
                    //imcrementamos el número de visitantes 
                    this.$store.commit('addVisitante')
                    this.$router.push(r)
                }
                else{
                    this.errorForm='El usuario o la clave no es válida'
                    this.userPass=''
                }
                    
        }
    }
}
</script>