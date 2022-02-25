/**
 * Módulo de paginación de usuarios
 * 
 * 
 * 
 * 
 */
export default {
    
    namespaced:true,

    state:()=>({
        totalItems:0,
        currentPage:1,  
        pageSize:7, //constante no posee mutation
    }),

    mutations:{
        setTotalItems : (state,total)=> state.totalItems=total,
        setCurrentPage : (state,page)=> state.currentPage=page,
        
    },

    getters:{
        getTotalPages : state =>  Math.floor(state.totalItems / state.pageSize)
    }

}