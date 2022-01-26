
export default axios =>({

    isAuth(){
        return new Promise((resolve,reject)=>{
            const user=localStorage.getItem('user')
            resolve (user!==null)
        })
    },


    getCurrentUser(){
        const user=localStorage.getItem('user')
        console.log("Consultado",user)
        return Promise.resolve(user);
    },

    signOut(){
        return Promise.resolve(localStorage.removeItem('user'))
    },

    /*
        @login: loginModel
    */
    signIn(login){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {

                if (login.name==='error')
                reject('Imposible conectar con el servicio Auth')   

                if (login.name===login.pass){
                    localStorage.setItem('user',login.name)
                    console.log("Guardado",login.name)
                    resolve(true)
                }else
                    resolve(false)
            }, 1500)

        })
    }

})



// const isAuth=()=>{
//     return new Promise((resolve,reject)=>{
//         const user=miStorage.getItem('user');
//         resolve (user!==null)
//     })
// }


// const getCurrentUser=()=>{
//     const user=miStorage.getItem('user');
//     return Promise.resolve(user);
// }

// const signOut=()=>{
//     return Promise.resolve(miStorage.removeItem('user'))
// }

// /*
//     @login: loginModel
// */
// const signIn=(login)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {

//             if (login.name==='error')
//             reject('Imposible conectar con el servicio Auth')   

//             if (login.name===login.pass){
//                 miStorage.setItem('user',login.name)
//                 resolve(true)
//             }else
//                 resolve(false)
//         }, 1500)

//     })
// }


// export default isAuth

// export {signIn,signOut,getCurrentUser}

