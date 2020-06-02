<!--  -->
<template>
<div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />
    <div v-for="(order,index) in oderItem" :key="index">
        <van-card
        :num="order.num"
        :price="order.price"
        desc="描述信息"
        :title="order.title"
        :thumb="require('../../assets/goods/'+order.thumb)"
    />

        <van-row style="height: 30px; background-color: rgb(241, 246, 249);">
        
       </van-row>
    </div>


    
    
</div>
</template>

<script>
import orderApi from '../../api/order';
export default {
data() {
return {
    oderItem:[],
    order_money:0,
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.fetchData();
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods:{
    fetchData(){
        const token = localStorage.getItem("TOKEN")
        const orderId = this.$route.params.orderId
        this.order_money = this.$route.params.order_money
        orderApi.getOrderByOrderId(orderId,token).then(response =>{
            const resp = response.data
            this.oderItem = resp.data
            console.log(resp.data)
        })
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(){
        console.log("submit")
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>