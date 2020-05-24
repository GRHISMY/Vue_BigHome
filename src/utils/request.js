import axios from 'axios'

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout:5000,
})

request.interceptors.request.use(config => {
    return config
},error =>{
    return Promise.reject(error)
})

request.interceptors.response.use(response =>{
    //response.data
    return response
},error =>{
    return Promise.reject(error)
})

// request.get('/db.json').then(response =>{
//     console.log(response.data)
// })

export default request