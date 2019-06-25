<template>
    <div>
        <nav-bar title="图文详情"/>
        <div class="photo-title">
            <p>{{info.title}}</p>
            <span>发起日期：{{info.add_time | convertTime('YYYY-MM-DD')}}</span>
            <span>{{info.click}}次浏览</span><br>
            <span>分类：民生经济</span>
        </div>
        <ul>
            <!-- <li v-for="(src,index) in srcs" :key="index">
                <img :src="src.src">
            </li> -->
            <vue-preview :slides="srcs"></vue-preview>
        </ul>
        <div class="photo-desc">
            <p v-html="info.content"></p>
        </div>
        <my-patch />
    </div>
</template>

<script>
export default {
    data(){
        return {
            info : {},
            srcs: []
        }
    },
    created(){
        let id = this.$route.query.id;
        console.log(id);
        this.$axios.get('/getimagesInfo/?imgId='+id)
        .then(res=>{
            this.info = res.data.message[0];
        })
        .catch( err => console.log("图文详情读取错误",err))

        this.$axios.get('/getsrc')
        .then( res => {
            this.srcs = res.data.message;
            this.srcs.forEach(src =>{
                src.msrc = src.src;   //缩略图设为原图
                src.w=600;
                src.h=300;
            })
        })
        .catch( err => console.log("缩略图获取失败",err))
    }
}
</script>
 
<style>
li{
    list-style: none;
}
ul{
    margin: 0;
    padding: 0;
}
.photo-title{
    overflow: hidden;
}
.photo-title,.photo-desc{
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
.photo-title p{
    color:#13c2f7;
    font-size: 20px;
    font-weight: bold;
}
.photo-title span{
    margin-right: 20px;
}
.photo-desc p {
    font-size: 18px;
}
/* .patch{
    height:55px;
    display: inline-block;
} */
</style>
