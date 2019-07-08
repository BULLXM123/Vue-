// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
// 配置mintui
import MintUI from 'mint-ui'
import VuePreview from 'vue-preview'
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'
import Mypatch from '@/components/Common/Mypatch'
import Comment from '@/components/Common/Comment'
// 引入css
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import Honor from '../build/5c.jpg'
Vue.use(Honor);
// 安装插件 注册全局组件以及挂载属性
Axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5d06e3dbef47aa08b2da1201/vue'
// Axios.defaults.baseURL = 'https://www.doutula.com/api/'

Vue.prototype.$axios = Axios

Axios.interceptors.request.use(function(config){
  MintUI.Indicator.open({
    text:'加载中...'
  });
  return config;
});
Axios.interceptors.response.use(function(response){
  MintUI.Indicator.close();
  return response;
})



Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.component(NavBar.name,NavBar)
Vue.component(Mypatch.name,Mypatch)
Vue.component(Comment.name,Comment)
//定义moment全局日期过滤器
import Moment from 'moment';
Moment.locale('zh-cn');
//{{ 'xxx' | convertTime('YYYY-MM-DD') }}
//{{ 'xxx' | convertTime('YYYY年MM月DD日') }}
Vue.filter('convertTime',function(data,formatStr) {
  return Moment(data).format(formatStr);
})
Vue.filter('relativeTime',function(previousTime){
  return Moment(previousTime).fromNow();
})

Vue.use(MintUI)
Vue.use(VuePreview)
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
