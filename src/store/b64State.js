

/*
* vuex-persistedstate https://github.com/robinvdvleuten/vuex-persistedstate/blob/3.x.x/src/index.ts
* Persist and rehydrate your Vuex state between page reloads.
* 
* Codifica/decodifica en b64 la entrada en el storage
*/

export default  {
  key: 'b64state_intrapanel' ,
  getState: (key, storage) => {
    const value = storage.getItem(key)

    try {
      return typeof value !== 'undefined'
        ? JSON.parse(window.atob(value))
        : undefined
    } catch (err) {}

    return undefined
  },

  setState: (key, state, storage) => {
    const value = JSON.stringify(state)

    return storage.setItem(key, window.btoa(value))
  }
}
