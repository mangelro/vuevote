
import { required, email, minLength,helpers } from '@vuelidate/validators'

export const model = {
    name:'',
    pass:'',
    rememberMe:false,
 
}

export const validations= ()=>({
    model:{
        name:{
            required:helpers.withMessage('Debe indicar un correo electrónico válido',required),
            email:helpers.withMessage('No es un correo electrónico válido',email)
        },
        pass:{
            required, 
            minLength:helpers.withMessage('Al menos 5 caracteres',minLength(5))
            
        }
    }
})