//自定义动画封装函数
$.fn.extend({
	ani: function(x, t, d) {
		$(this).addClass("ani");
		$(this).attr("swiper-animate-effect", x);
		$(this).attr("swiper-animate-duration", t);
		$(this).attr("swiper-animate-delay", d)
	}
});

$.fn.extend({
	Tab:function(x,y,w,h){
		$_this=$(this);
		$_this.css({
			left:x,
			top:y,
			width:w,
			height:h,
		});
		$_this.find("img").css({
			width:w,
			height:h,
		});
	}
});

function rand(min, max) {
	return Math.random() * (max - min + 1) + min;
}
for(var i = 0; i < 8; i++) {
	var x = rand(1, 3);
	var y = rand(1, 3);
	$(".s3-main > img").eq(i).css({
		'animation-duration': '' + x + 's',
		'animation-delay': '' + y + 's',
	});

}

//Slide 1 动画效果
$(".s1-m1 li ").eq(0).ani("fadeInLeft", "1s", "1.3s");
$(".s1-m1 li ").eq(1).ani("fadeInDown", "1s", "1.4s");
$(".s1-m1 li ").eq(2).ani("fadeInUp", "1s", "1.5s");
$(".s1-m1 li ").eq(3).ani("fadeInLeft", "1s", "1.6s");
$(".s1-m1 li ").eq(4).ani("fadeInLeft", "1s", "1.7s");
$(".s1-m1 li ").eq(5).ani("fadeInUp", "1s", "1.8s");
$(".s1-m1 li ").eq(6).ani("fadeInDown", "1s", "1.9s");
$(".s1-m1 li ").eq(7).ani("fadeInDown", "1s", "2s");
$(".s1-m1 li ").eq(8).ani("fadeInUp", "1s", "1.3s");
$(".s1-m2 img").eq(0).ani("fadeInDownBig", "1.5s", "2s");
$(".s1-m2 img").eq(1).ani("fadeInDownBig", "1.5s", "2.2s");
$(".s1-m2 img").eq(2).ani("fadeInDownBig", "1.5s", "2.4s");
$(".s1-m2 img").eq(3).ani("fadeInDownBig", "1.5s", "2.6s");
$(".s1-m2 img").eq(4).ani("fadeInDownBig", "1.5s", "2.8s");
$(".s1-foot-txt").ani("zoomIn", "1s", "2s");
$(".s1-foot-i1").ani("slideInDown", "1s", "2s");
$(".s1-foot-i2").ani("slideInUp", "1s", "2s");

//Silde 2 动画
$(".s2-con >p ").eq(0).ani("fadeInRight", "0.5s", "0.3s");
$(".s2-con >p ").eq(1).ani("fadeInLeft", "0.5s", "0.3s");
var time = null;
var time2=null;
var n = 0;

//Silde 4 动画
//$(".line-list li").ani("zoomIn","1s","0.8s");
$(".s4-txt p").eq(0).ani("slideInLeft", "0.8s", "0.3s");
//为下方点击了解添加动画
$(".about").ani("flash", "5s", "1.8s");
//Silde 5动画
$(".s5-img img").click(function() {
	var i = $(this).index();
	var l = $(this).position().left;
	var t = $(this).position().top;
	$(".prize ul").eq(i).show().removeClass("carton2").addClass("carton");
	$(".pri-rve").click(function() {
		$(this).parent().removeClass("carton").addClass("carton2");
	})
})

//Slide 6 动画
//$(".s1-hea-ye").ani("bounceInRight","1.2s","0.8s");
//Slide 7 动画
$(".s7-name").ani("fadeIn", "0.8s", "0.3s");
$(".s7-hea p").eq(1).ani("fadeIn", "0.8s", "0.5s");
$(".s7-hea p").eq(2).ani("fadeIn", "0.8s", "0.5s");
$(".s7-txt div").eq(0).ani("fadeInRight", "1s", "0.3s");
$(".s7-txt div").eq(1).ani("fadeInLeft", "1s", "0.5s");
$(".s7-txt div").eq(2).ani("fadeInRight", "1s", "0.8s");

//Slide 8 样式
$(".page8 p").eq(0).Tab("2.13rem","1.36rem","2.72rem","2.48rem");
$(".page8 p").eq(1).Tab("7.16rem","1.33rem","0.34rem","0.83rem");
$(".page8 p").eq(2).Tab("6.87rem","4.01rem","0.63rem","0.55rem");
$(".page8 p").eq(3).Tab("0.44rem","1.56rem","2.73rem","2.22rem");
$(".page8 p").eq(4).Tab("0rem","1.5rem","0.48rem","1.06rem");
$(".page8 p").eq(5).Tab("3.97rem","1.45rem","2.95rem","2.09rem");
