
import { v4 as uuidv4 } from 'uuid';


class Event {

    constructor() {
      this.id=uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      this.queue = {}
      console.log('Construyendo EventBus',this.id)
    }
  
    /*
    * Registra un controlador para un evento
    */
    $on(name, callback) {
      this.queue[name] = this.queue[name] || []
      this.queue[name].push(callback)
    }

    /*
    * Elimina un controlador para un evento
    */
    $off(name, callback) {
      if (this.queue[name]) {
        for (var i = 0; i < this.queue[name].length; i++) {
          if (this.queue[name][i] === callback) {
            this.queue[name].splice(i, 1)
            break
          }
        }
      }
    }
  
    /*
    * Dispara el evento
    */
    $emit(name, data) {
      if (this.queue[name]) {
        this.queue[name].forEach(function (callback) {
          callback(data)
        })
      }
    }
  }
  
  export default new Event()