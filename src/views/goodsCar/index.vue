<!--  -->
<template>
  <div class>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />

    <!-- <van-row style="padding-left: 13px;">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox   style="height: 24vw;"  icon-size="4vw" name="a">
          <van-swipe-cell  >
            <van-card
            style="width: 533px;"
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              class="goods-card"
              thumb="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <template #right>
              <van-button
                style="height: 100%;"
                square
                text="删除"
                type="danger"
                class="delete-button"
              />
            </template>
          </van-swipe-cell>
        </van-checkbox>
        <van-checkbox name="b">复选框 b</van-checkbox>
        <van-checkbox name="c">复选框 c</van-checkbox>
      </van-checkbox-group>
      <van-button type="primary" @click="checkAll">全选</van-button>
      <van-button type="info" @click="toggleAll">反选</van-button>
    </van-row>-->

    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-checkbox name="a">
        <van-checkbox-group v-model="result2">
          <van-checkbox name="aaa">复选框 a</van-checkbox>
          <van-checkbox name="bbb">复选框 b</van-checkbox>
        </van-checkbox-group>
      </van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
      <van-checkbox name="c">复选框 c</van-checkbox>
    </van-checkbox-group>

    <van-button type="primary" @click="checkAll">全选</van-button>
    <van-button type="info" @click="toggleAll">反选</van-button>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      result: [],
      result2:[]
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
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
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
</style>