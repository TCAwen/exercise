<template>
  <div>
    <Header/>
    <Navigation/>
    <Slieshow/>
    <Content/>
    <Foot/>
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
  components: {Header,Navigation,Slieshow,Content,Foot}
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
</style>
