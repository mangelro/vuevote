
import Toast from './Toast'
import createProgrammaticToaster from './api'
import { registerComponentProgrammatic } from '../../utils/plugins'

const Plugin= (app, options={}) => {
    const methods=createProgrammaticToaster(app,options)

     registerComponentProgrammatic(app, 'toast', methods)
    //app.provide('toast', {name:'hola,mnudo'})
}
Toast.install=Plugin

export default Toast