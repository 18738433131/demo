<template>
  <div class="page">
<form action="" method="post">
  <span class="a1">手</span>
				       <input class="in1" id="in1" type="number" value="" placeholder="请输入登录手机号" /><br />
               <p class="p1">请填写手机号</p>
						   <span class="a1">手</span> <input id="in2" class="in1" type="password" value="" placeholder="请输入新密码" /><br />
               <p class="p2">请填写密码</p>
						    <span class="a1">手</span> <input id="in3" class="in1" type="password" value="" placeholder="确认新密码" /><br />
                <p class="p3">请填写确认密码</p>
                <span class="a1">手</span><input class="in2" type="number" value="" placeholder="请输入验证码" />
                <span class="y2">获取验证码</span><br />
							<button type="button">立即注册</button>
				</form>
  </div>
</template>

<script>
  $(function(){
    /* 验证码验证*/
    function cretaCode(length) {
    		var code = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    			'n',
    			'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    			"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    		);
    		var codeLength = 4;
    		codd = "";
    		for (i = 0; i < codeLength; i++) {
    			var char = Math.floor(Math.random() * 62);
    			codd += code[char]
    		}
    		// $(".y2").text(codd);
    	}
    	$(".y2").click(function() {
    		$(".y2").text(codd)
    	})
    	cretaCode();
      /* 手机号验证*/
      var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/; // 1[356789][0-9] （后面再接8位数）
				$("#in1").focus(function(){
					$(".p1").text("输入手机号");
				})
				$("#in1").blur(function(){
					if ($("#in1").val()=="") {
						$(".p1").text("不为空");
					}else if (mobilereg1.test($("#in1").val())) {
						$(".p1").text("正确");
					}else{
						$(".p1").text("存在非法字符");
					}
				})

        /* 密码验证*/
        var reg4=/^[\w]{6,12}$/;
        				$("#in2").focus(function(){
        					$(".p2").text("至少包含6个字符");
        				})
        				$("#in2").blur(function(){
        					if ($("#in2").val()=="") {
        						$(".p2").text("不为空");
        					}else if(reg4.test($("#in2").val())) {
        						$(".p2").text("正确");
        					}else{
        						$(".p2").text("存在非法字符");
        					}
        				})
        				$("#in3").focus(function(){
        					$(".p3").text("请再次输入密码");
        				})
        				$("#in3").blur(function(){
        					if ($("#in3").val()=="") {
        						$(".p3").text("不为空");
        					}else if ($("#in3").val()==$("#in2").val()) {
        						$(".p3").text("正确");
        					}else{
        						$(".p3").text("两次输入的密码不一致");
        					}
        				})


  })

</script>

<style scoped="scoped">
  .page{
    display: flex;
    justify-content: center;
    background-color: white;
    box-sizing: border-box;
    padding-top: 50px;
    padding-bottom: 100px;
    margin-top: 90px;
    font-size: 12px;
  }
  form{
    position: relative;
  }
  .a1{
    font-size: 12px;
    position: absolute;
    left: 0px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px 0 0 10px;
    display: inline-block;
    width: 20px;
    height: 30px;
    border: 1px solid #FF3C1B;
  }
  p{
    color: #FF3C1B;
    padding-bottom: 10px;
  }
.in1{
  width: 600px;
  height: 30px;
  border-radius: 10px;
  padding-left: 20px;
  border: 1px solid #FF3C1B;
}
.in2{
  width: 320px;
  height: 30px;
  border-radius: 10px;
  padding-left: 20px;
  border: 1px solid #FF3C1B;
}
.y2{
  display: inline-block;
  width: 90px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #A0A0A0;
  line-height: 30px;
  text-align: center;
}
button{
  width: 600px;
  height: 34px;
  background-color: #FF3C1B;
  color: white;
  margin-top: 26px;
}
</style>
