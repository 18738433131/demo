<template>
  <div class="page">
    <div class="xiang">
      <p> <span>大麦</span> &gt; <span>北京</span> &gt; <span>电影</span> &gt; <span>大型多媒体励志互动儿童剧《奇门遁甲》（11月）</span></p>
    </div>
    <div class="xiang-nav">
      <ul>
        <li> <img src="../assets/a13.png" /> </li>
        <li>
          <p>大型多媒体励志互动儿童剧《奇门遁甲》（11月）</p>
          <p>"奇门遁甲"</p>
          <p> <span class="xiang-1">√</span>
              <span>项目待定</span>
              <span class="x">——</span>
              <span class="xiang-1">√</span>
                  <span>预售/预定</span>
                  <span class="x">——</span>
                  <span class="xiang-1">3</span>
                      <span>售票中</span>
                      <span>——</span>
                      <span>4</span>
                          <span>演出开始</span>
            </p>
            <div class="xiang-nav-c">
              <p style="font-size: 12px;white-space: nowrap;">演出时间：</p>
              <p> <span>1999-11-09 09:44:55</span>
               <span>2000-11-09 09:44:55</span>
               <span>2001-11-09 09:44:55</span>
               <span>2002-11-09 09:44:55</span>
               </p>
            </div>
            <p>选择票价：<span>30元</span>
               <span>90元</span>
               <span>100元</span></p>
              <router-link to="/cont9"><p>选座够买</p></router-link>
        </li>
        <li>
          <p>大麦网评分</p>
          <p> <img src="../assets/c10.png" /> </p>
          <p v-for="y in msg1">{{y.name}}</p>
        </li>
      </ul>
    </div>
    <div class="xiang-con">
      <div class="xiang-left">
        <ul class="xiang-2">
          <li>演出信息</li>
          <li>精彩剧评</li>
          <li>购买说明</li>
          <li>付款方式</li>
        </ul>
        <p> <img src="../assets/c11.png" /> </p>
      </div>
      <div class="xiang-right">
        <ul>
          <li>热门推荐</li>
          <li> <img src="../assets/a14.png" />
                <p>大型多媒体励志互动儿童剧《爱丽丝梦游仙境》（11月）</p>
          </li>
          <li v-for="y in msg2">
            <p>{{y.name}}</p>
            <p>{{y.time}}</p>
          </li>
        </ul>
        <ul>
          <li>浏览历史</li>
          <li v-for="y in msg2">
            <p>{{y.name}}</p>
          </li>
          <li v-for="y in msg2">
            <p>{{y.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="../script/cont8.js">
</script>

<style scoped="scoped">
  @import url("../style/cont8.css");
</style>
