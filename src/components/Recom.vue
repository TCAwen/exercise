<template>
    <div class="recom">
        <div class="item alldrift">
            <img :src="require('../assets/img/tuijian/xiaomi11.jpg')" alt="">
        </div>
        <div class="item alldrift">
            <img :src="require('../assets/img/tuijian/xmmix.jpg')" alt="">
        </div>
        <div class="item alldrift">
            <img :src="require('../assets/img/tuijian/redmibuds.jpeg')" alt="">
        </div>
        <div class="item alldrift">
            <img :src="require('../assets/img/tuijian/xiaomi11.jpg')" alt="">
        </div>
        
    </div>
</template>

<script>
export default {
    name:"Recommend"
}
</script>

<style scoped>
    .recom{
        width: 1226px;
        height: 170px;
        margin: auto;
        margin-top: 15px;
        display: flex;
        justify-content:space-between
    }
    .item{
        float: left;
        width: 300px;
        height: 170px;
        
    }
    .item img{
        width: 300px;
        height: 170px;
    }
</style>