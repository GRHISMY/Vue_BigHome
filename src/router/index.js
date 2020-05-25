import Vue from 'vue'
import VueRouter from 'vue-router' 
import Login from '../views/login'
import Classify from '../views/classify'
import HomePage from '../views/homePage'
import My  from '../views/my'
import GoodsInfo from '../views/goodsInfo'
import GoodsCar from '../views/goodsCar'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'homepage',
            component:HomePage
        },
        {
            path:'/classify',
            name:'classify',
            component:Classify
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/my',
            name:'my',
            component:My
        },
        {
            path:'/goodsinfo',
            name:'goodsinfo',
            component:GoodsInfo
        },
        {
            path:'/goodscar',
            name:'goodscar',
            component:GoodsCar
        },
    ]
})