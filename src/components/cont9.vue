<template>
  <div class="page">
    <p class="xuan-a"> <span v-for="y in msg1">{{y.name}}  <span>&gt;</span> </span> <span>1999-11-09 09:44:55</span> </p>
    <div class="xuan-b"> <img src="../assets/c12.png" /> </div>
    <div class="xuan-c">
      <div class="xuan-left"> <img src="../assets/c13.png" /> </div>
      <div class="xuan-right">
        <p class="xuan-d">已选座位[<span>2</span>]</p>
        <ul>
          <li>
            <div>
              <p> <img src="../assets/c14.png" /> </p>
              <p>90</p>
            </div>
            <div>
              <p>座位：1排7号</p>
              <p>看台：中国儿童中心剧院-海淀</p>
              <p>楼层：剧场</p>
            </div>
          </li>
          <li>
            <div>
              <p> <img src="../assets/c14.png" /> </p>
              <p>90</p>
            </div>
            <div>
              <p>座位：1排7号</p>
              <p>看台：中国儿童中心剧院-海淀</p>
              <p>楼层：剧场</p>
            </div>
          </li>
        </ul>
        <router-link to="/cont10">结账：180元</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        msg1:[
          {name:'大麦'},
          {name:'北京'},
          {name:'电影'},
          {name:'大型多媒体离职互动儿童剧《奇门遁甲》（11月）'}
        ]
      }
    }
  }
</script>
<style>
  @import url("../style/cont9.css");
</style>
