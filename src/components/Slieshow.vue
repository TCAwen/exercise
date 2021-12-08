<template>
    <!-- 轮播图 -->
    <span>
        <div class="block">
            <!-- 左侧导航 -->
            <div class="leftnag">
                <ul class="leftnagul">
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[0].name}}</a>
                        <!-- 展示商品 prop传入vux参数-->
                        <ComShow class="comShow"  :sort="$store.state.phone.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[1].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.tv.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[2].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.flat.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[3].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.appliances.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[4].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.wear.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[5].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.intelligence.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[6].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.parts.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[7].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.heathy.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[8].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.headset.goods"></ComShow>
                    </li>
                    <li class="leftnagli">
                        <i class="el-icon-arrow-right"></i>
                        <a href="javascript:;">{{sortName[9].name}}</a>
                        <!-- 展示商品 -->
                        <ComShow class="comShow" :sort="$store.state.life.goods"></ComShow>
                    </li>
                </ul>
            </div>
            
            <!-- 轮播图 -->
            <div class="prev" @click="prevclick('prev')">
               <i class="el-icon-arrow-left"></i>
            </div>
            <div class="next" @click="prevclick('next')">
                <i class="el-icon-arrow-right"></i>
            </div>
            <el-carousel trigger="click" height="460px" arrow="never" ref="carousel">
                <el-carousel-item v-for="(img,index) in imgList" :key="index">
                    <img :src="require('../assets/img/Carousel/'+img.url)" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <Recom></Recom>
    </span>
</template>

<script>
import ComShow from './ComShow.vue'
import Recom from './Recom.vue'
export default {
    name:"Slieshow",
    components:{ComShow,Recom},
    data() {
        return {
            comShow:false,
            // 轮播图路径
            imgList:[
                {url:'Carousel01.jpeg'},
                {url:'Carousel02.webp'},
                {url:'Carousel03.webp'},
                {url:'Carousel04.webp'},

            ],
            // 分类数据
            sortName:[
                {name:"手机",id:"01",storename:"phone"},
                {name:"电视",id:"02"},
                {name:"笔记本 平板",id:"03",storename:"tv"},
                {name:"家电",id:"04",storename:""},
                {name:"穿戴",id:"05",storename:""},
                {name:"智能",id:"06",storename:""},
                {name:"配件",id:"07",storename:""},
                {name:"健康",id:"08",storename:""},
                {name:"耳机",id:"09",storename:""},
                {name:"生活",id:"10",storename:""},
            ]
        }
    },
    methods: {
        //轮播图翻页
        prevclick(val){
            if (val == "prev") {
                this.$refs.carousel.prev()
            }else{
                this.$refs.carousel.next()
            }
        },
    },
   
    
}
</script>

<style scoped>
    /* 左侧导航栏 */
    .leftnag{
        z-index: 10;
        width: 234px;
        height: 420px;
        background-color: #6d6d6d;
        position:absolute;
        padding: 20px 0px;
    }
    .leftnagul li{
        height: 42px;
        width: 234px;
        line-height:42px;
    }
    .leftnagul li:hover{
        background-color:#e75d00 ;
    }
    .leftnagul a{
        color: #FFF;
        font-size: 14px;
        padding: 0px 0px 0px 25px;
    }
    .leftnagul i{
        position: relative;
        left: 200px;
        color: #FFF;
        opacity: 0.8;
        font-size: 16px;
    }
  /* 设置轮播尺寸 */
    .block{
        width: 1226px;
        height: 460px;
        margin: auto;
        position: relative;
    }
    .block img{
        width: 1226px;
        height: 460px;
    }
    /* 轮播图按钮 */
    .prev,.next{
        position: absolute;
        z-index: 1;
        width: 40px;
        height: 70px;
        line-height: 70px;
        font-size: 40px;
        color: rgb(114, 114, 114);
        text-align: center;
        border-radius:5px ;
        opacity: 0.6;
    }
    /* 上下页切换 */
    .prev:hover,.next:hover{
        background-color: rgb(88, 88, 88);
        color: #FFF;
        opacity: 0.6;
    }
    .prev{
        top:45%;
        left: 234px;
    }
    .next{
        top:45%;
        right: 0px;
    }
    /*  */
    .comShow{
        z-index: 10;
        display: none;
    }
    /* 鼠标移入显示商品 */
    .leftnagli:hover .comShow{
        display: block;
    }
</style>