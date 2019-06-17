<template>
    <div class="cms_s_header">
            <h1 @click="goback">&nbsp<</h1>
            <h1 class="page_title">{{title}}</h1>
        </div>
</template>

<script>
export default {
    props:['title'],
    name:'nav-bar',
    methods: {
        goback() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .cms_s_header {
        height: 40px;
        background-color: #f7f7f7;
    }
    .page_title{
        margin-left: 25%;
    }
    h1,h2 {
        display:inline-block;
        height:40px;
        line-height: 40px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>
