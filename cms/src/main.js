import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from './element/index'
ElementUI();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')