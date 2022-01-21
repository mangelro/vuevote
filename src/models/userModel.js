import { required, email, minLength } from '@vuelidate/validators'

export const model = {
  name: '',
  mail: '',
  pass: '',
}

export const modelValidations = () => ({
  model: {
    name: {
      required,
    },

    mail: {
      required,
      email,
    },

    pass: {
      required,
      minLength: minLength(5),
    },
  }
})
