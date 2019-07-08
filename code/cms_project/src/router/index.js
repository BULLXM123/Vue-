import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsList from '@/components/Goods/GoodsList'
Vue.use(Router)
/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      //重定向
      path:'/',
      //redirect:'/home',
      redirect:{  name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    //新闻列表
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    //新闻详情
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDetail
    },
    //图片列表
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
    //图片详情
    {
      path:'/photo/detail/',
      name:'photo.detail',
      component:PhotoDetail
    },
    //商品列表
    {
      name:'goods.list',
      path:'goods/list',
      component:GoodsList
    }
  ]
})
