     var arr = ["img/red_bg.png",
     	"img/lanbanjiao.png",
     	"img/yellow_bg.png",
     	"img/二层蓝.png",
     	"img/二层红点.png",
     	"img/绿色.png",
     	"img/右灰色.png",
     	"img/蓝色二层.png",
     	"img/白色D.png",
     	"img/RM.png",
     	"img/E.png",
     	"img/maker.png",
     	"img/蓝色星云.png",
     	"img/红色星云.png",
     	"img/流星1.png",
     	"img/流星3.png",
     	"img/流星2.png",
     	"img/jiantou.png",
     	"img/music.png",
     	"img/jiantou.png",
     	"img/Dare to .png",
     	"img/组 2.png",
     	"img/组 3.png",
     	"img/change the World.png",
     	"img/music.png",
     	"img/3_3.png",
     	"img/3_4.png",
     	"img/3_5.png",
     	"img/3_8.png",
     	"img/3_1.png",
     	"img/3_7.png",
     	"img/3_6.png",
     	"img/3_2.png",
     	"img/5/line.png",
     	"img/光斑.png",
     	"img/renwu/沈黎晖.png",
     	"img/diqiu/1.jpg",
     	"img/diqiu/2.jpg",
     	"img/diqiu/3.jpg",
     	"img/diqiu/4.jpg",
     	"img/diqiu/5.jpg",
     	"img/diqiu/6.jpg",
     	"img/diqiu/7.jpg",
     	"img/diqiu/8.jpg",
     	"img/diqiu/9.jpg",
     	"img/diqiu/10.jpg",
     	"img/diqiu/11.jpg",
     	"img/diqiu/12.jpg",
     	"img/diqiu/13.jpg",
     	"img/diqiu/14.jpg",
     	"img/diqiu/15.jpg",
     	"img/diqiu/16.jpg",
     	"img/diqiu/17.jpg",
     	"img/diqiu/18.jpg",
     	"img/diqiu/19.jpg",
     	"img/diqiu/20.jpg",
     	"img/diqiu/21.jpg",
     	"img/diqiu/22.jpg",
     	"img/diqiu/23.jpg",
     	"img/diqiu/24.jpg",
     	"img/diqiu/25.jpg",
     	"img/diqiu/26.jpg",
     	"img/diqiu/27.jpg",
     	"img/diqiu/28.jpg",
     	"img/diqiu/29.jpg",
     	"img/diqiu/30.jpg",
     	"img/diqiu/31.jpg",
     	"img/diqiu/32.jpg",
     	"img/diqiu/33.jpg",
     	"img/diqiu/34.jpg",
     	"img/diqiu/35.jpg",
     	"img/diqiu/36.jpg",
     	"img/diqiu/37.jpg",
     	"img/diqiu/38.jpg",
     	"img/diqiu/39.jpg",
     	"img/diqiu/40.jpg",
     	"img/diqiu/41.jpg",
     	"img/diqiu/42.jpg",
     	"img/diqiu/43.jpg",
     	"img/diqiu/44.jpg",
     	"img/diqiu/45.jpg",
     	"img/diqiu/46.jpg",
     	"img/diqiu/47.jpg"
     ];
     imgLoader(arr, function(percentage) {
     	var percentT = percentage * 100;
     	$('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
     	$('#loader__progress')[0].style.width = percentT + '%';
     	if(percentage == 1) {
     		$('#loader').remove();
     		//swiper1 插件
     		var mySwiper = new Swiper('.swiper1', {
     			direction: 'vertical',
     			//	initialSlide: 3,

     			onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
     				swiperAnimateCache(swiper); //隐藏动画元素 
     				swiperAnimate(swiper); //初始化完成开始动画
     			},

     			onSlideChangeEnd: function(swiper) {
     				//在第二页执行动画旋转效果

     				if(swiper.activeIndex == 1) {
     					clearInterval(time);
     					time = setInterval(move, 50);

     					function move() {
     						n++;
     						if(n >= 47) {
     							n = 0;
     						}
     						$("#s2-box img").eq(n).show().siblings().hide();
     					}
     				}
     				if(swiper.activeIndex != 3) {
     					$(".cir-list  div ").removeClass("s5-anic s5-anic2");
     					//	//首先 进入页面三以后隐藏swiper2
     					$(".transve").hide();
     					$(".line-list li").hide();
     					$(".line-list li").removeClass("s5-anic");
     					clearTimeout(time2);
     				}
     				if(swiper.activeIndex == 3) {
     					clearTimeout(time2);
     					time2 = setTimeout(function() {
     						$(".line-list li").show().addClass("s5-anic");
     					}, 1000)

     					$(".cir-list  div img").show();
     					$(".cir-list  div ").show().addClass("s5-anic");

     					//点击div，隐藏人物，显示横向大图切换
     					$(".cir-list div").click(function() {
     						//隐藏下方信息
     						$(".about").hide();
     						$(".cir-list  div img").hide();
     						$(".cir-list  div ").removeClass("s5-anic").addClass("s5-anic2");

     						//隐藏文字
     						$(".s4-txt").hide();
     						//显示sw2
     						$(".transve").show();
     						//获取当前点击的swiper2 的div下标
     						var t = $(this).index();
     						//初始化swiper2

     						//点击按钮隐藏sw2
     						$(".tra-rve").click(function() {
     							$(".cir-list  div img").show();
     							$(".cir-list  div ").removeClass("s5-anic2").addClass("s5-anic");
     							$(".transve").hide();
     							$(".s4-txt").show();

     							//销毁swiper
     							swiper2.destroy(false, true);
     						});

     						var swiper2 = new Swiper('.swiper2', {
     							pagination: '.swiper-pagination2',
     							loop: true,
     							spaceBetween: 30,
     							paginationClickable: true,
     							initialSlide: t,
     							nextButton: '.swiper-button-next',
     							prevButton: '.swiper-button-prev',
     						});
     					})
     				}

     				if(swiper.activeIndex == 4) {
     					//Silde 5 动画
     					var k = 1000;
     					$(".s5-img img").css({
     						animation: "2s forwards",
     					});
     					$(".s5-main img").hide();
     					for(var x = 0; x < 10; x++) {
     						k += 300;

     						$(".s5-img img").eq(x).css({
     							height: 0,
     							width: 0
     						}).animate({
     							height: "2.15rem",
     							width: "1.78rem"
     						}, k, function() {
     							var s = $(this).index();
     							$(".s5-main img").eq(s).show();
     							$(this).css({
     								animation: "page5 1.5s forwards",
     							})
     						});
     					}

     				}
     				if(swiper.activeIndex != 5) {
     					$(".s6-top img").removeClass("s6-carton s6-carton2");
     				}
     				if(swiper.activeIndex == 5) {
     					//$(".s6-top img").eq(0).removeClass("s6-carton");
     					$(".s6-top img").eq(0).addClass("s6-carton");
     					$(".s6-top img").eq(2).addClass("s6-carton");
     					$(".s6-top img").eq(1).addClass("s6-carton2");
     					$(".s6-top img").eq(3).addClass("s6-carton2");
     					$(".s6-top img").eq(4).addClass("s6-carton2");

     					$(".s6-top p").ani("bounceInLeft", "0.8s", "1s");

     					//下方图片的具体动画
     					//$(".gz").ani("bounceInLeft","0.8s","1s");
     					for(var i = 0; i < 6; i++) {
     						$(".s6-main img").eq(i).ani("fadeInDown", "0.8s", "" + i + "s");
     					}
     				}
     				if(swiper.activeIndex != 6) {
     					$(".s7-img").css({
     						height: 0
     					});
     				}
     				if(swiper.activeIndex == 6) {
     					$(".s7-img").css({
     						height: 0
     					}).animate({
     						height: "8.34rem"
     					}, 1500);

     				}
     				//		第八个页面
     				if(swiper.activeIndex == 7) {
     					setTimeout(function() {
     						$(".zhu").fadeIn(300, function() {
     							$(".lian").fadeIn(500);
     						})
     					}, 2000)
     				} else {
     					$(".zhu").fadeOut(10);
     					$(".lian").fadeOut(500);
     				}
     				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
     			}

     		})
     	}
     });