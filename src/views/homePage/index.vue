<!--  -->
<template>
<div>
        <van-nav-bar style="margin-top: 38px;" title="电商联盟"  right-text="搜索分类" @click-right="onClickRight">
           
        </van-nav-bar>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
       <van-row class="van-hairline--bottom" style="height: 60px;">
        <van-col style="text-align: center;padding-top: 10px;" span="8"><van-icon color="red" style="padding: 6px;" name="passed" />自营品牌</van-col>
        <van-col style="text-align: center;padding-top: 10px;" span="8"><van-icon color="red" style="padding: 6px;" name="passed" />无忧退货</van-col>
        <van-col style="text-align: center;padding-top: 10px;" span="8"><van-icon color="red" style="padding: 6px;" name="passed" />快速退款</van-col>
       </van-row>
       <van-row style="height: 30px; background-color: rgb(241, 246, 249);">
        
       </van-row>

        

       <van-row>
           <p style="text-align: center;font-size: 20px;">阳光华丽旗舰店</p>
           <van-grid :border="false" :column-num="2" >
                <van-grid-item v-for="(item,index) in goodsList " :key="index">
                    <!-- <img @click="gotoGI(item.goods_id)" :src="require(item.goods_photo_path_infoList[0].path_name.toString())" /> -->
                    <van-image @click="gotoGI(item.goods_id)" :src="require('../../assets/goods/'+imgList[index])" />
                </van-grid-item>
            </van-grid>
       </van-row>

       <van-row >
           <img style="height: 180px;width: 100%;" src="../../assets/goods/bar.png" />
       </van-row>

       <van-row style="height: 30px; background-color: rgb(241, 246, 249);">
        
       </van-row>

       <van-row>
           <p style="text-align: center;font-size: 20px;">aaa</p>
           <van-grid :border="false" :column-num="2" >
                <van-grid-item v-for="value in 6" :key="value">
                    <van-image @click="gotoGI(value)" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                </van-grid-item>
            </van-grid>
       </van-row>

       <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/goodscar" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
       </van-tabbar>
</div>
</template>

<script>
import goodsApi from '../../api/goods'
export default {
data() {
return {
    active: 0,
    goodsList:[],
    imgList:[],
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
    onClickRight(){
        this.$router.push('/classify')
    },
    gotoGI(value){
        console.log(value)
        this.$router.push('/goodsinfo')
    },
    fetchData() {
      const token = localStorage.getItem("TOKEN")
    //   const userId = JSON.parse(localStorage.getItem("user")).bSId
      // console.log(token)
      // console.log(userId)
      goodsApi.getList(token).then(response =>{
        const resp = response.data;
        this.goodsList = resp.data
        
        for(var index in this.goodsList){
            
            this.imgList.push(this.goodsList[index].goods_photo_path_infoList[0].path_name.toString())
        }

        console.log(this.imgList)
      })

      
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  
  
</style>


