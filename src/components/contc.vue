<template>
  <div class="d-box">
     <p>我的大麦&gt;交易中心&gt;常用购票人</p>
     <p><button class="tian">新建购票人</button></p>
     <table>
       <tr>
         <th>#</th>
         <th>姓名</th>
         <th>卡类型</th>
         <th>身份证号</th>
         <th>操作</th>
       </tr>
       <tr>
        <td>1</td>
        <td>侯浩</td>
        <td>身份证</td>
        <td>45641321456468574</td>
        <td><button>删除</button></td>
       </tr>
       <tr>
        <td>2</td>
        <td>侯浩</td>
        <td>身份证</td>
        <td>45641321456468574</td>
        <td><button>删除</button></td>
       </tr>
       <tr class="to">
        <td>3</td>
        <td>侯浩</td>
        <td>身份证</td>
        <td>45641321456468574</td>
        <td><button>删除</button></td>
       </tr>
     </table>
  </div>
</template>

<script>
  $(function(){
      $("table tr button").click(function(){
        $(this).closest('tr').remove();
      })
  })
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
    text-align: right;
    margin: 14px 0;
  }
  .d-box button{
    background-color: #FF3C1B;
    color: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px 14px;
  }
   .d-box table button{
     box-sizing: border-box;
     padding: 6px 10px;
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
