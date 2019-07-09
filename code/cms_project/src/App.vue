<template>
  <div>
    <mt-header fixed title="管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected" fixed> 
  <mt-tab-item id="home">
    <img @click="changeHash" slot="icon" src="./assets/img/index.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="member">
    <img @click="changeHash" slot="icon" src="./assets/img/vip.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img @click="changeHash" slot="icon" src="./assets/img/shoppingcart.png">
    购物车<mt-badge type="error" size="small">{{shownum}}</mt-badge>
  </mt-tab-item>
  <mt-tab-item id="search">
    <img @click="changeHash" slot="icon" src="./assets/img/search.png">
    查找
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>
/* eslint-disable no-new */
<script>
import EventBus from './EventBus';
export default {
  name: 'app',
  data () {
    return {
      selected: '',
      shownum:0
    }
  }, 
  created(){
    EventBus.$on('addShopcart',data=>{ //=>为外层的数据
      this.shownum+=data;
    })
  },
  methods:{
    changeHash() {
      
      setTimeout( () => {
         this.$router.push({
          name: this.selected
          })
      })
    }
  },
  watch: {
    // selected (newV, oldV) {
     
    //   })
    // }
  }
}
</script>

<style scoped>
.mint-header{
  position: relative;
}
.mt-tabbar{
  top:40px;
}
</style>
