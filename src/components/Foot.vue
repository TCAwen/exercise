<template>
    <div class="footwarp">
        <div class="foot-service">
            <ul class="footul">
                <li><i class="el-icon-setting"></i>  预约维修服务</li><span>|</span>
                <li><i class="el-icon-box"></i>  7天无理由退货</li><span>|</span>
                <li><i class="el-icon-shopping-cart-1"></i>  15天免费换货</li><span>|</span>
                <li><i class="el-icon-present"></i>  满69包邮</li><span>|</span>
                <li><i class="el-icon-location-information"></i>  520余家售后网点</li>
            </ul>
        </div>
        <div class="foot-links">
            <dl>
                <dt>帮助中心</dt>
                    <dd><a>账户管理</a></dd>
                    <dd><a>购物指南</a></dd>
                    <dd><a>订单操作</a></dd>
            </dl>
            <dl>
                <dt>服务支持</dt>
                    <dd><a>售后政策</a></dd>
                    <dd><a>自助服务</a></dd>
                    <dd><a>相关下载</a></dd>
            </dl>
            <dl>
                <dt>线下门店</dt>
                    <dd><a>小米之家</a></dd>
                    <dd><a>服务网点</a></dd>
                    <dd><a>授权体验店/专区</a></dd>
            </dl>
            <dl>
                <dt>关于小米</dt>
                    <dd><a>了解小米</a></dd>
                    <dd><a>加入小米</a></dd>
                    <dd><a>投资者关系</a></dd>
                    <dd><a>企业社会责任</a></dd>
                    <dd><a>廉洁举报</a></dd>
            </dl>
            <dl>
                <dt>关注我们</dt>
                    <dd><a>新浪微博</a></dd>
                    <dd><a>官方微信</a></dd>
                    <dd><a>联系我们</a></dd>
                    <dd><a>公益基金会</a></dd>
            </dl>
            <dl>
                <dt>特色服务</dt>
                    <dd><a>F 码通道</a></dd>
                    <dd><a>礼物码</a></dd>
                    <dd><a>防伪查询</a></dd>
            </dl>
            <div class="telwarp">
                <p class="phone">400-100-5678</p>
                <p class="time">8:00-18:00</p>
                <a href="javascript:;">
                       <i class="el-icon-chat-dot-square"></i> 人工客服
                </a>
                <p>
                   <a class="guanzhu" href="javascript:;">关注小米
                        <div class="er">
                            <img src="../assets/img/wx-img.png">    
                        </div>    
                   </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Foot"
}
</script>

<style scoped>
    .footwarp{
        width: 100%;
    }
    .foot-service{
        width: 1226px;
        height: 26px;
        margin: auto;
        padding: 27px 0px;
        border-bottom: 1px solid #cccc;
    }
    
    .footul{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .footul li{
        width: 243px;
        height: 25px;
        line-height: 25px;
        text-align: center;
    }
    i{
        font-size: 24px;
    }
    span{
        color: rgba(138, 138, 138, 0.8);
        font-size: 18px;
    }
    .foot-links{
        width: 1226px;
        margin: auto;
        height: 172px;
        padding: 40px 0px;
        display: flex;
        flex-direction: row;
    }
    dl{
        width: 160px;
    }
    dt{
        margin-bottom: 25px;
        font-size: 14px;
    }
    dd a{
        color: #757575;
        font-size: 12px;
        margin-top: 10px;
    }
    .telwarp{
        width: 252px;
        height: 130px;
        border-left: 1px solid #cccc;
        padding-left: 5px;

    }
    .phone{
        color: #FF6700;
        font-size: 22px;
        margin-bottom: 5px;
        text-align: center;
    }
    .time{
        font-size: 12px;
        margin-bottom: 5px;
        text-align: center;
    }
    .telwarp a{
        width: 120px;
        height: 30px;
        display: block;
        margin: auto;
        border:1px solid #FF6700;
        color: #FF6700;
        font-size: 12px;
        line-height: 30px;
        text-align: center;
    }
    .telwarp i{
        font-size: 14px;
    }
    .guanzhu{
        text-align: center;
        font-size: 14px;
        margin-top: 10px;
        position: relative;
    }
    .guanzhu:hover{
        background-color: #FF6700;
        color: #fff;
    }
    .guanzhu:hover .er{
        display: block;
    }
    .er{
        position: absolute;
        left:150px;
        bottom: -15px;
        display: none;
    }
    .er img{
        width: 126px;
        height: 126px;
    }
</style>