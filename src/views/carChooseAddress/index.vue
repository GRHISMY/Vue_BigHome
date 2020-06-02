<!--  -->
<template>
<div>
    <van-nav-bar
      title="选择收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="
    margin-top: 38px;
"
    />

    <van-address-list
    add-button-text="确认选择"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="selecccct"
    />

</div>
</template>

<script>
import { Toast } from 'vant';
import addressApi from '../../api/address'
import orderApi from '../../api/order'
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
      whichSelected:{},

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
  selecccct(item){
    this.whichSelected = item
    var addressString = item.address.split(/\s+/);
    // console.log("item ",item)
    // console.log("addressString ",addressString)
  },
    onClickLeft() {
      this.$router.go(-1);
    },

    onAdd() {
      console.log(this.$route.params.isCar)
      if(this.$route.params.isCar=="true"){
        // alert("购物车")
        var addressString = this.whichSelected.address.split(/\s+/);
        var count = this.$route.params.count
        var data = JSON.parse(this.$route.params.data)
        const token = localStorage.getItem("TOKEN")
        const userId = JSON.parse(localStorage.getItem("user")).bSId

        orderApi.addOrder(count,1,userId,data,this.whichSelected.name,this.whichSelected.tel,addressString[0],addressString[1],token).then(response =>{
          const resp = response.data
          if(resp.code == 0){
            this.$router.push('/goodscar');
          }
        })
      }else{
        var addressString = this.whichSelected.address.split(/\s+/);
        var count = this.$route.params.count
        var data = JSON.parse(this.$route.params.data)
        const token = localStorage.getItem("TOKEN")
        const userId = JSON.parse(localStorage.getItem("user")).bSId

        orderApi.addOrderOne(count,1,userId,data,this.whichSelected.name,this.whichSelected.tel,addressString[0],addressString[1],token).then(response =>{
          const resp = response.data
          if(resp.code == 0){
            this.$router.push('/goodscar');
          }
        })
        // alert("商品")
      }
      // Toast('新增地址');
      // console.log("count ",this.$route.params.count)
      // console.log("data ",JSON.parse(this.$route.params.data))
      


      // console.log(this.list)
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
        // console.log(resp)
      })

      // console.log("count ",this.$route.params.count)
      // console.log("data ",JSON.parse(this.$route.params.data))

      
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>