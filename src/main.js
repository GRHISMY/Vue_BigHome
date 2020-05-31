import Vue from 'vue'

import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import smartParse from 'vue-smart-parse';
Vue.use(smartParse)
Vue.use(Vant);


Vue.config.productionTip = process.env.NODE_ENV === 'production'
console.log(process.env.VUE_APP_SERVICE_URL)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
