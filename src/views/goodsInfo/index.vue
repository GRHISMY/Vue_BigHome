<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img width="100%" height="100%" src="../../assets/FFF.png" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="detail_decoration bg_red" id="priceSpec" style>
      <div class="price" id="specPrice">
        ¥
        <em>699</em>
        <span class="price_decimals">.00</span>
      </div>
      <div class="msg">
        <div class="text" id="ysPrice">
          <span id="ysTips"></span>
          <del class="old_price" id="specOldPrice" style>¥749.00</del>
        </div>
        <div class="text" id="specPriceIcon">
          <span class="logo type_seckill">品牌闪购</span>
        </div>
      </div>
      <!-- <div class="countdown" id="specTimer" style>
        <p class="countdown_text">距闪购结束还剩</p>
        <p class="countdown_nums" id="timeLimit">
          <span class="box">14</span>:
          <span class="box">19</span>:
          <span class="box">46</span>
        </p>
      </div>-->
    </div>

    <div class="buy_area new_ver" id="buyArea">
      <div id="priceWrap">
        <div class="price_wrap" id="priceBlock" style="display: none;">
          <span class="hide" id="priceTitle"></span>
          <span class="price large_size" id="priceSale">
            ¥
            <em>699</em>
            <span class="price_decimals">.00</span>
          </span>
          <span class="old_price" id="priceLineThrough" style="display:none;"></span>
          <span class="price color_fresh" id="zsPriceTag" style="display:none;"></span>
          <i class="mod_tag" style="display:none;">
            <img
              src="//img11.360buyimg.com/jdphoto/jfs/t5857/103/5136913465/23872/dd568cf5/595a3043N72498825.png"
            />
          </i>
          <i class="sams_info" style="display:none;"></i>
          <span class="price color_fans" id="fansPriceTag" style="display:none;"></span>
          <span class="mod_fans_price" style="display:none;"></span>
          <span class="price color_sams" id="samPriceTag" style="display:none;"></span>
          <span class="mod_sams_price" style="display:none;"></span>
          <i class="sams_info" style="display:none;"></i>
          <span class="price color_plus" id="pricePlus" style="display:none;"></span>
          <span class="mod_plus_price" style="display:none;"></span>
          <span class="price color_newer" id="priceNewer" style="display:none;"></span>
          <span class="mod_newer_price" style="display:none;">新人价</span>
          <span class="price color_student" id="priceStudent" style="display:none;"></span>
          <span class="mod_student_price" style="display:none;">学生价</span>
          <i class="tip_info" style="display: none;"></i>
          <div class="mod_sign_tip bor" id="priceDis" style="display: none"></div>
          <span class="group" id="priceGroupStyle" style="display: none"></span>
          <span class="col_right"></span>
          <span
            class="J_ping col_right"
            id="cheaperNotice"
            report-pageparam="100006689227"
            report-eventid="MProductdetail_PriceNotice"
            report-eventlevel="5"
          >
            <span class="cheaper_info">降价提醒</span>
          </span>
          <!-- span class="col_right hide" id="headEval" ptag="7001.1.26">
                    <span class="sale_num">评价：<b id="evalNo1"></b>条</span>
          </span-->
        </div>
        <div class="price_tip" id="storePriceTip1" style="display: none;">
          选择门店后可确认该商品价格
          <i class="tip_info"></i>
        </div>
        <div class="price_tip" id="storePriceTip2" style="display: none;">
          该价格为当前选择门店价格
          <i class="tip_info"></i>
        </div>
        <div class="price_wrap" id="priceExp" style="display: none"></div>
        <div class="price_wrap hide" id="priceTag" style="display: none;">
          <span class="description" id="priceDesc" style="display:none">定价</span>
          <span class="old_price" id="priceMarket" style="display:none;"></span>
          <span class="description" id="pcPriceDesc" style="display:none;"></span>
        </div>
      </div>
      <div id="favShopGuideContainer" style="display: none;">
        <div class="fav_shop_bar" id="favShopGuide" style="display:none;">
          <i></i>关注
          <em id="shopName">Beats京东自营旗舰店</em>，立享粉丝价，
          <span id="shopFav1">立即关注</span>
        </div>
      </div>

      <div class="fn_wrap">
        <h1 class="fn fn_goods_name fgn_old" id="favWrap">
          <div class="fn_text_wrap" id="itemName" ptag="7001.1.163">
            <i class="mod_tag mod_tag_big"></i>Beats X 丝缎银
          </div>
        </h1>
        <div class="J_ping desc right_shorter" id="itemDesc" ptag="7001.1.59" style>
          此商品将于2020-05-26,00点结束闪购特卖，国际音频品牌闪购
         
          <span class="desc_more" id="adverMore"></span>
        </div>
        <div class="book_desc" id="actTitleDesc" style="display:none" ptag="7001.1.50"></div>
        <div class="art_desc" id="artAuthor" style="display:none"></div>
      </div>
      <div class="price_special" id="priceSpec2" style="display: none;"></div>
      <div class="de_buy_tip" id="buyNoticeArea" style="display: none;">
        <ul class="buy_tip_v2">
          <li class="buy_tip_v2_line">
            <span class="buy_tip_v2_title">闪购时间</span>2020.05.25 00:00:00-2020.05.26 00:00:00
          </li>
        </ul>
      </div>

      <div class="mod_key_parameters" id="keyParametersFloor" style="display: none;"></div>
      <!-- S de_pm-->
      <div class="de_pm"></div>
      <!-- E de_pm-->
    </div>

    <van-row style="height: 30px; background-color: rgb(241, 246, 249);"></van-row>
    <img width="100%" height="100%" src="../../assets/FFF6.png" alt />

    <van-row style="height: 30px; background-color: rgb(241, 246, 249);"></van-row>

    <img width="100%" height="100%" src="../../assets/FFF6.png" alt />

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>

    <div class="footer">人家是有底线的 -.-</div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      images: [
        "../../assets/FFF.png",
        "http://dummyimage.com/400x400/ffcc33/FFF.png",
        "http://dummyimage.com/400x400/ffcc33/FFF.png"
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
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
.footer {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 8vw 0;
  text-align: center;
  letter-spacing: 0.2vw;
  color: #9e9e9e;
  font-family: Lato, "Microsoft Jhenghei", "Hiragino Sans GB", "Microsoft YaHei",
    sans-serif;
  font-weight: 600;
  font-size: 14px;
}
.detail_decoration.bg_red {
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  font-size: 12px;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  z-index: 5;
  margin-bottom: 0;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 50px;
  color: #fff;
  background: linear-gradient(90deg, #ec2f8a, #d73153);
}
.detail_decoration .price {
  line-height: 1.5;
  color: #fff;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  margin: 0 10px;
  font-size: 16px;
  font-family: JDZH_Regular;
}
.detail_decoration .msg {
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #fff;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-box-flex: 1;
  flex: 1;
  font-size: 10px;
}

.detail_decoration .countdown {
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  font-size: 12px;
  color: #fff;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  position: absolute;
  right: 0;
  top: 0;
  width: 116px;
  height: 100%;
  text-align: center;
  background-color: #f7f7f7;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
.buy_area {
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  font-size: 12px;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  overflow: hidden;
  background: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.buy_area .fn_wrap {
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  font-size: 12px;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  overflow: hidden;
  padding: 12px 18px;
  position: relative;
}
.buy_area .fn_wrap .fn.fn_goods_desc {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  font-weight: 400;
  line-height: 18px;
  font-size: 13px;
  color: #262626;
  min-height: 18px;
  margin-bottom: 12px;
}
.buy_area.new_ver .fn_wrap .fn.fn_goods_name.fgn_old {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: inherit;
  position: relative;
  color: #262626;
  overflow: hidden;
  font-size: 16px;
  min-height: 36px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  line-height: 21px;
  padding-right: 52px;
}
.fn_wrap .desc {
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  padding: 18px 0 0;
  line-height: 1.3;
  position: relative;
  font-size: 12px;
  max-height: 46px;
  overflow: hidden;
}
</style>