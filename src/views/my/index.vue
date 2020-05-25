<!--  -->
<template>
<div>
    <van-row>
        <div class="header" style="height: 171px;">
            <van-icon color="white" class="header-icon" name="contact" />
            <span @click="login">登录/注册</span>
        </div>
    </van-row>

    <van-row style="border-bottom: 1px solid rgba(185, 185, 185, 0.14);height: 15vw;line-height: 15vw;padding: 0 5vw;">
        <van-col span="8">我的订单</van-col>
        <van-col span="8"></van-col>
        <van-col @click="allOrder" style="text-align: right;color: #d4d4d4;" span="8">全部订单 ></van-col>
    </van-row>

    <van-grid :column-num="3" :border="false">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
    </van-grid>

    <van-row style="height: 30px; background-color: rgb(241, 246, 249);">
        
    </van-row>

   <van-row style="height: 15vw;line-height: 15vw;padding: 0 5vw;">

       <van-row @click="address"> 
            <van-col span="2"><van-icon name="star-o" /></van-col>
            <van-col span="12">地址</van-col>
            <van-col style="text-align: right;color: #d4d4d4;" span="8"> ></van-col>
        </van-row>

        <van-row>
            <van-col span="2"><van-icon name="star-o" /></van-col>
            <van-col span="12">aaa</van-col>
            <van-col style="text-align: right;color: #d4d4d4;" span="8"> ></van-col>
        </van-row>
            

        <van-row>
            <van-col span="2"><van-icon name="star-o" /></van-col>
            <van-col span="12">aaa</van-col>
            <van-col style="text-align: right;color: #d4d4d4;" span="8"> ></van-col>
        </van-row>

    </van-row>

    <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/goodscar" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

</div>
</template>

<script>
export default {
data() {
return {
    active:2,
    show: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' },
      ],
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods:{
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    login(){
        this.$router.push('/login');
    },
    allOrder(){
        this.$router.push('/allOrder');
    },
    address(){
        this.$router.push('/addresslist');
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.header{
    height: 16vw;
    background: url(../../assets/carbg.png) center 0  #f37d0f;
    background-size: auto 100%;
    padding: 3.2vw 0;
    display: flex;
    align-items: center;
}
.header .header-icon{
    border: .4vw solid #ffffff;
    background-color: #FFAA00;
    margin-left: 4vw;
    box-sizing: border-box;
    width: 14vw;
    height: 14vw;
    line-height: 16vw;
    text-align: center;
    border-radius: 50%;
}
.header > span{
    margin-left: 3.2vw;
    font-size: 15px;
    color: white;
    letter-spacing: .2vw;
}
</style>