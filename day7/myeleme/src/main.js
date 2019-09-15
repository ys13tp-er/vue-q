import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios;

// 引入vant的组件
import Vant from './vant/index'
Vant()

//全局引入vuetouter
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由
import Tabbar from './views/Tabbar';

// 嵌套组件
import Home from './views/Tabbar/Home'
import Find from './views/Tabbar/Find'
import Mine from './views/Tabbar/Mine'
import Order from './views/Tabbar/Order'

const routes = [{
  path: '/tabbar',
  component: Tabbar,
  children: [{
    path: 'home',
    component: Home
  }, {
    path: 'find',
    component: Find
  }, {
    path: 'mine',
    component: Mine
  }, {
    path: 'order',
    component: Order
  }]
}]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')