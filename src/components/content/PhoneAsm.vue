<template>
  <div class="phonewarp">
    <!-- 手机类别 -->
    
      <div class="topbox">
        <h1 class="title">手机</h1>
        <img class="alldrift top" src="../../assets/img/phone/k40.webp">
      </div>
      <!-- 手机列表容器 -->
      <div class="">
        <!-- 左大图 -->
          <div class="left">
              <img class="alldrift" src="../../assets/img/phone/phone1.webp">
          </div>
          <!-- 右列表 -->
          <div class="right">
              <ul class="phoneul">
                  <li class="alldrift" v-for="(items,index) in goods" :key="index">
                    <a href="javascript:;">
                       <div class="minwarp">
                          <img :src="require('../../assets/img/'+items.path)" alt="">
                          <h3>{{items.name}}</h3>
                          <p>{{items.price}}元起</p>
                        </div>
                    </a>
                  </li>
                 
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"PhoneAsm",
    computed:{
        ...mapState("phone",["goods"])
    }
}
</script>

<style scoped>
    .phonewarp{
      width: 1230px;
      height: 872px;
      margin:auto;
      overflow: hidden;
      padding: 0px 14px;
    }
    .topbox{
      width: 1226px;
      height: 182px;
      margin:auto;
      padding: 30px 0px;
    }
    .top{
      width: 1226px;
      height: 120px;
    }

    .left{
     float: left;
    }
    .left img{
      width: 234px;
      height: 614px;
    }
    .right{
      float: right;
      width: 992px;
      height: 614px;
      /* overflow: hidden; */
    }
    .phoneul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .phoneul li{
       width: 234px;
       height: 300px;
       margin: 0px 0px 15px 10px;
       background-color: #fff;
    }
    a{
      display: block;
      width: 234px;
      height: 300px;
      color: rgb(71, 71, 71);
    }
    p{
      color: #ff6700;
      margin-top: 15px;
    }
    .minwarp{
      width: 234px;
      height: 300px;
      text-align: center;
    }
    .minwarp img{
      margin: auto;
      width: 160px;
      height: 160px;
      margin-top: 10px;
      margin-bottom: 20px;
    }

</style>