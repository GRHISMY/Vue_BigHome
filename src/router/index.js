import Vue from 'vue'
import VueRouter from 'vue-router' 
import Login from '../views/login'
import Classify from '../views/classify'
import HomePage from '../views/homePage'
import My  from '../views/my'
import GoodsInfo from '../views/goodsInfo'
import GoodsCar from '../views/goodsCar'
import OrderDetail from '../views/orderDetail'
import AllOrder from '../views/allOrder'
import AddressList from '../views/addressList'
import AddAddressList from '../views/addAddressList'
import EditAddressList from '../views/editAddressList'


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
        {
            path:'/orderdetail',
            name:'orderdetail',
            component:OrderDetail
        },
        {
            path:'/allOrder',
            name:'allOrder',
            component:AllOrder
        },
        {
            path:'/addresslist',
            name:'addresslist',
            component:AddressList
        },
        {
            path:'/addaddresslist',
            name:'addaddresslist',
            component:AddAddressList
        },
        {
            path:'/editAddressList/:addressId',
            name:'editAddressList',
            component:EditAddressList
        },
    ]
})