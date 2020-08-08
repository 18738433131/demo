<template>
  <div class="d-box">
     <p>我的大麦&gt;交易中心&gt;订单管理</p>
     <p><span>近期订单列表</span></p>
     <div class="d-x">
       <ul>
         <li>
           <select>
             <option>全部订单</option>
           </select>
           <select>
             <option>全部</option>
           </select>
         </li>
         <li>
           <input type="text" placeholder="请输入订单编号、商品名称" />
           <button>查询</button>
         </li>
       </ul>
     </div>
    <table>
      <tr><th>订单编号</th><th>购买时间</th><th>商品名称</th><th>数量</th><th>单价</th><th>订单金额</th><th>交易状态</th><th>操作</th></tr>
      <tr><td>6200000198709261657</td><td>2019-05-09 09:51:01</td><td>助其但是看见对方卡刷积分但是大家都</td><td>1</td><td>106</td><td>834</td><td>待支付</td><td></td></tr>
      <tr><td>6200000198709261657</td><td>2019-05-09 09:51:01</td><td>助其但是看见对方卡刷积分但是大家都</td><td>2</td><td>188</td><td>465</td><td>待支付</td><td></td></tr>
   </table>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .d-box{
    font-size: 12px;
    width: 970px;
  }
  .d-box p:first-child{
    box-sizing: border-box;
    padding: 14px;
    border: 1px solid #E6E6E6;
    background-image:  linear-gradient(#f0f0f0,white) ;
  }
  .d-box p:nth-child(2){
    margin-top: 30px;
    border-bottom: 1px solid #A0A0A0;
  }
  .d-box p:nth-child(2) span{
    font-size: 16px;
    display: inline-block;
    color: #FF3C1B;
    border-bottom: 2px solid #FF3C1B;
    box-sizing: border-box;
    padding: 4px 10px;
  }
  .d-x ul{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .d-x ul select{
    width: 140px;
    height: 30px;
  }
  .d-x ul input{
    width: 300px;
    height: 30px;
  }
  .d-x ul button{
    height: 30px;
    width: 60px;
  }
  table{
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0 30px 0;
  }
  tr,th,td{
    border: 1px solid #999999;
  }
  th{
    height: 42px;
    line-height: 42px;
     background-color: #D6D6D6;
  }
  th,td{
    width: 230px;
    padding-left: 10px;
    font-size: 12px;
  }
</style>
