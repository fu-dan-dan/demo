import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(Vant);
import axios from 'axios'
Vue.prototype.$axios=axios
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.localStorage.getItem('token')
  return config
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
