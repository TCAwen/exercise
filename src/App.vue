<template>
  <div>
    <!-- 顶部 -->
    <Header/>
    <!-- 导航 -->
    <Navigation/>
    <!-- 轮播图 -->
    <Slieshow/>
    <!-- 网页内容 -->
    <Content/>
    <!-- 底部信息 -->
    <Foot/>
    <!-- 侧边定位栏 -->
    <div class="sidebar">
        <ul class="sideul">
          <li><i class="el-icon-mobile sidei"></i><span>手机App</span></li>
          <li><i class="el-icon-user sidei"></i><span>个人中心</span></li>
          <li><i class="el-icon-setting sidei"></i><span>售后服务</span></li>
          <li><i class="el-icon-service sidei"></i><span>人工客服</span></li>
          <li><i class="el-icon-shopping-cart-2 sidei"></i><span>购物车</span></li>
          <li class="lastli" v-show="gotop" @click="toTop"><i class="el-icon-top sidei"></i><span>回到顶部</span></li>
        </ul>
    </div>
    <!-- 底部logo -->
    <div class="footbanner">
        <a><img src="./assets/img/logo.png">让全球每个人都能享受科技带来的美好生活</a></div>
    </div>
</template>

<script>
import Header from './components/Herder.vue'
import Navigation from './components/Navigation.vue'
import Slieshow from './components/Slieshow.vue'
import Content from './components/Content.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'App',
  components: {Header,Navigation,Slieshow,Content,Foot},
  data() {
    return {
      gotop: false
    }
  },
  methods: {
    // 根据当前滚动距离判断是否显示回到顶部按钮
    handleScroll() {
      // 获取当前滚动条据顶部的距离
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        // 判断距离大于800时显示回到顶部按钮
        scrolltop > 800 ? (this.gotop = true) : (this.gotop = false)
      }, 
    toTop() { 
      let top = document.documentElement.scrollTop || document.body.scrollTop; 
      // 实现滚动效果  开启定时器 让滚动条每隔一定时间滚动 直到顶部关闭定时器
      const timeTop = setInterval(() => { 
          document.body.scrollTop = document.documentElement.scrollTop = top -= 50; 
          if (top <= 0) { 
            clearInterval(timeTop)
          } 
      }, 10); 
    }
  },
  mounted() {
    // 添加监听事件，滚动条变化时调用handleScroll  
    window.addEventListener("scroll", this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener("scroll",this.handleScroll)
  },
}
</script>

<style>
  .alldrift:hover{
      box-shadow: 0px 0px 20px rgba(179, 178, 178, 0.8);
      transition: all 0.6s;
  }
  .title{
    height: 58px;
    font-size: 22px;
    line-height: 58px;
    color: #333;
    font-family: 'Helvetica Neue','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .footbanner{
    width: 100%;
    height:150px;
    background-color: rgb(233, 233, 233);
    text-align: center;
    line-height: 130px;
  }
  .footbanner a{
    font-size: 20px;
    color: #cccc;
    line-height: 50px;
    position: relative;
  }
  .footbanner img{
    position: absolute;
    top: -12px;
    left: -60px;
    width: 50px;
    height: 50px;
  }
  /* 侧边栏 */
  .sidebar{
    position: fixed;
    right: 0px;
    bottom: 110px;
    z-index: 99;
  }
  .sideul li{
      width: 70px;
      height: 70px;
      /* line-height: 70px; */
      font-size: 14px;
      color: #757575;
      border: 1px solid #cccc;
      text-align: center;
      background-color: #fff;
  }
  .sideul li:hover{
    color: #FF6700;
  }
  .sidei{
    display: block;
    font-size: 30px;
    margin-top: 10px;
  }
  .lastli{
    margin-top: 20px;
  }
</style>
