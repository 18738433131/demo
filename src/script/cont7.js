$(function(){
	$(".tab-header ul li").click(function(){
    $(this).css({"color":"#ff0000","background-color":"white","border-top":"1px solid #ff0000"})
    $(this).siblings().css({"color":"","background-color":"","border-top":""})
		var index=$(this).index();
		$(".tab-cont1 .contt").eq(index).show();
		$(".tab-cont1 .contt").eq(index).siblings().hide()
	})

})
export default{
  data(){
    return{
     msg1:[
       {name:'城市：'},
       {name:'全部'},
       {name:'北京'},
       {name:'上海'},
       {name:'深圳'},
       {name:'杭州'},
       {name:'广州'},
       {name:'成都'},
        {name:'西安'}
     ],
     msg2:[
       {name:'分类：'},
       {name:'全部'},
       {name:'音乐会'},
       {name:'朗诵'},
       {name:'曲苑杂坛'},
       {name:'独奏'},
       {name:'管弦乐'},
       {name:'声乐及合唱'}
     ],
     msg3:[
       {name:'时间：'},
       {name:'全部'},
       {name:'今天'},
       {name:'明天'}
     ],
     msg4: [{
       ii: require("../assets/b5.png"),
       name1: '斯界争程此。',
       name2: '吉林省 白山市 江...',
       name3: '2020/03/27~2020/03/31',
       name4: '¥ 180'
     },
     {
       ii: require("../assets/b4.png"),
       name1: '始身府感本。',
       name2: '河南省 鹤壁市 淇...',
       name3: '2020/03/27~2020/03/31',
       name4: '¥ 180'
     }],
     msg5: [{
       ii: require("../assets/b5.png"),
       name1: '[上海]火相确情况。',
       name2: '商战电传业它想况约实现深刻',
       name3: '2020/03/27',
       name4: '浙江省 丽水市 绥云仙',
       name5: '69-169',
       name6: '电子票'
     },
     {
       ii: require("../assets/b5.png"),
       name1: '[上海]火相确情况。',
       name2: '商战电传业它想况约实现深刻',
       name3: '2020/03/27',
       name4: '浙江省 丽水市 绥云仙',
       name5: '69-169',
       name6: '电子票'
     },
     {
       ii: require("../assets/b5.png"),
       name1: '[上海]火相确情况。',
       name2: '商战电传业它想况约实现深刻',
       name3: '2020/03/27',
       name4: '浙江省 丽水市 绥云仙',
       name5: '69-169',
       name6: '电子票'
     },
     {
       ii: require("../assets/b5.png"),
       name1: '[上海]火相确情况。',
       name2: '商战电传业它想况约实现深刻',
       name3: '2020/03/27',
       name4: '浙江省 丽水市 绥云仙',
       name5: '69-169',
       name6: '电子票'
     },
     {
       ii: require("../assets/b5.png"),
       name1: '[上海]火相确情况。',
       name2: '商战电传业它想况约实现深刻',
       name3: '2020/03/27',
       name4: '浙江省 丽水市 绥云仙',
       name5: '69-169',
       name6: '电子票'
     },
     {
       ii: require("../assets/b5.png"),
       name1: '[上海]火相确情况。',
       name2: '商战电传业它想况约实现深刻',
       name3: '2020/03/27',
       name4: '浙江省 丽水市 绥云仙',
       name5: '69-169',
       name6: '电子票'
     }]
    }
  }
}
