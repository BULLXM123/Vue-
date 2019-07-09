<template>
    <div>
        <!-- 轮播 九宫格 -->
        <!-- <mt-swipe :auto="4000">
           
          <mt-swipe-item v-for="(img,index) in imgs" :key="index">  
            <img :src="img.image_url" :style="mystyle">
          </mt-swipe-item>
        </mt-swipe> -->
        <my-swipe url="example"/>
        <div class="grid">
          <my-ul>
            <my-li v-for="(grid,index) in grids" :key="index">
              <router-link :to="grid.router">
              <span :class="grid.className"></span>
              <span>{{grid.title}}</span>
              </router-link>
            </my-li>
          </my-ul>
        
        </div>
    </div>
</template>
/* eslint-disable */
// eslint-disable-next-line /
<script>
export default {
  data () {
    return {
      imgs: [],
      // mystyle: {
      //   width:"320px"
      // },
      grids:[
        { className:'news',title:'新闻资讯',router:{
          name:'news.list'
        }},
        { className:'sharing',title:'图文分享',router:{
          name:'photo.list',params:{categoryId:0}
        }},
        { className:'shopping',title:'商品展示',router:{
          name:'goods.list',query:{id:1}
        }},
        { className:'message',title:'留言反馈',router:{
          name:'news.list'
        }},
        { className:'search',title:'搜索资讯',router:{
          name:'news.list'
        }},
        { className:'call',title:'联系我们',router:{
          name:'news.list'
        }}
        ]
    }
  }
  ,
  // created() {
  //     this.$axios.get('search?keyword=hehe')
  //     .then(res=>{
  //         this.imgs = res.data.data.list;  //{"status":1,"data":{"list":[{"out_id":1945830,"image_url":"http:\/\/ww2.sinaimg.cn\/large\/6af89bc8gw1f8r4i57ay1j204h05iglf.jpg"},{"out_id":8660088,"image_url":"http:\/\/ww2.sinaimg.cn\/large\/9150e4e5gy1g0r6wbbkraj204h05i0sk.jpg"},{"out_id":3747957,"image_url":"http:\/\/ww4.sinaimg.cn\/large\/6af89bc8gw1f8nu3a2f1wj2085089t8w.jpg"},{"out_id":3905227,"image_url":"http:\/\/ww3.sinaimg.cn\/large\/6af89bc8gw1f8rfwzx41sj20db0dsaak.jpg"},{"out_id":5107228,"image_url":"http:\/\/ww4.sinaimg.cn\/large\/6af89bc8gw1f8nrgfjlyuj20jg0j7758.jpg"}],"more":0}}
  //         console.log(res.data.data.list); //被坑到了 要写两个.data 一开始只写了一个.data!!!
  //     })
  //     .catch(err=> console.log('轮播图获取异常', err));
  // }
  
  // created() {
  //     this.$axios.get('/example')
  //     .then(res=>{
  //         this.imgs = res.data.data.list; 
  //         console.log(res.data.data.list); //被坑到了 要写两个.data 一开始只写了一个.data!!!
  //     })
  //     .catch(err=> console.log('轮播图获取异常', err));
  // }
}
</script>
<style scoped>
  .mint-swipe{
    height:220px;
  }
  
  
  span.option{
 
  }
  .news {
    background-image: url('../../assets/img/news.png');
    display: inline-block;
    margin:  0 auto;
    width:35px;
    height:35px;
    background-repeat: round;
  }
  .sharing {
    background-image: url('../../assets/img/sharing.png');
    display: inline-block;
    margin: 10px 0;
    width:35px;
    height:35px;
    background-repeat: round;
  }
 .shopping{
   background-image: url('../../assets/img/shopping.png');
    display: inline-block;
    margin: 10px 0;
    width:35px;
    height:35px;
    background-repeat: round;
 }
 .message{
   background-image: url('../../assets/img/message.png');
    display: inline-block;
    margin: 10px 0;
    width:35px;
    height:35px;
    background-repeat: round;
 }
 .search{
   background-image: url('../../assets/img/searching.png');
    display: inline-block;
    margin: 10px 0;
    width:35px;
    height:35px;
    background-repeat: round;
 }
 .call{
   background-image: url('../../assets/img/call.png');
    display: inline-block;
    margin: 10px 0;
    width:35px;
    height:35px;
    background-repeat: round;
 }
</style>
