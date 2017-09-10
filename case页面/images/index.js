/*--index{导航}出现二级菜单  --*/
function browserRedirect() { 

	var sUserAgent= navigator.userAgent.toLowerCase(); 

	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 

	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 

	var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 

	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 

	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 

	var bIsAndroid= sUserAgent.match(/android/i) == "android"; 

	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 

	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 

	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 

	//window.location.href= '手机网站地址'; 
	//

	} else { 

	//window.location= '电脑网站地址'; 
		$(function(){
			 $(".com_hover").hover(function(){
				  $(".com_hover").children(".pull_down").stop(true,true).slideDown(500)
				  },function(){
				  $(".com_hover").children(".pull_down").stop(true,true).slideUp(500)
			 })

			 $(".cj_header").hover(function(){
				$(this).animate({"height": "320px"}, 500, "swing");
				},function(){
				$(this).stop(true,true).animate({"height": "102px"}, 500, "swing");
			 })
		 })
	} 

	} 

	browserRedirect(); 

/*--index{导航}中英文切换  --*/
$(function(){
	$(".nav_mcy ul li a").hover(function(){
		$(this).find("span.en").stop(true,true).animate({top:"-36px"},300).css({"color":"#fff"});
		$(this).find("span.cn").stop(true,true).animate({top:"0px"},300).css({"color":"#fff"});
	},function(){
		$(this).find("span.cn").stop(true,true).animate({top:"36px"},300).css({"color":"#3e667d"});
		$(this).find("span.en").stop(true,true).animate({top:"0px"},300).css({"color":"#3e667d"});
	})
});
/* 右侧图标 */
$(function(){
	$('#cc_right_menu .m_share').click(function(){
		$('#cc_right_menu .share_con').slideToggle();
	});
	$('#cc_right_menu #m_qq').hover(function(){
		if($('#cc_right_menu .share_con').css('display')=='block')
		{
			$('#cc_right_menu .share_con').slideUp();
		}
		$('.m_qq_2').animate({right:"0px"},400);
		$('.m_qq_1').stop(true,true).animate({right:"-42px"},200);
	},function(){
		$('.m_qq_1').animate({right:"0px"},200);
		$('.m_qq_2').stop(true,true).animate({right:"-163px"},400);
	})
	$('#cc_right_menu #m_message').hover(function(){
		if($('#cc_right_menu .share_con').css('display')=='block')
		{
			$('#cc_right_menu .share_con').slideUp();
		}
		$('.m_message_2').animate({right:"0px"},400);
		$('.m_message_1').stop(true,true).animate({right:"-42px"},200);
	},function(){
		$('.m_message_1').animate({right:"0px"},200);
		$('.m_message_2').stop(true,true).animate({right:"-163px"},400);
	})
	$(".mfp-wrap").click(function(){
		$(this).fadeOut();
	})
	$(".share_weixin").click(function(){
		$(".mfp-wrap").fadeIn();
	});
	$(".mfp-wrap .wx_close").click(function(){
		$(".mfp-wrap").fadeIn();
	});
	$(".mfp-wrap2").click(function(){
		$(this).fadeOut();
	})
	$("#mcy_wx").click(function(){
		$(".mfp-wrap2").fadeIn();
	});
	$(".mfp-wrap2 .wx_close").click(function(){
		$(".mfp-wrap2").fadeIn();
	});
})

/*--index{解决方案}--*/
$(function(){
	$(".solution_list").hover(function(){			
		$(this).find(".jie1").css({"background":"#75a7c4"});
		$(this).find(".jie_dl dt").css({"background":"#3e667d","color":"#fff"});
		$(this).find(".jie_dl .jie_dd2 a").css({"background":"#3e667d","color":"#fff"});
	},function(){
		$(this).find(".jie1").stop(true,true).css({"background":"#c7c7c7"});
		$(this).find(".jie_dl dt").stop(true,true).css({"background":"none","color":"#3e667d"});
		$(this).find(".jie_dl .jie_dd2 a").stop(true,true).css({"background":"#c7c7c7","color":"#fff"});
	})
		
})

/*--index{新闻中心}--*/
$(function(){
		$('.i_t_news').hover(function(){
			//显示标题
			$(this).find('dl.e_news_list2').stop(false,true).fadeIn(400);
		},function(){	
			//隐藏标题
		$(this).find('dl.e_news_list2').stop(false,true).fadeOut(200);
		});		
});

$(function(){
				$('.bwWrapper').hover(function(){
					//显示标题
					$(this).find('.jjfa_div').stop(false,true).fadeIn(400);
				},function(){	
					//隐藏标题
					$(this).find('.jjfa_div').stop(false,true).fadeOut(300);
				});		
		});