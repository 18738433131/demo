<template>
  <div id="page">
     <div class="header">
      <div class="index-box">
        <div class="index-l">
            <p>
              <img src="./assets/logo.png" />
            </p>
            <p>
              <router-link to="/cont7">北京站</router-link><span class="nabla"></span>
            </p>
          </div>
          <div class="index-r">
            <ul>
              <li>
                <input type="text" placeholder="请输入演出、赛事、艺人、场馆名称..." />
                <span>
                  <img src="./assets/search.png" />
                </span>
              </li>
              <li>
                <router-link to="/cont14">HI,sdfaa</router-link>
                <a>退出</a>
              </li>|
              <li>
               <router-link to="/cont13">我的大麦</router-link>
                <span>&or;</span>
              </li>|
              <li>
                我的订单
              </li>
            </ul>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <footer>
        <div class="box">
          <ul >
            <li v-for="y in msg1">{{y.name}}</li>
          </ul>
          <ul >
            <li v-for="y in msg2">{{y.name}}</li>
          </ul>
          <ul >
            <li v-for="y in msg3">{{y.name}}</li>
          </ul>
          <ul >
            <li v-for="y in msg4">
              <p>{{y.name}}</p>
              <p style="padding-top: 16px;"> <img :src="y.img" /> </p>
            </li>
          </ul>
          <ul>
            <li v-for="y in msg5">
              <p>{{y.name}}</p>
              <p style="padding-top: 16px;"> <img :src="y.img" /> </p>
            </li>
          </ul>
          <ul >
            <li v-for="y in msg6">{{y.name}}</li>
          </ul>
          <ul >
            <li v-for="y in msg7">{{y.name}}</li>
          </ul>
          <ul >
            <li v-for="y in msg8">{{y.name}}</li>
          </ul>
        </div>
        <div class="box-y">
           <ul>
             <li v-for="y in msg9">{{y.name}}</li>
           </ul>
           <ul>
             <li> <img v-for="y in msg10" :src="y.img" /> </li>
           </ul>
        </div>
      </footer>
  </div>
</template>

<script src="./script/index.js"></script>

<style>
  * {margin: 0;padding: 0;list-style: none;text-decoration: none;}
  body{background-color: #f5f5f5;}
  /* #page {width: 1200px;margin: 0 auto;} */
   .page{width: 1200px;margin: 0 auto;}
  .header {background-color: white;}
  .index-box{width: 1200px;margin: 0 auto;box-sizing: border-box;padding: 20px 0;display: flex;justify-content: space-between;}
  .index-l {display: flex;align-items: center;font-size: 12px;}
  .index-l p:last-child{margin-left: 30px;position: relative;}
  .nabla {width: 0px;height: 0px;border-top: 8px solid #989898;border-left: 4px solid transparent;border-right: 4px solid transparent;position: absolute;top: 6px;left: 44px;}
  .index-r ul {display: flex;align-items: center;}
  .index-r ul li:first-child{position: relative;}
  .index-r ul li:first-child input{height: 30px;width: 340px;border: 1px solid #d6d6d6;border-radius: 20px;box-sizing: border-box;padding: 0 20px;font-size: 12px;}
  .index-r ul li:first-child span img{width: 16px;height: 16px;position: absolute;top: 6px;right: 20px;}
  .index-r li{margin: 0 14px;font-size: 12px;}
  .index-r ul li:nth-child(3) span{color: #989898;}
  footer{margin-top: 130px;background-color: #e6e6e6;box-sizing: border-box;padding: 40px 0;}
  .box {display: flex;width: 1200px;margin: 0 auto;border-bottom: 4px solid #ff3c1b;justify-content: space-between;}
   .box ul{padding-bottom: 30px;}
  .box ul li{font-size: 12px;color: #686868;padding: 8px 0;}
  .box ul li:first-child{font-size: 16px;color: #000000;}
  .box-y ul{display: flex;text-align: center;justify-content: center;}
  .box-y ul:first-child li{padding: 20px 6px;font-size: 16px;}
  .box-y ul:last-child li img{padding: 10px 8px;}
  .active{background-color: #FF3C1B;}
  .active a{color: white;}
  a{color: black;}
</style>
