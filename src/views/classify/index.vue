<!--  -->
<template>
<div>
    <van-nav-bar
    style="margin-top: 38px;"
        title="商品分类"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"

    />
    <van-tree-select
        @click-nav="onNavClick"
        @click-item="onItemClick"
        :items="items"
        :active-id.sync="activeId"
        :main-active-index="mainActiveIndex"
    />
</div>
</template>

<script>
export default {
data() {
return {
    items: [
    {
        id:0,
        // 导航名称
        text: '所有城市',
        // 该导航下所有的可选项
        children: [
        {
            // 可选项的名称
            text: '温州',
            // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
            id: 1002
        },
        {
            // 可选项的名称
            text: '杭州',
            // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
            id: 1001
        }
        ]
    },
    {
        id:1,
        // 导航名称
        text: '所有城市',
        // 该导航下所有的可选项
        children: [
        {
            // 可选项的名称
            text: '温州',
            // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
            id: 1002
        },
        {
            // 可选项的名称
            text: '杭州',
            // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
            id: 1001
        }
        ]
    }
],
    mainActiveIndex: 0,
    activeId: 1001,
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
    onNavClick(index) {
      this.mainActiveIndex = index;
      console.log(index)
    },
    onItemClick(data) {
      this.activeId = data.id;
      console.log(data)
    }
  
    
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>