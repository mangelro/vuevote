
export default axios =>({

    /** 
    *   @description Retorna una colección de usuarios
    *
    *   @param {number} limit Número de página    
    *   @param {number} page Tamaño de la página
    *   
    *   @return {object} Usuarios `{
    *                                data: Array(Model)
    *                                total: number(total items in DB)
    *                                page: number(current page)
    *                                limit: number(number of items on page)
    *                               }`
    * 
    *   
    * 
    */
    getUsers: async (page=1,limit=10)=>(await axios.get(`/user?page=${page}}&limit=${limit}`)).data,


    getUserById: async (id)=> (await axios.get(`/user/${id}`)).data,
 
})