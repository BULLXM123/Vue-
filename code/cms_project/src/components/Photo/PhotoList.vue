<template>
    <div>
        <nav-bar title="图文列表"/>
        <div class="photo-header">
            <ul>
                <li v-for="c in categorys" :key="c.id">
                    <a @click="loadImgsByCategoryId(c.id)" href="javascript:;">{{c.title}}</a>
                </li>
               
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <router-link :to="{name:'photo.detail',query:{id:img.id}}" >
                        <img v-lazy="img.img_url">
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.summary}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
        <my-patch />
    </div>
</template>

<script>
export default {
        data(){
          return {
                imgs:[],
                categorys:[]
          }
         },
        created() {

            let categoryId = this.$route.params.categoryId;
            this.loadImgsByCategoryId(categoryId);

            this.$axios.get('getimgcategory')
            .then(res =>{
                this.categorys = res.data.message;
            })
            .catch( err => console.log("获取标题列表失败",err))
        },
        beforeRouteUpdate(to,from,next){
        //路由复用，让参数改变路由的触发
        console.log(to);
        this.loadImgsByCategoryId(to.params.categoryId);
        next();
        },
        methods: {
            loadImgsByCategoryId (categoryId) {
            this.$axios.get('getimages/?categoryId='+categoryId)
            .then(res =>{
                this.imgs = res.data.message;
                console.log(this.imgs)
                if(this.imgs == undefined){
                this.$toast({
                    message:"没有图片了"
                })
            }
                console.log(this.imgs);
            })
            .catch( err =>console.log('图片获取失败',err))
            },
            
        }
}
</script>

<style>
.photo-header{
            width:320px;
            height:50px;
            overflow-x:scroll;
            overflow-y:hidden;
        }
.photo-header  ul{
            display:inline;
            white-space:nowrap;
        }
.photo-header  ul li{
            padding:10px 10px;
            display: inline-block;
            white-space:nowrap;
        }
.photo-list li{
    list-style:none;
    position:relative;
}
.photo-list li img{
    width:100%;
    height:230px;
    vertical-align: top;
}
.photo-list ul{
    padding-left: 0px;
    margin: 0;
    display: inline;
}
.photo-list p {
    position: absolute;
    bottom: 0px;
    color:white;
    background-color: rgba(0,0,0,0.3);
    margin-bottom:0px;
}
.photo-list p span:nth-child(1){
    font-weight: bold;
    font-size: 16px;
}
.photo-header a{
    text-decoration: none;
}
/* 图片懒加载 */
image[lazy=loading]{
    width:40px;
    height:300px;
    margin:auto;
}
</style>
