
import { defineAsyncComponent } from '@vue/runtime-core'

export const loaderMixin =  {
     components:{
         Loader:defineAsyncComponent(()=> import('../components/Loader')),
     },
    
    data:()=>({
        isLoading:true,
        timer:null
    }),

    watch:{
        isLoading(value){
            if (!value){
                clearTimeout(this.timer)
            }
        }
    },
    

    mounted(){
        this.timer=setTimeout(() => {
            if (this.isLoading){
                this.isLoading=false
                window.alert('Parece que algo ha fallado 😰')
            }
        }, 5000);
    }
}
