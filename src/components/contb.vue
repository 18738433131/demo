<template>
  <div class="d-box">
    <p>我的大麦&gt;交易中心&gt;个人信息</p>
    <p>
      <span>基本资料</span>
      <span>头像设置</span>
      <span>兴趣爱好</span>
    </p>
    <ul>
      <li>完善更多个人信息，有助于我们为您提供更加个性化的服务，大麦网将最终并保护您的隐私。</li>
      <li><label><span>*</span>昵称</label>&ensp;<input type="text" /> </li>
      <li><label><span>*</span>联系电话</label>&ensp;<input type="number" /> </li>
      <li><label>真实姓名</label>&ensp;<input type="text" /> </li>
      <li><label>身份证号</label>&ensp;<input type="text" /> </li>
      <li><label>生日</label>&ensp;<input type="date" /> </li>
      <li><label>性别</label>&ensp;<input type="radio" name="a" />男 <input type="radio" name="a" /> 女</li>
      <li><button>提交</button></li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .d-box {
    font-size: 12px;
    width: 970px;
  }

  .d-box p:first-child {
    box-sizing: border-box;
    padding: 14px;
    border: 1px solid #E6E6E6;
    background-image: linear-gradient(#f0f0f0, white);
    margin-bottom: 10px;
  }

  .d-box p:nth-child(2) span {
    display: inline-block;
    box-sizing: border-box;
    padding: 4px 10px;
    border: 1px solid #A0A0A0;
    background-color: #F0F0F0;
  }

  .d-box p:nth-child(2) span:first-child {
    background-color: white;
    color: #FF3C1B;
    border-bottom: 0;
  }
  ul{
    box-sizing: border-box;
    padding: 20px;
  }
  ul li:first-child{
    box-sizing: border-box;
    padding: 8px 16px;
    background-color: #fffdee;
    border: 1px solid salmon;
    color: #A0A0A0;
    margin: 0;
  }
   ul li{
     margin-top: 20px;
   }
  ul li span{
    color: #FF3C1B;
  }
  ul li:nth-child(2) input,ul li:nth-child(3) input,ul li:nth-child(4) input,ul li:nth-child(5) input{
width: 320px;
height: 30px;
  }
  ul li:nth-child(6) input{
    height: 30px;
  }
  ul li label{
    width: 100px;
    text-align: right;
    margin-right: 10px;
    float: left;
  }
  ul li button{
    width: 60px;
    height: 30px;
    background-color: #FF3C1B;
    color: white;
    border-radius: 4px;
    margin-left: 100px;
  }
</style>
