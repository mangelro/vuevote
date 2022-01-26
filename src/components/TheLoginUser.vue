<template>
    <div v-if="currentUser">
        <span ><i class="outlined">account_circle</i>{{ currentUser }}</span>&nbsp;|&nbsp;
        <a href="./" @click="logOut" ><i class="small outlined">exit_to_app</i>Salir</a>
    </div>
</template>

<script>
export default {
    data:()=>({
        currentUser:null
    }),

    methods:{
        async logOut() {
            await this.$api.auth.signOut()

            //decremento el número de usuarios
            this.$store.commit('removeVisitante')
        },
    },

    // async created(){
    //     this.currentUser=await this.$api.auth.getCurrentUser()
    //     console.log("created",this.currentUser)
    // },
    
    // async mounted(){
    //     this.currentUser=await this.$api.auth.getCurrentUser()
    //     console.log("mounted",this.currentUser)
    // },

    watch:{
        /*
        * beforeRouteLeave must be defined on the component that is mapped to a path.
        * Don´t work at sub-components
        */
        async '$route'(){
            this.currentUser=await this.$api.auth.getCurrentUser()
        }
    }

}
</script>

<style>

</style>