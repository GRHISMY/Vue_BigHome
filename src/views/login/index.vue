<!--  -->
<template>
<div>
    <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="
    margin-top: 38px;
"
    />
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button @click="login" round block type="info" native-type="submit">
            提交
            </van-button>
        </div>
    </van-form>

    <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/goodscar" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import loginApi from '../../api/login'
import { Toast } from 'vant';
export default {
data() {
return {
    active:2,
    username: '',
    password: '',
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods:{
    onClickLeft(){
        this.$router.go(-1)
    },
    onSubmit(values) {
      console.log('submit', values);
    },
    login(){
        loginApi.login(this.username,this.password).then(response =>{
            const resp = response.data
            console.log(resp)
            if(resp.code == -1){
                Toast(resp.msg);
            }else if(resp.code == 0){
                const token = resp.data.token
                localStorage.setItem("TOKEN",token)
                localStorage.setItem("user",JSON.stringify(resp.data))
                this.$router.push('/my');
            }
        })
        console.log(this.username,this.password)
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>