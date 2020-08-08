<template>
  <div class="page">
    <div><img src="../assets/d1.png" /></div>
    <div>
      <p class="a">
        <span>账户登录</span>
        <span>短信快捷登录</span>
      </p>
      <div class="deng">
       <p>
          <label>📱</label>
          <input type="number" placeholder="请输入手机号" />
       </p>
       <p>
          <label>🔒</label>
          <input type="password" placeholder="请输入登录密码" />
       </p>
       <p>登录</p>
       <div class="s">
         <p><input type="checkbox">下次自动登录</p>
         <p>忘记密码？<router-link to="/cont15">立即注册</router-link></p>
       </div>
       <p>其他登录：<img src="../assets/a14.png" /> </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
.page{
  box-sizing: border-box;
  padding: 90px 0;
  display: flex;
  justify-content: center;
}
.page div:nth-child(2){
  margin-left: 16px;
  height: 400px;
  width: 460px;
  background-color: white;
}
.a{
  border-bottom: 1px solid #DDDDDD;
}
.page div:nth-child(2) p:nth-child(1) span {
    display: inline-block;
    box-sizing: border-box;
    padding: 4px 10px;
    border: 1px solid #A0A0A0;
    background-color: #F0F0F0;
    border-radius: 6px 6px 0 0;
  }

  .page div:nth-child(2) p:nth-child(1) span:first-child {
    background-color: white;
    color: #FF3C1B;
    border-bottom: 0;
  }
  .deng{
    box-sizing: border-box;
    padding: 10px 20px;
  }
  .deng p:nth-child(2){
    margin-top: 26px;
  }
   .deng p:nth-child(3){
     width: 390px;
     height: 40px;
     line-height: 40px;
     color: white;
     text-align: center;
     margin-top: 33px;
     background-color: #FF3C1B;
     border-radius: 8px;
   }
  label{
    display: inline-block;
    text-align: center;
    line-height: 30px;
    border-radius: 6px 0 0 6px;
    width: 26px;
    height: 30px;
    background-color: #D6D6D6;
    font-size: 12px;
  }
  input:nth-child(2){
    width: 23.125rem;
    height: 30px;
    margin-left: -10px;
    border-radius: 0 6px 6px 0;
  }
  .s p:nth-child(1){
    margin-top: 20px;
  }
  .s{
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .page a{
    color: #FF3C1B;
  }
  .deng p:nth-child(5){
    margin-top: 20px;
  }
  .deng p:nth-child(5) img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
