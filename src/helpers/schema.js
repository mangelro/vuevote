
import schema from '../assets/data/preguntas.json'

export const getData = ()=>{
    return Promise.resolve(schema)
}

export const saveData =(data) =>{

    console.log(JSON.stringify(data))
    return Promise.resolve("200 Ok")

    //return Promise.reject("500 Unexpected error")

}

