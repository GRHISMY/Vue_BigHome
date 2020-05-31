<!--  -->
<template>
<div>
    <van-nav-bar
      title="我的收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />

    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
    />

</div>
</template>

<script>
import { Toast } from 'vant';
import addressApi from '../../api/address'
export default {
data() {
return {
     chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
  // console.log('aaa')
  // alert('aaa')
  this.fetchData();
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods:{
    onClickLeft() {
      this.$router.go(-1);
    },

    onAdd() {
      Toast('新增地址');
      this.$router.push('/addaddresslist');
    },
    onEdit(item, index) {
      console.log(this.list[index])
      const addressId = this.list[index].id
      this.$router.push(`/editAddressList/${addressId}`);
      Toast('编辑地址:' + index);
    },

    fetchData() {
      const token = localStorage.getItem("TOKEN")
      const userId = JSON.parse(localStorage.getItem("user")).bSId
      // console.log(token)
      // console.log(userId)
      addressApi.getList(userId,token).then(response =>{
        const resp = response.data;
        this.list = resp.data
        console.log(resp)
      })

      
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>