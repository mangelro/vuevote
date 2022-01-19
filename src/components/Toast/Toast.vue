<template>
     <transition>
        <div class="toast white-text active" :class="classToast" role="alert" v-show="isActive">
            <i>{{type}}</i>
            <span>{{message}}</span>
        </div>
   </transition>
</template>

<script>
import eventBus from '../../utils/event-bus'
import {removeElement} from '../../utils/mount'
import Positions from './positions'
import Types from './types'


export default {

    props:{
        message:{
            type:String,
            required:true
        },
        
        type:{
            type:String,
            default:Types.DONE,
            validator(value){
                return Object.values(Types).includes(value)
            }
        },
        position:{
            type:String,
            default:Positions.BOTTOM,
            validator(value){
                 return Object.values(Positions).includes(value)
            }
        },
        duration: {
            type: [Number, Boolean],
            default: 2000
        },
        onClose: {
            type: Function,
            default: () => {}
        },
    },

    data(){
        return {
            parentTop: null,
            colorBg:'',
            isActive:false,
            classToast:{
                top:false,
                pink : false,
                orange :false,
                green :false,
                blue :false,
            },
        }
    },
    
    // computed:{
    //     transition() {
    //         return {
    //             enter: 'bounceIn',
    //             leave: 'fadeOut'
    //         }
    //     }
    // },

    methods:{
        _createParents() {
            this.parentTop = document.body
        },
        showToast(){

            this.parentTop.insertAdjacentElement('afterbegin', this.$el)

            this.classToast.top = this.position==='top'
            this.classToast.pink= this.type==='error'
            this.classToast.orange= this.type==='warning'
            this.classToast.green= this.type==='done'
            this.classToast.blue= this.type==='info'


            this.isActive=true

            setTimeout(() => {
                this.close()
               }, this.duration);
   
        },
        close(){
            this.isActive=false   
            setTimeout(() => {
                this.onClose.apply(null, arguments)
                removeElement(this.$el)
            }, 1000) 
        }
   
    },
    beforeUnmount() {
        eventBus.$off('toast-clear', this.close)
    },
    beforeMount(){
      this._createParents()  
    },
    mounted(){
        this.showToast()
        console.log('mounted',eventBus)
        eventBus.$on('toast-clear', this.close)
    }

}
</script>

<style>

.v-enter-active
{
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both !important;
}


.v-leave-active
{
    animation: slide-out-blurred-top 0.4s cubic-bezier(0.755, 0.050, 0.855, 0.060) both!important;
}

/**
 * ----------------------------------------
 * animation slide-in-blurred-top
 * ----------------------------------------
 */
@keyframes slide-in-blurred-top {
  0% {
    transform: translate(-50%,-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translate(-50%,0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
/**
 * ----------------------------------------
 * animation slide-out-blurred-top
 * ----------------------------------------
 */
@keyframes slide-out-blurred-top {
  0% {
    transform: translate(-50%,0) scaleY(1) scaleX(1);
    transform-origin: 50% 0%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%,-1000px) scaleY(2) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
}
</style>