
export default {
    
    namespaced:true,

    state:()=>({
        totalItems:0,
        currentPage:1,  
        //constante
        pageSize:10,

    }),

    mutations:{
        setTotalItems : (state,total)=> state.totalItems=total,
        setCurrentPage : (state,page)=> state.currentPage=page,
        //setPageSize : (state,size)=> state.pageSize=size,
    },

    getters:{
        getTotalPages : state =>  {
            return Math.floor(state.totalItems / state.pageSize)
        }
    }

}