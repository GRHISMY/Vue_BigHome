<!--  -->
<template>
<div>
    <van-nav-bar
      title="新增收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
</div>
</template>

<script>
import { Area } from 'vant';
import { Toast } from 'vant';
export default {
data() {
return {
    areaList:{},
    searchResult: [],
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
     onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>