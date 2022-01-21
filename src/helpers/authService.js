
const miStorage = window.localStorage

const isAuth=()=>{
    return new Promise((resolve,reject)=>{
        const user=miStorage.getItem('user');
        resolve (user!==null)
    })
}


const getCurrentUser=()=>{
    const user=miStorage.getItem('user');
    return Promise.resolve(user);
}

const signOut=()=>{
    return Promise.resolve(miStorage.removeItem('user'))
}

/*
    @login: loginModel
*/
const signIn=(login)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            if (login.name==='error')
            reject('Imposible conectar con el servicio Auth')   

            if (login.name===login.pass){
                miStorage.setItem('user',login.name)
                resolve(true)
            }else
                resolve(false)
        }, 1500)

    })
}


export default isAuth

export {signIn,signOut,getCurrentUser}

