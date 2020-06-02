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
    getList(token) {
        return request({
            url: `/goods/getGoodsList`,
            method:'GET',
            
            headers:{
                'Authorization':token
            }
        })
    },
    aiGetGoods() {
        return request({
            url: `/recomm`,
            method:'GET',
        })
    },
    getGoodsById(goodsId,token) {
        return request({
            url: `/goods/getAGoods_Info`,
            method:'GET',
            params:{
                goods_id:goodsId
            },
            headers:{
                'Authorization':token
            }
        })
    },
    editAddress(form,token,userId,address_id){
        return request({
            url: `/address/updataAddressInfo`,
            method:'POST',
            params:{
                b_s_id:userId,
                address_id:address_id,
                address: form.province+form.city+form.county,
                address_detail: form.addressDetail,
                addresssee: form.name,
                telephone: form.tel,
                default_status: form.isDefault?0:1,
                postcode: form.postalCode,
            },
            headers:{
                'Authorization':token,
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
    },
    findOneAddress(addressId,token){
        return request({
            url: `/address/findOneAddressInfo`,
            method:'GET',
            params:{
                address_id:addressId,
            },
            headers:{
                'Authorization':token,
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
    },
    deleteAddress(addressId,token){
        return request({
            url: `/address/deleteAddress`,
            method:'POST',
            params:{
                address_id:addressId,
            },
            headers:{
                'Authorization':token,
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
    }
}