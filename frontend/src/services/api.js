import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://event-management-app-api.herokuapp.com/'
})

export default api;