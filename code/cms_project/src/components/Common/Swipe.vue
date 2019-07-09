<template>
     <mt-swipe :auto="4000">
            <!-- v-for组件,要给key -->
          <mt-swipe-item v-for="(img,index) in imgs" :key="index"> 
            <img :src="img.image_url" >
          </mt-swipe-item>
        </mt-swipe>
</template>

<script>
export default {
    props:['url'],
    name:'my-swipe',
    data(){
        return{
            imgs:[]
        }
    },
    created() {
      this.$axios.get("/"+this.url)
      .then(res=>{
          this.imgs = res.data.data.list; 
          console.log(res.data.data.list); //被坑到了 要写两个.data 一开始只写了一个.data!!!
      })
      .catch(err=> console.log('轮播图获取异常', err));
  }

}
</script>

<style>
</style>
