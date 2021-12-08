<template>
    <div class="navigation">
        <div class="logo">
            <img src="../assets/img/logo.png" alt="logo">
        </div>
        <div class="center">
            <ul class="centerul">
                <li>
                    <a href="javascript:;">全部商品</a>
                </li>
                <li class="phonea">
                    <a  href="javascript:;">手机</a>
                    <div class="items">
                            <div class="itemslist">
                                <ul>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </li>
                <li class="booka">
                    <a  href="javascript:;">平板</a>
                    <div class="items">
                            <div class="itemslist">
                                <ul>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </li>
                <li class="appliancesa">
                    <a href="javascript:;">家电</a>
                    <div class="items">
                            <div class="itemslist">
                                <ul>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </li>
                <li class="notebooka">
                    <a href="javascript:;">笔记本</a>
                    <div class="items">
                            <div class="itemslist">
                                <ul>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </li>
                <li  class="apparela">
                    <a href="javascript:;">智能穿戴</a>
                     <div class="items">
                            <div class="itemslist">
                                <ul>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="itemslista">
                                            <img src="../assets/img/phone/phone2.webp" alt="">
                                            <div class="phonename">小米11</div>
                                            <p class="price">3599元起</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </li>
                <li>
                    <a href="javascript:;">售后服务</a>
                </li>
            </ul>
        </div>
        <div class="seach">
            <input type="text" placeholder="输入搜索内容">
            <div class="seach-icon">
                <i class="el-icon-search"></i>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"Navigation",
}
</script>

<style scoped>
    .navigation{
        width: 1226px;
        height: 100px;
        margin: auto;
    }
    .logo{
        float: left;
    }
    .logo img{
        width: 56px;
        height: 56px;
        margin-top: 22px;
    }
    .center{
        width: 850px;
        height: 100px;
        float: left;
    }
    .centerul{
        display: flex;
        margin: 0px 100px;
    }
    .centerul li{
        display: inline;
        line-height: 100px;
        text-align: center;
        flex: auto;
    }
    .center a{
        color: rgba(63, 63, 63);
    }
    .seach{
        width: 320px;
        height: 100px;
        float: right;
        display: flex;
        align-items: center;
        position: relative;
    }
    .seach input{
        width: 247px;
        height: 48px;
        line-height: 50px;
        padding: 0px 10px;
        position: absolute;
        border: 1px solid #E0E0E0;
    }
    .seach-icon{
        width: 50px;
        height: 48px;
        color: #a1a1a1;
        line-height: 50px;
        border: 1px solid #E0E0E0;
        font-size: 20px;
        text-align: center;
        position: absolute;
        right: 0px;
        border-left: 0px;
    }
    .seach-icon:hover{
        background-color: #ff6700;
    }

    /* 导航菜单下拉框 */
    .items{
        z-index: 50;
        background-color: #FFF;
        /* display: none; */
        width: 100%;
        height: 0px;
        overflow: hidden;
        position:absolute;
        left: 0px;
        box-shadow: 0px 3px 5px #cccccc;
        transition: all 0.5s;
    }
    .itemslist{
        width: 1226px;
        height: 230px;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
    }
    .itemslist ul{
        position: relative;
        width: 1226px;
        height: 230px;
        margin: 0px;
        display: flex;
    }
    .itemslist li{
        position: relative;
        width: 300px;
        line-height: 1;
        flex: auto;
    }
    .itemslista{
        position: relative;
        height: 230px;
        margin: 35px 20px 0px ;
        font-size: 12px;
    }
    .itemslista img{
        width: 160px;
        height: 110px;
    }
    .itemslista .phonename{
        margin-top: 25px;
        height: 20px;
    }
    .itemslista .price{
        height: 20px;
        color: #ff6700;
    }
    .phonea:hover .items{
        height: 230px;
        border-top: 1px solid rgb(211, 208, 208);
    }
    .booka:hover .items{
        height: 230px;
        border-top: 1px solid rgb(211, 208, 208);
    }
    .notebooka:hover .items{
        height: 230px;
        border-top: 1px solid rgb(211, 208, 208);
    }
    .apparela:hover .items{
        height: 230px;
        border-top: 1px solid rgb(211, 208, 208);
    }
    .appliancesa:hover .items{
        height: 230px;
        border-top: 1px solid rgb(211, 208, 208);
    }
</style>