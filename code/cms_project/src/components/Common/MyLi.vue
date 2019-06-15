<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'my-li',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
li{
    position: relative;
    list-style: none;
    float: left;
    width: 33.3%;
    /* background: yellowgreen; */
    text-align: center;
    height:100px;
    line-height: 100px;
     margin: 0;
    padding: 0;
  
  }
</style>
