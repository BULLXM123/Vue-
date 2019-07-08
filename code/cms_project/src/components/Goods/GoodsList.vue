<template>
    <div class="tmp1">
    <nav-bar title="商品列表"/>
    <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadmore" 
    :bottom-all-loaded="isAllLoaded"> 
    <ul>
        <li v-for="goods in goodsList" :key="goods.id">
            <a href="#">
                <img :src="goods.img_url">
                <div class="title">{{goods.title}}</div>
                <div class="desc">
                    <div class="sell">
                        <span>{{goods.sell_price}}</span>
                        <s>{{goods.market_price}}</s>
                    </div>
                    <div class="detail">
                        <div class="hot">{{goods.content}}</div>
                        <div class="count">剩{{goods.stock}}件</div>
                    </div>
                </div>
            </a>
        </li>
    
    </ul>
    </mt-loadmore>
  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        goodsList:[],
        page:1,
        isAllLoaded:false,
        id:'',
    
      }
    },
    created(){
        this.page = this.$route.query.id || "1";
        console.log(this.page);
        this.loadByPage (this.page);
    },
    methods: {
        loadByPage(page){
          this.$axios.get('getgoods?pageindex='+page)
        .then(res=>{
            this.goodsList = res.data.message;
            this.page++;
            console.log(res.data.message);
        })
        .catch(err=>console.log(err,"商品获取失败"))
     },

        concatByPage(page){
        this.$axios.get('getgoods?pageindex='+page)
        .then(res=>{
            console.log(res.data.message);
            if(res.data.message===null||'undefined'){
                this.isAllLoaded = true;
                      this.$toast({
                      message:"没有更多数据了！"
                });
                return;
            }
            this.goodsList =this.goodsList.concat(res.data.message);
             this.$refs.loadmore.onBottomLoaded();
            this.page++;
            
        })
        .catch(err=>console.log(err,"商品获取失败"))
     },
      loadBottom(){
          console.log('上拉加载');
          this.concatByPage(this.page);
          console.log(this.page);
          
      },
      
    }
  };
</script>
<style scoped>
.tmp1{
    height:516px;
    overflow-y:scroll;
}
ul{
    overflow:hidden;
    padding: 0;
}
li{
    width: 50%;
    float:left;
    padding: 6px;;
    box-sizing: border-box;
}
li>a:not(.mui-btn){
    margin:0px;
    padding: 0px;
    border:1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;
}
li >a:not(.mui-btn) img{
    width: 100%;
}
.sell > span{
    float: left;
    color:red;
    text-align: left;
}
.detail >.hot{
    float: left;
    text-align: left;
    font-size: 15px;

}
.detail >.count{
    float: right;
    text-align: right;
    font-size:15px;
}
.detail{
    overflow: hidden;
}
.desc{
    color:rgba(92,92,92,0.8);
    background-color: rgba(0,0,0,0.2);
}
img{
    height:200px;
}
</style>
