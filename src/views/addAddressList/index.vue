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
  :addressInfo="AddressInfo"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
>
<template >
    <van-field
  v-model="message"
  rows="2"
  autosize
  label="智能识别地址"
  type="textarea"
  maxlength="50"
  placeholder="请输入地址"
  show-word-limit
>
<template #button>
    <van-button @click="ai" size="small" type="primary">智能识别</van-button>
  </template>
</van-field>
  </template>
</van-address-edit>



</div>
</template>

<script>
import { Area } from 'vant';
import { Toast } from 'vant';
import areaList from '../../utils/area'
import addressApi from '../../api/address'
export default {
data() {
return {
    areaList,
    searchResult: [],
    AddressInfo:{
      id:null,
      name,
      tel:null,
      province:null,
      city:null,
      county:null,
      addressDetail:null,
      areaCode:null,
      postalCode:null,
      isDefault:false
    },
    message:"",
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    
},
methods:{
  ai(){
    let str = this.message.trim();
    if(str.length ==0){
      Toast("请输入地址")
    }else{
      // 马云，陕西省西安市雁塔区丈八沟街道高新四路高新大都荟 13593464918
      const airesult = this.smartParse(this.message)
      // console.log(airesult)
      this.AddressInfo.areaCode = airesult.countyCode
      this.AddressInfo.addressDetail = airesult.address
      this.AddressInfo.name = airesult.name
      this.AddressInfo.tel = airesult.phone
    }
    
  },
    onClickLeft() {
      this.$router.go(-1);
    },
     onSave(content) {

      //  console.log(content)
       const token = localStorage.getItem("TOKEN")
      const userId = JSON.parse(localStorage.getItem("user")).bSId
       addressApi.addAddress(content,token,userId).then(response =>{
         const resp = response.data
         
         if(resp.code == -1){
           Toast(resp.msg)
         }else{
           Toast("新增成功")
           this.$router.push('/addresslist');
         }
        //  console.log(resp)
       })
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