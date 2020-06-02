<!-- -->
<template>
  <div class="shop-page" id="shopPage">
        <div class="title-box">
            <header class="title">购物车</header>
            <span class="manage-btn" v-if="!isEdit" @click="isEdit = true">管理</span>
            <span class="manage-btn" v-if="isEdit" @click="editBuycar">完成</span>
        </div>
        <ul class="outer-box">
            <li class="shop-box" :key="index" v-for="(shop,index) in json">
                <div class="clearfix shop-title"><img :src="shop.select ? activateIconPath: baseIconPath" class="fl checkImg" @click="shopSelect(index)"/><p class="fl shopTitle">{{shop.sj}}</p><img src="../../assets/icon_arrow_right.png" class="fl arrowImg"/></div>
                <div class="clearfix goods-box" :key="goodsIndex" v-for="(goods,goodsIndex) in shop.items">
                    <img :src="goods.select ? activateIconPath:baseIconPath" class="fl goodsCheck" @click="goodsSelect(index,goodsIndex)"/>
                    <img :src="require('../../assets/goods/'+goods.img)" class="goodsImg fl"/>
                    <div class="goods-detail fl">
                        <p class="goods-title">{{goods.cp}}</p>
                        <div class="clearfix">
                            <p class="price fl">{{goods.jg}}</p>
                            <div class="clearfix number-box fr">
                                <span class="fl reduceIcon" @click="changeNumber(-1,index,goodsIndex)">-</span>
                                <input type="number" v-model="goods.sl" class="fl goods-number"/>
                                <span class="fl plusIcon" @click="changeNumber(1,index,goodsIndex)">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        
        <div class="bottom-action clearfix">
            <img  :src="all_select ? activateIconPath:baseIconPath" class="all-select fl" @click="allSelect()"/>
            <button class="fr buy-btn" @click="buy" v-if="isEdit == false">结算</button>
            <p class="fr count-number" v-if="isEdit == false">合计：<span>{{count.toFixed(2)}}</span></p>
            <button class="delete-btn fr" @click="deleteBtn()" v-if="isEdit == true">删除</button>
        </div>

       <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/goodscar" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
import buycarApi from '../../api/buyCar';
import orderApi from '../../api/order';
import { Toast } from "vant";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        actualData:[],
        toJieKouData:[],
      active:1,
                baseIconPath:require('../../assets/icon_radio.png'),
                activateIconPath:require('../../assets/icon_radio_checked.png'),
                // imgURL : require(`@/assets/mapPoint/blue.png`);
                isEdit: false,
                count: 0,
                all_select: false,
                json:[
                    {
                        sj:'买买买商城',
                        select:false,
                        show:true,
                        items:[
                            {animateAn:'',
                            animate:'',
                            id:1,
                            cp:'买不完，买不尽，买了还想买的纸巾，用了还能用的纸巾',
                            jg:100,
                            sl:1,
                            select:false,
                            img:require('../../assets/FFF6.png')
                        },
                            {animateAn:'',animate:'',id:2,cp:'买不完，买不尽，买了还想买的湿纸巾，用了还能用的湿纸巾，想买多少就买多少，多多益善',jg:120,sl:5,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.88'}
                        ]
                    },
                    {
                        sj:'花花花专营店',
                        select:false,
                        show:true,
                        items:[
                            {animate:'',id:1,cp:'玫瑰花，茉莉花，牵牛花，紫荆花，牡丹花，南瓜花，花钱的花',jg:20.3,sl:1,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.34'},
                            {animate:'',id:2,cp:'各种花，花不尽的花，花了还有的花，你要哪种花',jg:18.8,sl:2,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.88'},
                            {animate:'',id:3,cp:'花啦啦啦~我要面朝大海，春暖花开，花啦啦啦~',jg:88.8,sl:6,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.88'}
                        ]
                    },
                    {
                        sj:'吃吃吃旗舰店',
                        select:false,
                        show:true,
                        items:[
                            {animate:'',id:1,cp:'想吃啥？火锅，椰子鸡，串串锅，烧烤，海鲜，蒸鱼，牛排，大猪蹄子',jg:20,sl:1,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.88'},
                            {animate:'',id:2,cp:'还想吃啥？红酒，白酒，起泡酒，威士忌，黄酒，青梅酒，杨梅酒，药酒，米酒，鸡尾酒~~~',jg:88,sl:2,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.23'},
                            {animate:'',id:3,cp:'还能吃啥？沙拉，苹果，草莓，牛油果，樱桃，青枣，葡萄，提子，芒果，香蕉，龙眼，荔枝',jg:30,sl:3,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.68'}
                        ]
                    }
                ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      buy(){
          
          var _this = this;
                    for(var s = 0; s < _this.json.length; s++){
                        if(_this.json[s].select == true){
                            
                            this.actualData = (_this.json[s].items)
                        }else {
                            for(var o = 0; o < _this.json[s].items.length; o++){
                                if(_this.json[s].items[o].select == true){
                                    this.actualData.push(_this.json[s].items[o])
                                }
                            }
                        }
                    }
            if(this.actualData.length == 0){
                Toast("请选择商品")
            }else{
                
                // console.log("AAAAAA",this.actualData)
                    // console.log("toJieKouData ",this.toJieKouData)
                
                for(var i =0; i < _this.actualData.length; i++){
                    // var orderItem = new FormData
                    // orderItem.append("goods_id",this.actualData[i].id)
                    // orderItem.append("goods_sum",this.actualData[i].sl)
                    // orderItem.append("goods_money",this.actualData[i].jg)
                    var orderItem = {
                    goods_id:null,
                    goods_sum:null,
                    goods_money:null
                }

                    orderItem.goods_id = _this.actualData[i].id
                    orderItem.goods_sum = _this.actualData[i].sl;
                    orderItem.goods_money = _this.actualData[i].jg
                    console.log("orderItem ",orderItem)

                    // console.log("actualData  ",this.actualData)
                    this.toJieKouData.push(orderItem)
                }

                this.$router.push(`/carChooseAddress/${this.count}/${JSON.stringify(this.toJieKouData)}/${"true"}`);
                // localStorage.setItem("data",JSON.stringify(this.toJieKouData))
                // console.log("AAAAAA",this.toJieKouData)
                // const token = localStorage.getItem("TOKEN")
                // const userId = JSON.parse(localStorage.getItem("user")).bSId
                // var toJieKouData = JSON.stringify()
                // orderApi.addOrder(this.count,1,userId,this.toJieKouData,token).then(response =>{
                //     const resp = response.data
                //     // console.log(resp)
                // })


            }
            this.toJieKouData = []

            this.actualData = []
            
      },
      waitUpdatabuyCar(item,carIndex){
            const token = localStorage.getItem("TOKEN")
                //   console.log("AAAAAAA ",this.json[item].items[carIndex])
                  buycarApi.editBuyCar(this.json[item].items[carIndex].id,1,this.json[item].items[carIndex].sl,this.json[item].items[carIndex].jg,token).then(response=>{
                    const resp = response.data
                    if(resp.code == 0){
                    
                    // this.$router.push(`/goodscar`)
                    }
                    return resp.code
                })
      },
      async editBuycar(){
          this.isEdit = false 
          for(var item in this.json){
              for(var carIndex in this.json[item].items){
                await this.waitUpdatabuyCar(item,carIndex)
              }
            //   console.log(this.json)
          }
          Toast("编辑成功")
          setTimeout(()=>{
              this.fetchData();
          },1000)
          
      },

      fetchData(){
      const token = localStorage.getItem("TOKEN")
      buycarApi.getList(token).then(response =>{
          const resp = response.data
        //   console.log("AAA ",resp)
          this.json = resp.data
      })
    },

    shopSelect:function (i) {
                    var _this = this;
                    _this.json[i].select = !_this.json[i].select;
                    for(var t = 0; t<_this.json[i].items.length; t++){
                        _this.json[i].items[t].select = _this.json[i].select;
                    }
                    for(var n=0; n< _this.json.length; n++){
                        if(_this.json[n].select == false){
                            _this.all_select = false;
                            _this.sumPrice();
                            return
                        }else {
                            _this.all_select = true;
                        }
                    }
                    _this.sumPrice();
                },
                goodsSelect:function (i,g) {
                    var _this = this;
                    _this.json[i].items[g].select = !_this.json[i].items[g].select;
                    for(var t = 0; t<_this.json[i].items.length; t++){
                        if(_this.json[i].items[t].select == false){
                            _this.json[i].select = false;
                            _this.all_select = false;
                            _this.sumPrice();
                            return
                        }else {
                            _this.json[i].select = true;
                        }
                    }
                    for(var n=0; n<_this.json.length; n++){
                        if(_this.json[n].select == false){
                            _this.all_select = false;
                            _this.sumPrice();
                            return
                        }else {
                            _this.all_select = true;
                        }
                    }
                    _this.sumPrice();
                },
                allSelect:function () {
                    var _this = this;
                    _this.all_select = !_this.all_select;
                    for(var i=0; i< _this.json.length; i++){
                        _this.json[i].select = _this.all_select;
                        for(var t=0; t< _this.json[i].items.length; t++){
                            _this.json[i].items[t].select = _this.all_select;
                        }
                    }
                    _this.sumPrice();
                },
                changeNumber:function (num,i,g) {
                    var _this = this;
                    if( _this.json[i].items[g].sl == 1){
                        if(num == -1){
                            _this.json[i].items[g].sl = 1;
                        }else {
                            _this.json[i].items[g].sl = _this.json[i].items[g].sl + num;
                        }
                    }else {
                        _this.json[i].items[g].sl = _this.json[i].items[g].sl + num;
                    }
                    _this.sumPrice();
                },
                sumPrice:function () {
                    var _this = this;
                    var countNum = 0;
                    for(var s = 0; s < _this.json.length; s++){
                        for(var o = 0; o < _this.json[s].items.length; o++){
                            if(_this.json[s].items[o].select == true){
                                countNum += (parseInt(_this.json[s].items[o].jg) * parseInt(_this.json[s].items[o].sl));
                            }
                        }
                    }
                    _this.count = countNum;
                },
                deleteBtn:function () {
                    // console.log("AAA ",this.json)
                    // if(this.json[0].select){
                    //     alert("删除店铺")
                    // }else{
                    //     const token = localStorage.getItem("TOKEN")
                        
                    //     alert("删除商品")
                    // }

                    var _this = this;
                    for(var s = 0; s < _this.json.length; s++){
                        if(_this.json[s].select == true){
                            const token = localStorage.getItem("TOKEN")
                            buycarApi.deleteBuyCar(1,token)
                            _this.json.splice(s,1)
                        }else {
                            for(var o = 0; o < _this.json[s].items.length; o++){
                                if(_this.json[s].items[o].select == true){
                                    console.log(_this.json[s].items[o].id)
                                    const token = localStorage.getItem("TOKEN")
                                    buycarApi.deleteBuyCarItem(_this.json[s].items[o].id,1,token).then(response =>{
                                        const resp = response.data
                                        if(resp.code==0){
                                            Toast("删除成功")
                                            // _this.json[s].items.splice(o,1)
                                            this.fetchData()

                                        }
                                    })
                                }
                            }
                        }
                    }
                }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchData();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
body {
    background-color: #F6F6F8;
    color: #555;
    font-size: 14px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
td, th, caption {
    font-size: 14px;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 100%;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}
a {
    color: #555;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
img {
    border: none;
    vertical-align: middle;
}
ol, ul, li {
    list-style: none;
}
input, textarea, select, button {
    font: 14px "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    outline:none;
}
table {
    border-collapse: collapse;
}
html {
    overflow-y: scroll;
}

input[type=number] {
    -moz-appearance:textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.clearfix:before,
.clearfix:after {
    content: " ";
    display: inline-block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    *zoom: 1;
}

.clearfix:after{
            display: block;
            clear: both;
            content: "";
            visibility: hidden;
            height: 0;
        }
        .clearfix{
            zoom:1;
        }
        .fl{
            float: left;
        }
        .fr{
            float: right;
        }
        img{
            display: block;
        }
        .shop-page{
            width: 100%;
        }
        .title-box{
            width: 100%;
            height: 100px;
            background: orange;
            position: fixed;
            top: 0;
            left: 0;
        }
        .title-box .title{
            width: 100%;
            text-align: center;
            line-height: 100px;
            font-size: 16px;
        }
        .title-box .title i{
            font-size: 14px;
            font-style: normal;
        }
        .manage-btn{
            position: absolute;
            top: 42px;
            right: 30px;
            font-size: 16px;
            line-height: 16px;
        }
        .outer-box{
            padding: 100px 0 50px;
        }
        .shop-box{
            margin: 20px 12px;
            border-radius: 10px;
            background: #fff;
        }
        .shop-title{
           padding: 10px 0;
        }
        .shop-title .checkImg{
            width: 20px;
            height: 20px;
            margin-left: 10px;
        }
        .shop-title .shopTitle{
            font-size: 14px;
            line-height: 20px;
            margin: 0 10px;
        }
        .shop-title .arrowImg{
            width: 18px;
            height: 18px;
            margin: 1px 0;
        }
        .goods-box{
            width: 100%;
            padding-bottom: 20px;
        }
        .goodsCheck{
            width: 20px;
            height: 20px;
            margin: 45px 10px;
        }
        .goodsImg{
            width: 110px;
            height: 110px;
        }
        .goods-detail{
            margin-left: 10px;
            width: calc(100% - 160px);
            font-size: 12px;
        }
        .goods-title{
            width: 100%;
            color: #666;
            line-height: 18px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .parameter{
            margin: 5px 0;
        }
        .price{
            font-size: 14px;
            color: orange;
        }
        .number-box{
            border: 1px solid #ccc;
            width: 102px;
            height: 24px;
            margin-right: 20px;
        }
        .reduceIcon,.plusIcon{
            display: block;
            width: 30px;
            height: 24px;
            line-height: 24px;
            text-align: center;
        }
        .goods-number{
            display: block;
            width: 40px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            border: 0;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
        }
        .bottom-action{
            width: 100%;
            height: 50px;
            position: fixed;
            left: 0;
            bottom: 50px;
            background: #fff;
        }
        .all-select{
            width: 20px;
            height: 20px;
            margin: 15px 22px;
        }
        .buy-btn{
            background: orange;
            padding: 6px 20px;
            margin: 10px;
            text-align: center;
            border: 0;
            border-radius: 10px;
            color: #fff;
        }
        .count-number{
            padding:18px 0;
        }
        .count-number span{
            color: orange;
            font-size: 16px;
        }
        .delete-btn{
            padding: 6px 20px;
            margin: 10px;
            text-align: center;
            border: 1px solid orange;
            border-radius: 10px;
            background: #fff;
        }


</style>