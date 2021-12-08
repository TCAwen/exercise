<template>
<!-- 商品展示容器 -->
  <div class="warp">
       <div class="showwarp">
            <div class="itemwarp" v-for="(item,index) in goods" :key="index">
                <img :src="require('../assets/img/'+item.minpath)" alt="">
                <a href="javascript:;">{{item.name}}</a>
            </div>
        </div>
  </div>
 
</template>

<script>
//引入map映射
// import {mapState} from 'vuex'

export default {
    name:"ComShow",
    //接收商品参数
    props:["sort"],
    data() {
        return {
            //将商品参数添加至data以遍历
            goods:this.sort
        }
    },
}
</script>

<style scoped>
    .warp{
        z-index: 11;
        position:absolute;
        top: 0px;
        height: 458px;
        width: 992px;
        border: 1px solid rgb(172, 171, 171);
        background-color: #FFF;
        box-shadow: 0px 3px 10px #3333;
        left: 234px;
    }
    .showwarp{
        width: 1060px;
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
    }
    .itemwarp{
        height: 40px;
        width: 215px;
        flex-shrink: 1;
        padding: 18px 20px;
    }
    .itemwarp img{
        width: 40px;
        height: 40px;
    }
    .itemwarp a{
        line-height: 76px;
        position: relative;
        top: -15px;
        left:10px;
        font-size: 14px;
        color: #333;
    }
</style>