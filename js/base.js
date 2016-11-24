$(document).ready(function(){
	$(".menu").click(function(){
		$(".zhezhao").css({"transform":"translateX(0)","transition":"all .8s"});
		$(".mask").show();
		$("body").addClass("scroll");
	});
	$("#btn1").click(function(){
		$(".zhezhao").css({"transform":"translateX(-100%)","transition":"all .8s"});
		$(".mask").hide();	
		$(".nav-btn1").show();
		$(".nav-btn2").hide();
		$("body").removeClass("scroll");
	});
	$(".nav-btn1").click(function(){
		$(".zhezhao").css({"transform":"translateX(0)","transition":"all .8s"});
		$(this).hide();
		$(".nav-btn2").show();
		$(".mask").show();	
		$("body").addClass("scroll");
	});
	$(".nav-btn2,.mask").click(function(){
		$(".zhezhao").css({"transform":"translateX(-100%)","transition":"all .8s"});
		$(this).hide();
		$(".nav-btn1").show();
		$(".mask").hide();	
		$("body").removeClass("scroll");
	});
	$(".btn2").click(function(){
		$(".tab").css({"transform":"translateX(100%)","transition":"all .8s"});
	});
	$(".modal-title").click(function(){
		$(".zhezhao").hide();	
	});
	$(".close").click(function(){
		$(".mask").hide();	
	});
	var $navli = $(".nav").children("li");
	var $topLi = $(".top").find("ul").children("li");
	var $list = $(".bottom").children(".list");
	var $list1 = $(".bottom .list1 li");
	
	var index1 = 0,index2 = 0; 
	$topLi.click(function(){
		$topLi.removeClass("active");
		$(this).addClass("active").siblings().removeClass("active");
		index1 = $(this).index();
		$list.removeClass("hidden");
		$list.eq(index1).show().siblings().hide();
		$(".tab").css({"transform":"translateX(100%)","transition":"all .8s","visibility":"visible"});
	});
	$navli.click(function(){
		index2 = $(this).index();
		$topLi.removeClass("active");
		$topLi.eq(index2).addClass("active").siblings().removeClass("active");
		$list.removeClass("hidden");
		$list.eq(index2).show().siblings().hide();
	});
	$list1.click(function(){
		index2 = $(this).index();
		$(this).parent().siblings(".tab").eq(index2).css({"transform":"translateX(-100%)","transition":"all .8s","visibility":"visible"});

	});

	
	
	//滚动条
	var pos=0;
	$(document).scroll(function(){	
		pos = $(document).scrollTop();	
	
		if(pos<500){
			$(".dot1").addClass("current").siblings().removeClass("current");
		}
		if(pos>=500 && pos<1136){
			$(".dot2").addClass("current").siblings().removeClass("current");
		}
		if(pos>=1136 && pos<=1684) {
			$(".dot3").addClass("current").siblings().removeClass("current");
		}
		if(pos>=1684 && pos<2237) {
			$(".dot4").addClass("current").siblings().removeClass("current");
		}	
		if(pos>=2237) {
			$(".dot5").addClass("current").siblings().removeClass("current");
		}
    });
	
});