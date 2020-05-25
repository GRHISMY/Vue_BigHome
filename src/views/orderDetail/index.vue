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
    <div>
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />

        <van-row style="height: 30px; background-color: rgb(241, 246, 249);">
        
       </van-row>
    </div>
    <div>
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />

        <van-row style="height: 30px; background-color: rgb(241, 246, 249);">
        
       </van-row>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    
</div>
</template>

<script>
export default {
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods:{
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