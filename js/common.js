document.write('<script type="text/javascript" src="js/modify.js"></script>');	// 함수 리스트 호출
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);
$(document).ready(function(){
//window
var video = document.getElementById("myVideo");
var dht = $(window).height();
var dwh = $(window).width();
var num = location.href.substr(location.href.lastIndexOf('_') + 1);
var val = num.slice(0, 2);
	val = val - 1;
//font-family
(function(d) {
  var config = {
    kitId: 'sqm3lxk',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
//gnb
/*
$(window).scroll(function(){
	var top = $(this).scrollTop();
	if(top > 0) $("#visual").css("top",top / -2 / 2);
});
*/
$("header .nav > ul > li").hover(function(){
	if($(this).is(".glst_02") || $(this).is(".glst_03") == true){
		$(this).find("ul").slideDown(300);
	}else{}
},function(){
	$("header .nav > ul > li ul").stop(true,false).slideUp(300);
});

//common
//$("body").css("display","none");
$(window).load(function(){
	//$("body").fadeIn(1000);
});
/*
$("#visual").css("height",dht/10*5);
$("#contents").css("top",dht/10*5);

$(window).resize(function(){
	var dht = $(window).height();
	var dwh = $(window).width();
	$("#visual").css("height",dht/10*5);
	$("#contents").css("top",dht/10*5);
});
*/
//scroll
$('.scroll').click(function(e){e.preventDefault();$.fn.fullpage.moveSectionDown();});
$(".stp").click(function(){$("html,body").animate({scrollTop:0},1000);return false;});

//index
if($("body").is("#index") == true){

	//$("#index #container .main_about .v_area .box video").each(function(e){$(this)[0].play();}); 
	$("#index #container .main_about .v_area ul li div").hover(function(){
		vs = $(this).parent("li").index();
		videos = $("#index #container .main_about .v_area .box .box_img");
		now = $("#index #container .main_about .v_area .box .box_img").eq(vs);
		
		$(".main_about .v_area .box > ul > li").removeClass("on"); $(".main_about .v_area .box > ul > li").eq(vs).addClass("on");
		$(this).addClass("active");
		$("#index #container .main_about .v_area .box .box_img").delay(100).stop(true,false).animate({"opacity":"0","z-index":"-1"},300);
		$("#index #container .main_about .v_area .box .box_img").eq(vs).animate({"opacity":"1","z-index":"320"},300);
	},function(){
	});
	
	revideo($("#myVideo"));
	$(".top_slide").css("height",dht);
	$(window).resize(function(){
		var video = document.getElementById("myVideo");
		var dht = $(window).height();
		revideo($("#myVideo"));
		$(".top_slide").css("height",dht);
		$("#visual").css("height",dht);
	});

/*--------------------------------------gallery--------------------------------------------*/
}else if($("body").is("#video") == true){
	$(".bottom_slide").css("height",dht);
	$(".bottom_slide .item").css("height",dht);
	$(window).resize(function(){
		var dht = $(window).height();
		$(".bottom_slide .item").css("height",dht);
		$(".bottom_slide").css("height",dht);
	});
	
/*--------------------------------------gallery--------------------------------------------*/
}else if($("body").is("#gallery") == true){
	$("#gallery #contents .thumb li a").click(function(){
		$("#gallery #contents .detail").fadeIn(500,'swing');
		//return false;
	});	
	$("#gallery #contents .detail .close").click(function(){
		$("#gallery #contents .detail").fadeOut(500,'swing');
		return false;
	});	

	$("#gallery #contents .line").slice(0,4).show();
	$("#gallery #contents .more").click(function(e){
		e.preventDefault();
		$("#gallery #contents .line:hidden").slice(0,2).fadeIn();
		if($("#gallery #contents .line li:hidden").length == 0){
			alert("마지막 페이지 입니다.");
		}
	});

/*--------------------------------------about--------------------------------------------*/
}else if($("body").is("#location") == true){
	$(window).resize(function(){
		var dht = $(window).height();
	});
/*--------------------------------------about--------------------------------------------*/
}else if($("body").is("#travel") == true){
	//$("#banner").css("height",dht);
	$(window).resize(function(){
		var dht = $(window).height();
		//$("#banner").css("height",dht);
	});
/*--------------------------------------previews--------------------------------------------*/
}else if($("body").is(".previews") == true){
//room_preview	
	if($(".previews > div").is(".rpv") == true){
		$(window).scroll(function(){
		
		var position = $(window).scrollTop(); 
		var top1 = $(".lst_01").offset().top;
		var top2 = $(".lst_02").offset().top;
		var top3 = $(".lst_03").offset().top;
		var top4 = $(".lst_04").offset().top;
		var top5 = $(".lst_05").offset().top;
		var top6 = $(".lst_06").offset().top;
		var delta1 = $("#rpv #contents > ul > li.lst_01 .img_box > ul > li.bottom").offset().top-100;
		var delta2 = $("#rpv #contents > ul > li.lst_02 .img_box > ul > li.bottom").offset().top-100;
		var delta3 = $("#rpv #contents > ul > li.lst_03 .img_box > ul > li.bottom").offset().top-100;
		var delta4 = $("#rpv #contents > ul > li.lst_04 .img_box > ul > li.bottom").offset().top-100;
		var delta5 = $("#rpv #contents > ul > li.lst_05 .img_box > ul > li.bottom").offset().top-100;
		var delta6 = $("#rpv #contents > ul > li.lst_06 .img_box > ul > li.top .lst_06_04").offset().top;
		if(position < top2){
			if(top1 > position){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}else if(delta1 < position ){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"})
				$("#rpv #contents > ul > li.lst_01 .room_info").css({"position":"absolute","top":"auto","bottom":"50px"});		
			}else if(top1 < position < delta1){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_01 .room_info").css({"position":"fixed","top":"100px"});
			}
		}else if(position < top3){
			if(top2 > position > top1){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}else if(delta2 < position ){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"})
				$("#rpv #contents > ul > li.lst_02 .room_info").css({"position":"absolute","top":"auto","bottom":"50px"});	
			}else if(top2 < position < delta2){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_02 .room_info").css({"position":"fixed","top":"100px"});
			}else{
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}
		}else if(position < top4){
			if(top3 > position > top2){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}else if(delta3 < position ){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"})
				$("#rpv #contents > ul > li.lst_03 .room_info").css({"position":"absolute","top":"auto","bottom":"50px"});	
			}else if(top3 < position < delta3){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_03 .room_info").css({"position":"fixed","top":"100px"});
			}else{
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}
		}else if(position < top5){
			if(top4 > position > top3){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}else if(delta4 < position ){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_04 .room_info").css({"position":"absolute","top":"auto","bottom":"50px"});	
			}else if(top4 < position < delta4){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_04 .room_info").css({"position":"fixed","top":"100px"});
			}else{
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}
		}else if(position < top6){
			if(top5 > position > top4){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}else if(delta5 < position ){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_05 .room_info").css({"position":"absolute","top":"auto","bottom":"50px"});	
			}else if(top5 < position < delta5){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_05 .room_info").css({"position":"fixed","top":"100px"});
			}else{
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}
		}else if(position > top6){
			if(top6 > position > top1){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}else if(delta6 < position ){
				$("#rpv #contents > ul > li.lst_06 .room_info").css({"position":"absolute","top":"auto","bottom":"50px"});	
			}else if(top6 < position < delta6){
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
				$("#rpv #contents > ul > li.lst_06 .room_info").css({"position":"fixed","top":"100px"});
			}else{
				$("#rpv #contents > ul > li .room_info").css({"position":"absolute","top":"50px"});
			}
		}	
	});	
//facility_preview	
	}else if($(".previews > div").is(".fpv") == true){
		
}


/*--------------------------------------room--------------------------------------------*/
}else if($("body").is("#room") == true){
	var num = num.slice(-7, -5); $("body").addClass("room_" + num);
	
	$(".owl-carousel").css("height",dht);
	$("#room .content .room_ttl .inner").prepend(
		'<div class="left">' +
		'<h3>' + p_e_ttl[val] + '<span>' + p_k_ttl[val] + '</span></h3>' + 
		'<p>' + room_detail_1[val] + '<br />'  +
		room_detail_2[val]+'<br /><br />' +
		'<p>' +
		'</div>' +
		'<a href="https://booking.naver.com/booking/3/bizes/272912" class="room_rv">실시간 예약하기</a>'
	);
	
	for(key in room_info[val]){
		brs = room_info[val][key].replace(/\n/g, "<br />");	//정규식으로 단락나누기
		$(".info > ul.info1").append('<li><p><span>'+ key + '</span>' + brs + '</p></li>');
	};	
	
	for(key in room_info2[val]){
		brs = room_info2[val][key].replace(/\n/g, "<br />");	//정규식으로 단락나누기
		$(".info > ul.info2").append('<li><p><span>'+ key + '</span>' + brs + '</p></li>');
	};	
	

	$(window).resize(function(){
		var dht = $(window).height();
		$(".owl-carousel").css("height",dht);
	});
	
/*--------------------------------------special--------------------------------------------*/
}else if($("body").is("#facility") == true){
	var num = num.slice(-7, -5); $("body").addClass("facility_" + num);
	var fc_txts = fc_txt[val].replace(/\n/g, "<br />");

	
//table	
}else if($("body").is("#table") == true){
	$(".pv_lst ul li a").click(function(){
		var num = $(this).parent("li").index();	
		$(".pv_lst ul li a").removeClass("active");
		$(".pv_lst ul li").eq(num).find("a").addClass("active");
		
		if(num == 0){
			$(".pv_lst ul li").eq(0).find("a").addClass("active");	
			$(".iframe #iframe").attr("src","/board/bbs/board.php?bo_table=notice");
		}else if(num == 1){
			$(".pv_lst ul li").eq(1).find("a").addClass("active");		
			$(".iframe #iframe").attr("src","/board/bbs/board.php?bo_table=review");
		}return false;	
	
	});

//reserve	
}else if($("body").is("#reserve") == true){
	$(".pv_lst ul li a").click(function(){
		var num = $(this).parent("li").index();	
		$(".pv_lst ul li a").removeClass("active");
		$(".pv_lst ul li").eq(num).find("a").addClass("active");
		
		if(num == 0){
			$(".pv_lst ul li").eq(0).find("a").addClass("active");	
			$(".tab01").css("display","block");
			$(".tab02").css("display","none");
		}else if(num == 1){
			$(".pv_lst ul li").eq(1).find("a").addClass("active");
			$(".tab01").css("display","none");
			$(".tab02").css("display","block");			
		}return false;	
	});
}

//footer
$(".sns_01").attr("href",insta);$(".sns_02").attr("href",facebook);
$(".sns_03").attr("href",blog);$(".sns_04").attr("href",kko);
if(insta == "#"){$(".sns_01").click(function(){alert('준비중입니다.');return false;});}
if(facebook == "#"){$(".sns_02").click(function(){alert('준비중입니다.');return false;});}
if(blog == "#"){$(".sns_03").click(function(){alert('준비중입니다.');return false;});}
if(kko == "#"){$(".sns_04").click(function(){alert('준비중입니다.');return false;});}

/*------ resize / end ------*/
$("footer .footer_box address").append(
	"<ul><li><P><span>INFORMATION</span>대표자 : " + foot1 + ", 연락처 : " + foot2 + "</P></li>" + 
	"<li><P><span>ADDRESS</span>" + foot3 + "</P></li>" + 
	"<li><P><span>BANK INFO</span>" + foot4 + "</P></li>" + 
	"<ul>"
);
});
///////////////////////////////////////////////////////////////////////////////////////////
//functions
function tbtns(e){
	if($(".scroll a").is(".on") == true){
	}else{$(".stp").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},850);return false;});
	}
}
function revideo(video){
	if($(window).width() < 1200){
		var video = video;
		winHeight = $(this).height(),
		winWidth = $(this).width(),
		winOffset = winHeight / 540 < winWidth / 960 ? winWidth / 960 : winHeight / 540, 
				
		offsetWidth = 960 * winOffset,
		offsetHeight = 540 * winOffset,
		screenWidth = (winWidth - offsetWidth) / 2,
		screenHeight = (offsetHeight - winHeight) / 2;
		video.css({
			width: offsetWidth, 
			height: offsetHeight, 
			minWidth:"1200px",
			minHeight:"675px",
			marginLeft: 0, 
			marginTop: 0
		});
	}else{
		var video = video;
		winHeight = $(this).height(),
		winWidth = $(this).width(),
		winOffset = winHeight / 720 < winWidth / 1280 ? winWidth / 1280 : winHeight / 720, 
				
		offsetWidth = 1280 * winOffset,
		offsetHeight = 720 * winOffset,
		screenWidth = (winWidth - offsetWidth) / 2,
		screenHeight = (offsetHeight - winHeight) / 2;
		video.css({width: offsetWidth, height: offsetHeight, marginLeft: screenWidth, marginTop: -screenHeight })
	}
}
