<template>
  <div>
    <mt-header fixed title="管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="./assets/img/index.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="member">
    <img slot="icon" src="./assets/img/vip.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img slot="icon" src="./assets/img/shoppingcart.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="./assets/img/search.png">
    查找
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>
/* eslint-disable no-new */
<script>
export default {
  name: 'app',
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oldV) {
      // const self = this
      // console.log(newV)
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>

</style>
