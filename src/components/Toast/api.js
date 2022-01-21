import Toast from './Toast'
import {mount} from '../../utils/mount'
//import eventBus from '../../utils/event-bus'
import Types from './types'

const Api=(app,globalOptions={})=>({
 
        show(message,options={}){
            let localOptions = { message, ...options }

            return mount(Toast, {
                props: { ...globalOptions, ...localOptions },
                app //Permite incluir el contexto que permite el acceso a elementos tales como provide/inject, $store.. y demás plugins
              })
        },
        clear(){
            console.log('clear',eventBus)
            app.$eventBus.$emit('toast-clear')
        },
        done(message,options={}){
            options.type = Types.DONE
            return this.show(message, options)
        },
        error(message,options={}){
            options.type = Types.ERROR
            return this.show(message, options)
        },
        info(message,options={}){
            options.type = Types.INFO
            return this.show(message, options)
        },
        warning(message,options={}){
            options.type =Types.WARNING
            return this.show(message, options)
        }
  
})

export default Api