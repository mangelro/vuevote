import Toast from './Toast'
import {mount} from '../../utils/mount'
import eventBus from '../../utils/event-bus'
import Types from './types'

const Api=(globalOptions={})=>{

    return{
        show(message,options={}){
            let localOptions = { message, ...options }

            const c = mount(Toast, {
                props: { ...globalOptions, ...localOptions }
              })

            return c
        },
        clear(){
            console.log('clear',eventBus)
            eventBus.$emit('toast-clear')
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
    }
}

export default Api