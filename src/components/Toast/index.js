import {defineComponent } from 'vue'
import {mount} from '../../utils/mount'

import Toast from './Toast'

//import config, { VueInstance } from '../../utils/config'
//import { merge } from '../../utils/helpers'

import { use, registerComponentProgrammatic } from '../../utils/plugins'

let localVueInstance

const ToastProgrammatic = {
    open(params) {
        
        //let parent
        
       if (typeof params === 'string') {
            params = {
                message: params
            }
        }

        // const defaultParam = {
        //     //position: config.defaultToastPosition || 'is-top'
        //     position: 'is-top'
        // }
        
        // if (params.parent) {
        //     parent = params.parent
        //     delete params.parent
        // }

        // let slot
        // if (Array.isArray(params.message)) {
        //     slot = params.message
        //     delete params.message
        // }
        
        //const propsData = merge(defaultParam, params)

        const propsData = params

        
       //const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance

       

        let node={}
        
        const app=document.getElementById('app')
        
        const component = defineComponent({
            extends:Toast,
            methods:{
                onToastClosed(){
                    console.log('Cerrado Hijo')
                    node.destroy()
                    app.removeChild(node.el)
                }
            }
        })
        
        //const { vNode, destroy, el }
        node = mount(component,{props:propsData,app:localVueInstance})
        
        if (app)
            app.appendChild(node.el)


        // if (slot) {
        //     component.$slots.default = slot
        //     component.$forceUpdate()
        // }

        return component
    }
}


const Plugin= {
    install: (app, options) => {
        console.log(app.config.globalProperties)
        localVueInstance = app
        registerComponentProgrammatic(app, 'toast', ToastProgrammatic)

        //app.provide('toast', {name:'hola,mnudo'})
    }
}

use(Plugin)

export default Plugin

 export {
     ToastProgrammatic,
     Toast as BeerToast
}