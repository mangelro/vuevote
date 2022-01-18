
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

const signIn=(user,pass)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {

            if (user==='error')
            reject('Imposible conectar con el servicio Auth')   

            if (user===pass)
                miStorage.setItem('user',user)

            resolve(user===pass)            

        }, 500)

    })
}


export default isAuth

export {signIn,signOut,getCurrentUser}

