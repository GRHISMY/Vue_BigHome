import request from '../utils/request'

const BASE_URI = '/dev-api'

// request.get('db.json').then(response => {
//     console.log(response.data)
// })

// request({
//     method:'get',
//     url:'http://118.31.62.242:7300/mock/5dbe3057dff13b681188e8a5/test'
// }).then(response => {
//     console.log('get2',response.data)
// })

// request({
//     method:'get',
//     url:'db.json'
// })

export default{
    getList(b_s_id,token) {
        return request({
            url: `/address/getAllAddress`,
            method:'POST',
            params:{
                b_s_id:b_s_id,
            },
            headers:{
                'Authorization':token
            }
        })
    },
}