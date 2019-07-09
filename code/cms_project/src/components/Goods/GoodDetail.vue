<template>
    <div>
        <nav-bar title="商品详情" />
        <div class="outer-swiper">
            <div class="swiper">
                <my-swipe url="getgoodsdetail"/>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">{{goodslist.title}}</span></li>
                <li class="p">市场价：
                    <s>${{goodslist.market_price}}</s>销售价：
                    <span>${{goodslist.sell_price}}</span>
                </li>
                <li class="number-li">购买数量：<span @click="decrease">-</span><span>{{num}}</span><span @click="increase">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="insertball">加入购物车</mt-button> 
                    
                </li>
            </ul>
        </div>
        <transition name="ball" @after-enter="afterEnter"
>
        <div class="ball" v-if="isExist"><span>{{num}}</span></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{goodslist.goods_no}}</li>
                <li>库存情况： {{goodslist.stock_quantity}}件</li>
                <li>上架时间：</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                     <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import EventBus from '@/EventBus';


export default {
    data(){
        return{
        goodslist:[],
        isExist:false,
        num:1,
        maxnum:1

        }
    },
    methods:{
        insertball(){
            this.isExist=true;
            
        },
        afterEnter(){
            this.isExist=false;
            EventBus.$emit('addShopcart',this.num)
        },
        decrease(){
            this.num--;
            if(this.num<=1){
                this.num=1;
                this.$toast('数量已达下限')
            }
        },
        increase(){
            this.num++;
            if(this.num>=this.maxnum){
                this.num=this.maxnum;
                this.$toast('数量已达上限')
            }
        }
    }
    ,
    created(){
        let pageindex = this.$route.params.id;
        this.$axios.get('getgoodslist?pageindex='+pageindex)
        .then(res=>{
            this.goodslist=res.data.message[0];
            this.maxnum=this.goodslist.stock_quantity;
        })
        .catch(err=>console.log('商品列表获取失败',err))
    },
     beforeRouteLeave(to, from, next) {
         // 设置上一个路由的 meta
        from.meta.keepAlive = false;  // A 跳转到 B 时，让 A 缓存，即不刷新
        next();}
}
</script>

<style scoped>
.ball-enter-active{
    animation: bounce-in 1s;
}
.ball-leave{
    opacity:0;
}
@keyframes bounce-in {
    0%{
        transform: translate3d(0,0,0)
    }
    50%{
        transform:translate3d(35px,-50px,0)
    }
    75%{
        transform: translate3d(70px,0px,0)
    }
    100%{
        transform: translate3d(70px,300px,0)
    }
}
.swiper{
    border:1px solid rgba(0,0,0,0.2);
    margin:8px;
    width: 95%;
    height: 240px;
    border-radius: 15px;
    overflow: hidden;
}
.product-desc ul li{
    margin:3px 0;
}
.number-li{
    margin:0 5px;
}
.outer-swiper,
.product-desc,
.product-props,
.product-info{
    border-radius: 5px;
    border:1px solid rgba(0,0,0,0.2);
    margin:3px;
}
.product-desc ul,
.product-info ul,
.product-props ul {
    padding-left:5px;
}

.price-li span{
    color: red;
    font-size: 25px;

}

.price-li s{
    margin-right: 16px;
}
/* 加减 */
.number-li span{
    display: inline-block;
    border: 2px solid rgba(0,0,0,0.1);
    width: 25px;
}
/* 商品参数 */
.product-props ul >:nth-child(1){
    text-align:left;
}
.product-props ul:not(:nth-child(1)){
    margin-left: 40px;
}
.product-info ul{
    margin-bottom:70px;
    padding: 0 5;
}
.number-li span{
    text-align: center;
}
.number-li >:nth-child(2){
    width: 40px;
}
.ball{
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
}
</style>
