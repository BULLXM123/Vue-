<template>
    <div class="tmp1">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a href="#">返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                    </li>
                <li>
                    <mt-button size="large" type="primary">
                        发表评论
                    </mt-button>
                    </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span><span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list" v-for="(msg,index) in msgs" :key="index">
                <li>{{msg.user_name}}：{{msg.content}} {{msg.add_time | relativeTime}}</li>
                
            </ul>
            <mt-button type='danger' size='large' plain @click="loadMore">加载更多{{page}}</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'comment',
    data(){
        return{
            page:1,
            msgs:[],
            newComment:''
        }
    },
    props:['cid'],
    created(){
        this.page = this.$route.query.page || "1";
        this.firstLoad();

    },
    methods:{
        firstLoad(){
        this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then(res =>{
            this.msgs = res.data.message;
            this.page++;
        })
        .catch(err=>console.log('评论获取失败'));
        },
        loadMore(){
            this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then(res =>{
            this.msgs = this.msgs.concat(res.data.message);
            this.page++;
        })
        .catch(err=>console.log('评论获取失败'));
        } ,
        sendMsg(){

        }
        }
    }

</script>

<style scoped>
.photo-comment > div span:nth-child(2){
    float:right;
}
.photo-comment{
    height:30px;
    border-bottom:1px solid rgba(0,0,0,0.4);
    line-height: 30px;
    margin-bottom:5px;
}
.txt-comment{
    padding:5 5;
}
.txt-comment textarea{
    margin-bottom:5px;
    width:100%
}
.comment-list li{
    border-bottom:1px solid rgba(0,0,0,0.2);
    padding-bottom:5px;
    margin-bottom:5px;
    padding-left:5px;
}
li{
    list-style: none;
}
ul  {
    margin:0px;
    padding:0px;
}
</style>
