<template>
    <div class="top">
        <div class="top-all">
             <div class="top-right">
                 <a href="javascript:;">商城</a>
                 <span>|</span>
                 <a href="javascript:;">服务</a>
                 <span>|</span>
                 <a href="javascript:;">智能生活</a>
                 <span>|</span>
                 <a href="javascript:;">企业</a>
                 <span>|</span>
                 <a href="javascript:;">有品</a>
                 <span>|</span>
                 <a class="downqr" href="javascript:;">手机App
                         <div class="qr">
                            <img src="../assets/img/download.png" alt="app">
                            <span>手机客户端</span>
                        </div>
                 </a>
             </div>
             <div class="car">
                 <i class="el-icon-shopping-cart-2 icon"></i>
                 <a href="javascript:;">购物车</a>
             </div>
             <div class="top-left">
                  <a href="javascript:;">登陆</a>
                 <span>|</span>
                 <a href="javascript:;">注册</a>
             </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"Header",
   
}
</script>

<style scoped>
/* 顶部栏 */
    .top{
        background-color: #333333;
        color: #b0b0b0;
    }
    .top-all{
        width: 1226px;
        height: 40px;
        font-size: 12px;
        line-height: 40px;
        background-color:#333333 ;
        margin-right: auto;
        margin-left: auto;
    }
    .top-all a{
        text-decoration: none;
        color: #b0b0b0;
        margin: 0px 6px 0px 6px ;
    }
    .top-all a:hover{
        color: #fff;
    }
    .top-all span{
        opacity: 0.2;
    }
    .top-right{
        float: left;
    }
    .top-left{
        float:right;
    }
    /* 手机app */
    .downqr{
        position: relative;
    }
    /* 三角形 */
    .downqr::before{
        content: "";
        display: none;
        width:0;
        height: 0;
        position: absolute;
        bottom: -12px;
        left: 0;
        right: 0;
        margin: auto;
        border: 6px solid transparent;
        border-bottom-color: #FFF;

    }
    /* 二维码图片 */
    .qr{
        z-index: 88;
        width: 120px;
        height: 0px;
        overflow: hidden;
        background-color: #FFF;
        position: absolute;
        left: -35px;
        box-shadow: 0px 2px 8px #9e9e9e;
        transition:all 0.3s;
    }
    .qr img{
        width: 100px;
        height: 100px;
        margin:10px 10px 20px 10px;
    }
    /* 二维码动画 */
    .downqr:hover .qr{
        height: 140px;
        /* overflow:visible; */
    }
    .downqr:hover::before{
        display: block;
    }
    .qr span{
        position:absolute;
        bottom: -5px;
        left: 25px;
        display: block;
        opacity: 1;
        color: rgb(12, 12, 12);
        font-size: 14px;
    }
    /* 购物车 */
    .car{
        float: right;
        width: 150px;
        height: 40px;
        margin-left: 20px;
        text-align: center;
        background-color: #424242;
    }
    .icon{
        font-size: 15px;
    }
    .car:hover{
        color: #FF6A00;
        background-color: #FFF;
    }
    .car:hover a{
        color: #FF6A00;
    }

</style>