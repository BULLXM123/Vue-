<template>
    <div class="tmp1">
        <nav-bar title="新闻列表" />
         <!-- <div class="cms_s_header">
            <h1 >&nbsp<</h1>
            <h1 class="page_title">新闻列表</h1>
        </div> -->
        <div class="demo">
            <ul>
                <li v-for="news in newsList" :key="news.id">
                    <a href="#">
                        <img class="" :src="news.img_url">
                        <div>
                            <span>{{news.title}}</span>
                            <div class="news-desc">
                                <p>点击数：{{news.click}}</p>
                                    <p>发表时间：{{news.add_time | convertTime('YYYY-MM-DD')}}</p>
                                
                            </div>
                        </div>
                        </a>
                        
                  </li>
                        <!-- <li class="line"></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
             newsList:[]
        }
    },
    created () {
        this.$axios.get('getnewslist')
        .then( res =>{
            this.newsList = res.data.data.message
            console.log(res.data.data.message)
        })
        .catch( err => console.log("新闻列表获取异常",err))
    }
}
</script>

<style scoped>
ul{
    padding:0px;
    margin:0px;
}
.demo a{
    display: block;
    width:330px;
    height:44px;
    color:#000;
    padding: 10px 15px;
}
.demo a div{
    float:left;
    width:238px;
    margin-right: 20px;
}
.demo span{
    display: block;
    width:100%;
    font-size: 17px;
    line-height: 21px;
}

.demo img{
    float:left;
    width:42px;
    height:42px;
    margin-right:20px;
}

.demo a p {
    float: left;
    color:#0bb0f5;
    font-size:14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float:right;
}
.cms_s_header{
    background-color: #f7f7f7;
}
.tmp1 h1{
    display: inline-block;
}
.page_title {
    margin-left: 25%
}
.line{
    margin-left:16px;
    transform: scaleY(.5);
    border-bottom: 1px solid #c8c7cc;
}

</style>
