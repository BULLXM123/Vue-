<template>
    <div>
        <nav-bar title="图文列表"/>
        <div class="photo-header">
            <ul>
                <li>
                    <a href="javascript:;">标题一</a>
                </li>
                 <li>
                    <a href="javascript:;">标题一</a>
                </li>
                 <li>
                    <a href="javascript:;">标题一</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <a >
                        <img v-lazy="img.img_url">
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.summary}}</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        data(){
          return {
                imgs:[]
          }
         },
        created() {
            let categoryId = this.$route.params.categoryId;
            this.loadImgsByCategoryId(categoryId);
        },
        beforeRouteUpdate(to,from,next){
        //路由复用，让参数改变路由的触发
        console.log(to);
        this.loadImgsByCategoryId(to.params.categoryId);
        next();
        },
        methods: {
            loadImgsByCategoryId (categoryId) {
            this.$axios.get('getimages/'+categoryId)
            .then(res =>{
                this.imgs = res.data.message;
                console.log(this.imgs);
            })
            .catch( err =>console.log('图片获取失败',err))
            }
        }
}
</script>

<style>
.photo-header li{
    list-style:none;
    display:inline-block;
    margin-left: 10px;
    height: 30px;
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
/* 图片懒加载 */
image[lazy=loading]{
    width:40px;
    height:300px;
    margin:auto;
}
</style>
