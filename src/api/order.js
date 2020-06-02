import request from '../utils/request'




export default{
    addOrder(order_money,store_id,b_s_id,order_list,link_man,link_telephone,address_1,address_detail,token) {
        return request({
            url: `/order/addOrder`,
            method:'POST',
            params:{
                order_money,
                store_id,
                b_s_id,
                order_list:encodeURIComponent(JSON.stringify(order_list)),
                link_man,
                link_telephone,
                address_1,
                address_detail
                
            },
            headers:{
                'Authorization':token
            }
        })
    },
    getAllOrder(b_s_id,token) {
        return request({
            url: `/order/getAllOrder`,
            method:'GET',
            params:{
                b_s_id
            },
            headers:{
                'Authorization':token
            }
        })
    },
    getOrderByOrderId(order_id,token) {
        return request({
            url: `/order/getOrderItem`,
            method:'GET',
            params:{
                order_id
            },
            headers:{
                'Authorization':token
            }
        })
    },
    addOrderOne(order_money,store_id,b_s_id,order_list,link_man,link_telephone,address_1,address_detail,token) {
        return request({
            url: `/order/addOrderOne`,
            method:'POST',
            params:{
                order_money,
                store_id,
                b_s_id,
                order_list:encodeURIComponent(JSON.stringify(order_list)),
                link_man,
                link_telephone,
                address_1,
                address_detail
                
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