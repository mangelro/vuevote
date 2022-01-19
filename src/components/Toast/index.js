
import Toast from './Toast'
import createProgrammaticToaster from './api'
import { registerComponentProgrammatic } from '../../utils/plugins'

// let localVueInstance

// const ToastProgrammatic = {
//     open(params) {
        
//         //let parent
        
//        if (typeof params === 'string') {
//             params = {
//                 message: params
//             }
//         }

//         // const defaultParam = {
//         //     //position: config.defaultToastPosition || 'is-top'
//         //     position: 'is-top'
//         // }
        
//         // if (params.parent) {
//         //     parent = params.parent
//         //     delete params.parent
//         // }

//         // let slot
//         // if (Array.isArray(params.message)) {
//         //     slot = params.message
//         //     delete params.message
//         // }
        
//         //const propsData = merge(defaultParam, params)

//         const propsData = params

        
//        //const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : localVueInstance || VueInstance

       

//         let node={}
        
//         const app=document.getElementById('app')
        
//         const component = defineComponent({
//             extends:Toast,
//             methods:{
//                 onToastClosed(){
//                     console.log('Cerrado Hijo')
//                     node.destroy()
//                     app.removeChild(node.el)
//                 }
//             }
//         })
        
//         //const { vNode, destroy, el }
//         node = mount(component,{props:propsData,app:localVueInstance})
        
//         if (app)
//             app.appendChild(node.el)


//         // if (slot) {
//         //     component.$slots.default = slot
//         //     component.$forceUpdate()
//         // }

//         return component
//     }
// }


const Plugin= (app, options={}) => {
    const methods=createProgrammaticToaster(options)
    // localVueInstance = app
     registerComponentProgrammatic(app, 'toast', methods)
    //app.provide('toast', {name:'hola,mnudo'})
}

Toast.install=Plugin

export default Toast

// export {
//      Toast as BeerToast,
//      createProgrammaticToaster
// }