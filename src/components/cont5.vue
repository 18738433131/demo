<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/cont2">戏剧</router-link>
        </li>
        <li>
          <router-link to="/cont3">体育</router-link>
        </li>
        <li>
          <router-link to="/cont4">亲子</router-link>
        </li>
        <li class="active">
          <router-link to="/cont5">摇滚</router-link>
        </li>
        <li>
          <router-link to="/cont6">舞蹈古典</router-link>
        </li>
      </ul>
      <ul>
        <li>精彩专辑</li>
      </ul>
    </div>
    <div class="lunbo">
      <ul class="image">
        <li><img src="../assets/b1.png" /></li>
        <li><img src="../assets/b2.png" /></li>
      </ul>
    </div>
    <div class="rm">
      <p class="h">热门推荐</p>
      <ul>
        <li v-for="yr in msg3">
          <p>
            <img :src="yr.ii" />
          </p>
          <p>{{yr.name}}</p>
          <p>票价：<span>{{yr.s}}</span> 起</p>
        </li>
      </ul>
    </div>
    <div class="ho">
      <p class="h">热门推荐</p>
      <ul class="ban">
        <li>
          <img src="../assets/b3.png" />
        </li>
        <li>
          <p v-for="y in msg1">
            <img :src="y.ii" />
          </p>
        </li>
        <li>
          <img src="../assets/b7.png" />
        </li>
      </ul>
    </div>
    <div class="tab">
      <div class="tab-header">
        <ul>
          <li>巡演专区</li>
          <li>视听享受</li>
          <li>剧场演出</li>
        </ul>
      </div>
      <div class="tab-cont">
        <div class="con">
        <div v-for="y in msg4" class="con1" >
          <div> <img :src="y.ii" /> </div>
          <div>
            <p>{{y.name1}}</p>
            <p>{{y.name2}}</p>
            <p>票价：<span>{{y.name4}}</span>起</p>
          </div>
        </div>
        </div>
         <div class="con">
        <div v-for="y in msg4" class="con1">
          <div> <img :src="y.ii" /> </div>
          <div>
            <p>{{y.name1}}</p>
            <p>{{y.name2}}</p>
            <p>票价：<span>{{y.name4}}</span>起</p>
          </div>
        </div>
        </div>
         <div class="con">
        <div v-for="y in msg4" class="con1">
          <div> <img :src="y.ii" /> </div>
          <div>
            <p>{{y.name1}}</p>
            <p>{{y.name2}}</p>
            <p>票价：<span>{{y.name4}}</span>起</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="bon">
      <p class="h">戏剧达人</p>
      <ul>
        <li> <img src="../assets/b17.png" /> </li>
         <li>
           <div v-for="y in msg5" class="con2">
             <div> <img :src="y.ii" /> </div>
             <div>
               <p>{{y.name1}}</p>
               <p>{{y.name2}}</p>
               <p>{{y.name3}}</p>
               <p>票价：<span>{{y.name4}}</span>起</p>
             </div>
           </div>
         </li>
      </ul>
    </div>
    <div style="margin-top: 30px;">
      <img src="../assets/b18.png" />
    </div>
  </div>
</template>

<style scoped="scoped">
  @import url("../style/cont5.css");
</style>
<script src="../script/cont5.js"></script>
