<template>
    <div>
        <!-- 轮播 九宫格 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(img,index) in imgs" :key="index">
            <img :src="img.image_url">
          </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
/* eslint-disable */
// eslint-disable-next-line /
<script>
export default {
  data () {
    return {
      imgs: []
    }
  }
  ,
  created() {
      this.$axios.get('search?keyword=hehe')
      .then(res=>{
          this.imgs = res.data.data.list;  //.message.url   res.data.message = [{img:'图片地址"}]
          console.log(res.data.data.list); //坑 要写两个.data
      })
      .catch(err=> console.log('轮播图获取异常', err));
  }

}
</script>

<style>
  .mint-swipe{
    height:200px;
  }
</style>
