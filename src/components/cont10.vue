<template>
  <div class="page">
    <p><img src="../assets/c15.png" /></p>
    <ul>
      <li class="gou"><span>实名证件信息</span></li>
      <li>购票人： <span>选择购票人</span> </li>
      <li  class="gou"><span>选择付款方式</span></li>
      <li> <img src="../assets/c16.png" /> 网上付款 </li>
      <li class="gou"> <span>商品清单&ensp;&ensp;&ensp;</span> </li>
      <li>
        <table>
          <tr><th>商品名称</th><th>座位号</th><th>价格</th><th>数量</th><th>价格小计(元)</th></tr>
          <tr><td>大型多媒体励志互动儿童剧《奇门遁甲》（11月）</td><td>1排6座</td><td>90</td><td>1</td><td>90</td></tr>
          <tr><td>大型多媒体励志互动儿童剧《奇门遁甲》（11月）</td><td>1排7座</td><td>90</td><td>1</td><td>90</td></tr>
        </table>
      </li>
      <li class="gou"> <span>我要开发票</span> </li>
      <li class="gou"> <span>公司</span> <span>个人</span></li>
      <li>
        <p>
          <label>公司抬头：</label><input type="text" placeholder="请输入公司抬头" />
        </p>
        <p>
          <label>公司税号：</label><input type="text" placeholder="请输入公司税号" />
        </p>
        <p> <span>确认发票信息</span> </p>
      </li>
      <li>
        <p> <input type="checkbox" checked="checked" />购买“安心订票保险”，本报单金额：20.00元 </p>
        <p>查看《保险服务说明》和《安心订票保险条款》</p>
        <p>购买保险，请填写真实姓名</p>
         <p>商品金额：<span>￥180</span></p>
        <p>商品保险：+<span>￥20</span></p>
        <p>待支付金额：<span>￥200</span></p>
        <p> <input type="checkbox" checked="checked" />我已阅读《订票服务条款》、《退换货约定》、《退款约定》</p>
         <p>同意“票品为不记名凭证，请您妥善保管，遗失不补”</p>
        <router-link to="/cont11">同意以上协议并提交订单</router-link>
      </li>
    </ul>
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
  @import url("../style/cont10.css");
</style>
