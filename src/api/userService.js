
export default axios =>({

    

    getUsers(){
        return axios.get('/user?limit=10')
    },

    getUserById(id){
        return axios.get(`/user/${id}`)
    }
})