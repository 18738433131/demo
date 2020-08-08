<template>
  <div class="page">
      <div class="ding">
        <div class="ding-left">
           <ul>
             <li>我的大麦</li>
             <li>交易中心<span>&and;</span></li>
             <li class="d-a"><router-link to="/cont13/conta">订单管理</router-link></li>
             <li>交易中心<span>&and;</span></li>
             <li  class="d-a"><router-link to="/cont13/contb">个人信息</router-link></li>
             <li  class="d-a"><router-link to="/cont13/contc">常用购票人</router-link></li>
           </ul>
        </div>
         <div class="ding-right">
           <router-view></router-view>
         </div>
      </div>
  </div>
</template>

<script>
  $(function(){
    $(".d-a:eq(0)").children().css({"color":"#FF3C1B"});
    $(".d-a").click(function(){
      $(this).children().css({"color":"#FF3C1B"});
      $(this).siblings().children().css({"color":"black"});
    })
  })
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style scoped="scoped">
  @import url("../style/cont13.css");
</style>
