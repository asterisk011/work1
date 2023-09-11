document.write('<script type="text/javascript" src="../js/modify.js"></script>');	// 함수 리스트 호출
$(function(){
/* -------------------------------------------------------------------------------------------- */
var dht = $(window).height();
var dwh = $(window).width();
//font-family

/* -------------------------------------------------------------------------------------------- */
/* visual */
if($("section").is("#index") == true){$("body").addClass("index");}
	$(window).scroll(function(){
		var position = $(window).scrollTop(); 
		if( position > 0){
			$("header").addClass("on");$("body").addClass("active");
		}else{
			$("header").removeClass("on");$("body").removeClass("active");}
	});
	$(window).on('scroll', function(){$("header nav > ul > li > ul").removeClass("active"); $("header nav > ul > li > ul").slideUp();});
/* -------------------------------------------------------------------------------------------- */	
/* scroll and common */
$(".scroll_btn").click(function(){$("html,body").stop().animate({scrollTop:$(".sdn").offset().top-90},500); return false;});
$(".top_btn > a").click(function(){$("html,body").stop().animate({scrollTop:0},500); return false;});
scroll("top_btn");

$("#index #visual").css({"height":dht-200});
$("#index .content").css({"top":dht-200});
$(window).resize(function(){//필요시 사용
	var dht = $(window).height();
	$("#index #visual").css({"height":dht-200});
	$("#index .content").css({"top":dht-200});
});	

$("header nav > ul > li").click(function(){
	if($(this).is(".glst_02") || $(this).is(".glst_03") == true){
			$(this).removeClass("active");
		if($(this).is(".active") == true){
			$("header .nav > ul > li ul").stop(true,false).slideUp(300);		
		}else{
			$("header .nav > ul > li ul").stop(true,false).slideUp(300);		
			$(this).find("ul").slideDown(300);
			$(this).addClass("active");
		}
	}else{
		$("header .nav > ul > li ul").stop(true,false).slideUp(300);
	}
});

/* -------------------------------------------------------------------------------------------- */	
/* visual */
var val = location.href.substr(location.href.lastIndexOf('=') + 1);
	val = val.slice(-7, -5);
	val = val - 0;
	val = val - 1;
	
if($("section").is("#index") == true){ 

/* -------------------------------------------------------------------------------------------- */	
//travel
}else if($("section").is("#cafe") == true){	
	$("#cafe .content .thumb ul li a").click(function(){
		$("#cafe .content .slide").fadeIn(400,'swing');
		$('html, body').addClass('hidden');
		//return false;
	});
	$("#cafe .content .slide .close").click(function(){
		$("#cafe .content .slide").fadeOut(400,'swing');
		$('html, body').removeClass('hidden');
		return false;
	});	
/* -------------------------------------------------------------------------------------------- */	
//travel
}else if($("section").is("#gallery") == true){	
	$("#gallery .content .thumb ul li a").click(function(){
		$("#gallery .content .slide").fadeIn(400,'swing');
		$('html, body').addClass('hidden');
		//return false;
	});
	$("#gallery .content .slide .close").click(function(){
		$("#gallery .content .slide").fadeOut(400,'swing');
		$('html, body').removeClass('hidden');
		return false;
	});		
	$("#gallery .content .thumb li").each(function(e){
		$("#gallery .content .thumb li").eq(e).css({
			"background":"url(../december/m/gallery/" + (e+1) + ".jpg) no-repeat 50% 50%",
			"background-size":"cover"
		});	
	
	});	
	$("#gallery .content .thumb > ul").slice(0,6).show();
	$("#gallery .content .more").click(function(e){
		e.preventDefault();
		$("#gallery .content .thumb > ul:hidden").slice(0,2).fadeIn();
		if($("#gallery .content .thumb > ul:hidden").length == 0){
			alert("마지막 페이지 입니다.");
		}
	});	

/*--------------------------------------previews--------------------------------------------*/
}else if($("section").is(".previews") == true){
//room_preview	
	if($("body section").is("#rpv") == true){
		$("#rpv .content > ul > li").each(function(e){
			$("#rpv .content > ul > li").eq(e).find(".ttl").prepend(p_e_ttl[e] + '<span>' + p_k_ttl[e] + '</span>');
		});
//facility_preview	
	}else if($("body section").is("#fpv") == true){
		$("#fpv .rlst li").each(function(e){
			$("#fpv .rlst li").eq(e).find(".cont").append(
				'<span>' + fc_e_ttl[e] + '</span><p>' + fc_k_ttl[e] + '</p>'
			);
		});
//special_preview			
	}else if($("body section").is("#spv") == true){
//service_preview			
	}else if($("body section").is("#cpv") == true){
	}	

	
/* -------------------------------------------------------------------------------------------- */	
//rooms
}else if($("section").is("#room") == true){
	var num = location.href.substr(location.href.lastIndexOf('=') + 1);
	var num = num.slice(-7, -5); $("body").addClass("room_" + num);
	$("body").addClass("room");
 	$(".room_ttl .inner").prepend(
		'<div class="left">' +
		'<h3>' + p_e_ttl[val] + '<span>' + p_k_ttl[val] + '</span></h3>' + 
		'<p>' + room_detail_1[val] + '<br />'  +
		room_detail_2[val]+'<br /><br />' +
		'<p>' +
		'</div>' 
	);
	
	for(key in room_info[val]){
		brs = room_info[val][key].replace(/\n/g, "<br />");	//정규식으로 단락나누기
		$(".info > ul.info1").append('<li><p><span>'+ key + '</span>' + brs + '</p></li>');
	};	
	
	for(key in room_info2[val]){
		brs = room_info2[val][key]	//정규식으로 단락나누기
		$(".info > ul.info2").append('<li><p><span>'+ key + '</span>' + brs + '</p></li>');
	};	
	
	
/* -------------------------------------------------------------------------------------------- */	
//facility-service
}else if($("section").is("#facility") == true){
	var num = location.href.substr(location.href.lastIndexOf('=') + 1);
	var num = num.slice(-7, -5); $("body").addClass("facility_" + num);
	var fc_txts = fc_txt[val].replace(/\n/g, "<br />");


/* -------------------------------------------------------------------------------------------- */	
//special
}else if($("section").is("#special") == true){
	var num = location.href.substr(location.href.lastIndexOf('=') + 1);
	var num = num.slice(-7, -5); $("body").addClass("special_" + num);

/* -------------------------------------------------------------------------------------------- */	
//service
}else if($("section").is("#service") == true){
	var num = location.href.substr(location.href.lastIndexOf('=') + 1);
	var num = num.slice(-7, -5); $("body").addClass("service_" + num);

/* -------------------------------------------------------------------------------------------- */	
//table	
}else if($("section").is("#table") == true){
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
/* -------------------------------------------------------------------------------------------- */	
//reserve	
}else if($("section").is("#reserve") == true){
	$(".selec ul li a").click(function(){
		var num = $(this).parent("li").index();	
		$(".selec ul li a").removeClass("active");
		$(".selec ul li").eq(num).find("a").addClass("active");
		
		if(num == 0){
			$(".selec ul li").eq(0).find("a").addClass("active");	
			$(".tab01").css("display","block");
			$(".tab02").css("display","none");
		}else if(num == 1){
			$(".selec ul li").eq(1).find("a").addClass("active");
			$(".tab01").css("display","none");
			$(".tab02").css("display","block");				
		}return false;	
	
	});
}

/*------------------------------------------------------------------------------------------------*/
//리사이즈 이벤트
$(window).resize(function(){//필요시 사용
var dht = $(window).height();

});

//sns
$(".sns_01").attr("href",insta);$(".sns_02").attr("href",facebook);
$(".sns_03").attr("href",blog);$(".sns_04").attr("href",kko);
if(insta == "#"){$(".sns_01").click(function(){alert('준비중입니다.');return false;});}
if(facebook == "#"){$(".sns_02").click(function(){alert('준비중입니다.');return false;});}
if(blog == "#"){$(".sns_03").click(function(){alert('준비중입니다.');return false;});}
if(kko == "#"){$(".sns_04").click(function(){alert('준비중입니다.');return false;});}

$("footer .inner address").append(
	"<ul><li><P><span>INFORMATION</span>대표자 : " + foot1 + ", 연락처 : " + foot2 + "</P></li>" + 
	"<li><P><span>ADDRESS</span>" + foot3 + "</P></li>" + 
	"<li><P><span>BANK INFO</span>" + foot4 + "</P></li>" + 
	"<ul>"
);
});

///////////////////////////////////////////////////////////////////////////////////////////
//functions

function scroll(e){
	$("." + e + " > a").click(function(){
		$("html,body").stop().animate({scrollTop:0},500); return false;
	});
}
function top_scroll(e,f){
	$("."+ e + " > a").click(function(){
		$("html,body").stop(true,true).animate({scrollTop:$("." + f ).offset().top-127},500,"swing");return false;
	});
}
function msd(e){
	var swiper = new Swiper('.' + e, {
		slidesPerView: 1,
		//spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});	
	
}
