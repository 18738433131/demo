<template>
  <div class="page">
    <p> <img src="../assets/c17.png" /> </p>
    <table>
      <tr><th>订单编号</th><th>商品名称</th><th>订单金额</th><th>应付金额</th></tr>
      <tr><td>4300000201004178510</td><td>是秦关行只够氤氲师团</td><td>84.71</td><td>84.71</td></tr>
    </table>
    <p>应付总金额：<span>84.71</span> 元</p>
    <p>以下支付平台都支持大多数银行卡</p>
    <p>
     <input type="radio" name="a" id="y" /> <label for="y"> <img src="../assets/c18.png" /> </label>
     <input type="radio" name="a" id="z" /> <label for="z"> <img src="../assets/c19.png" /> </label>
    </p>
    <router-link to="/cont12">确认无误，支付</router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped="scoped">
  @import url("../style/cont11.css");
</style>
