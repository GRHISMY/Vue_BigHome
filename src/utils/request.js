import axios from 'axios'
import route from '../router'
import { Toast } from 'vant';

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // baseURL: "http://3195xi0487.qicp.vip",
    timeout:5000,
})

request.interceptors.request.use(config => {
    return config
},error =>{
    return Promise.reject(error)
})

request.interceptors.response.use(response =>{
    //response.data
    // console.log(response)
    if (response.data.code === 401) {
        Toast('401非法请求 请登录');
        route.push('/login')
    }
    return response
},error =>{
    if (error.response.status === 401) {
        route.push('/login')
    }
    return Promise.reject(error)
})

// request.get('/db.json').then(response =>{
//     console.log(response.data)
// })

export default request