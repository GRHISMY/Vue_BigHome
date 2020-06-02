import request from '../utils/request'




export default{
    getList(token) {
        return request({
            url: `/car/getCar`,
            method:'GET',
            
            headers:{
                'Authorization':token
            }
        })
    },
    addBuyCar(goodsId,store_id,goods_sum,goods_money,token) {
        return request({
            url: `/car/addcar`,
            method:'POST',
            params:{
                goods_id:goodsId,
                store_id,
                goods_sum,
                goods_money
            },
            headers:{
                'Authorization':token
            }
        })
    },
    editBuyCar(goodsId,store_id,goods_sum,goods_money,token){
        return request({
            url: `/car/editCar`,
            method:'POST',
            params:{
                goods_id:goodsId,
                store_id,
                goods_sum,
                goods_money
            },
            headers:{
                'Authorization':token
            }
        })
    },
    deleteBuyCarItem(goodsId,store_id,token){
        return request({
            url: `/car/deleteItem`,
            method:'POST',
            params:{
                goods_id:goodsId,
                store_id
            },
            headers:{
                'Authorization':token
            }
        })
    },
    deleteBuyCar(store_id,token){
        return request({
            url: `/car/deleteStore`,
            method:'POST',
            params:{
                store_id
            },
            headers:{
                'Authorization':token
            }
        })
    },
}