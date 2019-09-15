import Vue from 'vue'
// 自定义组件
import App from './App.vue'
// 全局引入
import axios from 'axios'
// 引入路由模块
import router from './router'
// 引入状态管理
import store from './store'

// Vue继承axios
Vue.prototype.$axios = axios
Vue.prototype.$author = () => {
  return 'yao'
}
// 引入vant的组件
import Vant from './vant/index'
Vant()


Vue.config.productionTip = false

new Vue({
  // 让容器装载仓库
  store,
  // 让容器装载这个路由插件
  router,
  render: h => h(App),
}).$mount('#app')