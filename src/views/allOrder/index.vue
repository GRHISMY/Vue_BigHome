<!--  -->
<template>

  <div class="shop-page" id="shopPage">
            <van-nav-bar
      title="订单列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />
        <ul class="outer-box">
            <li class="shop-box" :key="index" v-for="(shop,index) in json">
                <!-- <div class="clearfix shop-title"><img :src="shop.select ? activateIconPath: baseIconPath" class="fl checkImg" @click="shopSelect(index)"/><p class="fl shopTitle">{{shop.sj}}</p><img src="../../assets/icon_arrow_right.png" class="fl arrowImg"/></div>
                <div class="clearfix goods-box" :key="goodsIndex" v-for="(goods,goodsIndex) in shop.items">
                    <img :src="goods.select ? activateIconPath:baseIconPath" class="fl goodsCheck" @click="goodsSelect(index,goodsIndex)"/>
                    <img :src="goods.img" class="goodsImg fl"/>
                    <div class="goods-detail fl">
                        <p class="goods-title">{{goods.cp}}</p>
                        <p class="parameter">{{goods.kg}}kg</p>
                        <div  class="clearfix">
                            <p class="price fl">{{goods.jg}}</p>
                            <div class="clearfix number-box fr">
                                <span class="fl reduceIcon" @click="changeNumber(-1,index,goodsIndex)">-</span>
                                <input type="number" v-model="goods.sl" class="fl goods-number"/>
                                <span class="fl plusIcon" @click="changeNumber(1,index,goodsIndex)">+</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="goodsIndex+1 == shop.items.length" class="bottom-action clearfix">
                        <button  style="margin-top: 29px;" class="fr buy-btn" >结算</button>
                        <p style="margin-top: 16px;" class="fr count-number" v-if="isEdit == false">合计：<span>{{count.toFixed(2)}}</span></p>
                        <button class="delete-btn fr" @click="deleteBtn()" v-if="isEdit == true">删除</button>
                    </div>
                    
                </div>
                
                <van-row style="height: 30px; background-color: rgb(241, 246, 249);"></van-row> -->

                <div class="clearfix shop-title"><p class="fl shopTitle">{{shop.sj}}</p><img src="../../assets/icon_arrow_right.png" class="fl arrowImg"/></div>
                <div class="clearfix goods-box" :key="goodsIndex" v-for="(goods,goodsIndex) in shop.items">
                    <img :src="goods.img" class="goodsImg fl"/>
                    <div class="goods-detail fl">
                        <p class="goods-title">{{goods.cp}}</p>
                        <p class="parameter">{{goods.kg}}kg</p>
                        <div  class="clearfix">
                            <p class="price fl">{{goods.jg}}</p>
                            <div class="clearfix number-box fr">
                                <span class="fl reduceIcon" @click="changeNumber(-1,index,goodsIndex)">-</span>
                                <input type="number" v-model="goods.sl" class="fl goods-number"/>
                                <span class="fl plusIcon" @click="changeNumber(1,index,goodsIndex)">+</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="goodsIndex+1 == shop.items.length" class="bottom-action clearfix">
                        <button @click="showOrderDetail(shop)"  style="margin-top: 29px;" class="fr buy-btn" >查看</button>
                        <p style="margin-top: 16px;" class="fr count-number" v-if="isEdit == false">合计：<span>{{count.toFixed(2)}}</span></p>
                        <button class="delete-btn fr" @click="deleteBtn()" v-if="isEdit == true">删除</button>
                    </div>
                    
                </div>
                
                <van-row style="height: 30px; background-color: rgb(241, 246, 249);"></van-row>
            </li>
            
        </ul>
        
        

       <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/goodscar" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
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
                            {animateAn:'',animate:'',id:1,cp:'买不完，买不尽，买了还想买的纸巾，用了还能用的纸巾',jg:100,sl:2,select:false,
                                img:require('../../assets/FFF6.png'),kg:'0.35'},
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
      showOrderDetail(shop){
          console.log(shop)
          this.$router.push('/orderdetail');
      },
      onClickLeft() {
      this.$router.go(-1);
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
                    var _this = this;
                    for(var s = 0; s < _this.json.length; s++){
                        if(_this.json[s].select == true){
                            _this.json.splice(s,1)
                        }else {
                            for(var o = 0; o < _this.json[s].items.length; o++){
                                if(_this.json[s].items[o].select == true){
                                    _this.json[s].items.splice(o,1)
                                }
                            }
                        }
                    }
                }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
            padding: 10px 0 50px;
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