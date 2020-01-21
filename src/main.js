import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入断点隐藏类
import "element-ui/lib/theme-chalk/display.css";
//全局引入echarts import Echarts from 'echarts';
//cnpm installs echarts -S
//引入axios cnpm install axios/cnpm install vue-axios
import axios from "axios";//axios
import VueAxios from "vue-axios";//axios
//引入querystring POST请求
import qs from "querystring";

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
// axios.defaults.withCredentials = true;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
