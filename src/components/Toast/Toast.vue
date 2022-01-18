<template>
    <transition>
        <div class="toast green white-text" :class="classToast"  >
            <i>{{icon}}</i>
            <span>{{message}}</span>
        </div>
   </transition>
</template>

<script>
export default {
    // name:'ToastBeer',
    
    // setup(props) {
    //     console.log(props)
    // }, 

    props:{
        message:String,
        icon:{
            type:String,
            default:'done',
            validator(value){
                return ['error','warning','done','info'].includes(value);

            }
        }
    },

    data(){
        return {
            colorBg:'',
            classToast:{
                active:false,
                'fade-out-fwd':false
            },
            _self:this
        }
    },
    
    emits:['ToastOpen','ToastClosed'],
   
    methods:{
        showToast(){
            this.classToast.active=true
            setTimeout(() => {
                this.classToast['fade-out-fwd']=true
                this.classToast.active=false    
                this.onToastClosed()
            }, 2000);
            this.onToastOpened()
        },
        onToastOpened(){
            this.$emit('ToastOpen')
        },
        onToastClosed(){
            console.log('Cerrado Padre')
            this.$emit('ToastClosed')
        }
    },

    mounted(){
        this.showToast()
    },
    
    

}
</script>

<style scoped>

</style>