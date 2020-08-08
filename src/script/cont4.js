var i = 0,
  timer;
var sum = $(".image li").length;
$(function() {
  $(".image li").eq(0).show();

  $(".lunbo").hover(function() {

    clearInterval(timer);
  }, function() {

    iLunbo();
  })
  iLunbo();
  $(".tab-cont .con").eq(1).hide();
   $(".tab-cont .con").eq(2).hide();
    $(".tab-cont .con").eq(1).css({"color":"#ff3c1b"})
   $(".tab-cont .con").eq(2).css({"color":"#eb37ba"})
   $(".tab-header ul li").eq(0).css({
     "color":"black",
     "background-color":"white"
   })
  $(".tab-header ul li").click(function(){
    $(this).css({
      "color":"black",
      "background-color":"white"
    })
    $(this).siblings().css({
    "color":"",
    "background-color":""
    })
  		var index=$(this).index();
  		$(".tab-cont .con").eq(index).show();
  		$(".tab-cont .con").eq(index).siblings().hide()
  	})
});

/*自动轮播*/
function iLunbo() {
  timer = setInterval(function() {
    i++;
    if (i == sum - 1) {
      i = -1;
    }
    startLunbo();
  }, 4000)
}

/*图片轮播和提示信息*/
function startLunbo() {
  if (i == 2) {
    i = 0;
  }
  $(".image>li").eq(i).fadeIn().siblings().fadeOut();
}

export default {
  data() {
    return {
msg3: [{
          ii: require('../assets/a2.png'),
          name: '门与匙 2017嘻哈巡回演...',
          s: '￥180'
        },
        {
          ii: require('../assets/a3.png'),
          name: '门与匙 2017嘻哈巡回演...',
          s: '￥180'
        },
        {
          ii: require('../assets/a4.png'),
          name: '门与匙 2017嘻哈巡回演...',
          s: '￥180'
        },
        {
          ii: require('../assets/a5.png'),
          name: '门与匙 2017嘻哈巡回演...',
          s: '￥180'
        },
        {
          ii: require('../assets/a6.png'),
          name: '门与匙 2017嘻哈巡回演...',
          s: '￥180'
        },
        {
          ii: require('../assets/a7.png'),
          name: '门与匙 2017嘻哈巡回演...',
          s: '￥180'
        }
      ],
      msg1:[
        {ii: require('../assets/b4.png')},
        {ii: require('../assets/b5.png')},
        {ii: require('../assets/b6.png')},
        {ii: require('../assets/b8.png')},
        {ii: require('../assets/b9.png')},
        {ii: require('../assets/b10.png')}
      ],
      msg4: [{
        ii: require("../assets/b11.png"),
        name1: '孟京辉经典戏剧作品...',
        name2: '2020/03/27~2020/03/31',
        name4: '¥ 180'
      },
      {
        ii: require("../assets/b12.png"),
        name1: '孟京辉经典戏剧作品...',
        name2: '2020/03/27~2020/03/31',
        name4: '¥ 180'
      },
      {
        ii: require("../assets/b13.png"),
        name1: '孟京辉经典戏剧作品...',
        name2: '2020/03/27~2020/03/31',
        name4: '¥ 180'
      },
      {
        ii: require("../assets/b14.png"),
        name1: '孟京辉经典戏剧作品...',
        name2: '2020/03/27~2020/03/31',
        name4: '¥ 180'
      },
      {
        ii: require("../assets/b15.png"),
        name1: '孟京辉经典戏剧作品...',
        name2: '2020/03/27~2020/03/31',
        name4: '¥ 180'
      },
      {
        ii: require("../assets/b16.png"),
        name1: '孟京辉经典戏剧作品...',
        name2: '2020/03/27~2020/03/31',
        name4: '¥ 180'
      }],
      msg5: [{
        ii: require("../assets/a12.png"),
        name1: '2017-2018北京农商银行男篮',
        name2: '2020/03/27~2020/03/31',
        name3: '首都体育馆',
        name4: '¥ 180起'
      },
      {
        ii: require("../assets/a13.png"),
        name1: '2017-2018北京农商银行男篮',
        name2: '2020/03/27~2020/03/31',
        name3: '首都体育馆',
        name4: '¥ 180起'
      },
      {
        ii: require("../assets/a14.png"),
        name1: '2017-2018北京农商银行男篮',
        name2: '2020/03/27~2020/03/31',
        name3: '首都体育馆',
        name4: '¥ 180起'
      },
      {
        ii: require("../assets/a15.png"),
        name1: '2017-2018北京农商银行男篮',
        name2: '2020/03/27~2020/03/31',
        name3: '首都体育馆',
        name4: '¥ 180起'
      },
      {
        ii: require("../assets/a14.png"),
        name1: '2017-2018北京农商银行男篮',
        name2: '2020/03/27~2020/03/31',
        name3: '首都体育馆',
        name4: '¥ 180起'
      },
      {
        ii: require("../assets/a15.png"),
        name1: '2017-2018北京农商银行男篮',
        name2: '2020/03/27~2020/03/31',
        name3: '首都体育馆',
        name4: '¥ 180起'
      }]
    }
  }
}
