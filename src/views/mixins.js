
import { defineAsyncComponent } from '@vue/runtime-core'

export const loaderMixin =  {
     components:{
         Loader:defineAsyncComponent(()=> import('../components/Loader')),
     },
    
    data:()=>({
        isLoading:true,
    }),
    
    mounted(){
        setTimeout(()=>{this.isLoading=false},700)
    },

}
