// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
// 配置mintui
import MintUI from 'mint-ui'
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
// 引入css
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
// 安装插件 注册全局组件以及挂载属性
// Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Axios.defaults.baseURL = 'https://www.doutula.com/api/'

Vue.prototype.$axios = Axios
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: {
    App
  },
  template: '<App/>'
})
