jQuery(function($){"use strict";if($('.bh_loader').length>0){$(window).load(function(){$(".bh_loader").delay("500").fadeOut(2e3)})}
if(!getCookie("top_banner")){$(".top_banner").css("display","block")}
$(".top_banner_close").click(function(e){var _this=$(this).parent();_this.stop().slideUp(200);var expire=new Date();expire.setTime(expire.getTime()+(3*24*3600000));setCookie("top_banner",!0,expire,"/")});$('.layout_language>.toggle').click(function(){$('.selectLang').toggle()});$(document).ready(function(){$('.counter').countUp({'time':3000,'delay':10});AOS.init({offset:200,duration:1000,easing:'ease-in-out',anchorPlacement:'top-center'});var header_wrap=$(".header_wrap");$(window).scroll(function(){var topPos=$(this).scrollTop();if(topPos>100){$(header_wrap).addClass("fixed")}else{$(header_wrap).removeClass("fixed")}});var mobile_header_wrap=$(".mobile_header_wrap");$(window).scroll(function(){var topPos=$(this).scrollTop();if(topPos>50){$(mobile_header_wrap).addClass("fixed")}else{$(mobile_header_wrap).removeClass("fixed")}});var floatPosition=parseInt($("#float_banner_left").css('top'));$(window).scroll(function(){var scrollTop=$(window).scrollTop();var newPosition=scrollTop+floatPosition+"px";$("#float_banner_left").stop().animate({"top":newPosition},500);$("#float_banner_right").stop().animate({"top":newPosition},500)}).scroll();var scrollTop=$(".scrollTop");$(window).scroll(function(){var topPos=$(this).scrollTop();if(topPos>100){$(scrollTop).css("opacity","0.7")}else{$(scrollTop).css("opacity","0")}});$(scrollTop).click(function(){$('html, body').animate({scrollTop:0},800);return!1});$('a[href="#"]').click(function(e){e.preventDefault()});if(navigator.userAgent.match(/Trident\/7\./)){$('body').on("mousewheel",function(){event.preventDefault();var wheelDelta=event.wheelDelta;var currentScrollPosition=window.pageYOffset;window.scrollTo(0,currentScrollPosition-wheelDelta)})}
$(".bh_tab_btn").click(function(){var _this=$(this);var bh_tab_wrap=_this.closest(".bh_tab_wrap")
bh_tab_wrap.find(".bh_tab_btn").removeClass('active');_this.addClass('active');bh_tab_wrap.find(".bh_tab_li").removeClass('on');bh_tab_wrap.find("."+$(this).data('li')).addClass('on')});$(".bh_toggle").click(function(e){var _this=$(this).parent();if(_this.hasClass('active')){_this.children('.bh_toggle_content').stop().slideUp(200,function(){_this.removeClass('active')})}else{$(".bh_toggle").parent().children('.bh_toggle_content').stop().slideUp(200,function(){$(".bh_toggle").parent().removeClass('active')});_this.children('.bh_toggle_content').stop().slideDown(200,function(){_this.addClass('active')})}});$(".bh_setting").click(function(){var target=$(".bh_setting_btn");if($(target).is(":visible")){target.css("display","none")}else{target.css("display","block")}
return!1});$(".bh_modal_toggle").click(function(){var targetModal=$(this).attr('data-target');if(targetModal){$("."+targetModal).addClass("on")}else{$(this).children(".bh_modal").addClass("on")}});$(".bh_modal_close, .bh_modal_dimmed").click(function(){$(this).closest(".bh_modal").removeClass("on");return!1});$(".bh_layer_toggle").click(function(){var targetLayer=$(this).attr('data-target');if(targetLayer){$("."+targetLayer).addClass("on")}else{$(this).children(".bh_layer").addClass("on")}});$(".bh_layer_close, .bh_layer_dimmed").click(function(){$(this).closest(".bh_layer").removeClass("on");return!1});$('#search_cancel').bind('click',function(){$('.dimmed').toggle();$('.bh_search_wrap').hide()});$('.bh_search_wrap form').find('.btn-delete').bind('click',function(){$('input[name="is_keyword"]').attr('value','').focus()});$('.menu_search').bind('click',function(){if($('.bh_search_wrap').size()>0){$('.dimmed').toggle();$('.bh_search_wrap').toggle().find('input[name="is_keyword"]').focus()}else{$('.bh_search_wrap').toggle()}});$('#m_search_cancel').bind('click',function(){$('html, body').css({'overflowY':'auto',height:'auto',width:'100%'});$('.dimmed').toggle();$('.bh_m_search_wrap').hide()});$('.bh_m_search_wrap form').find('.btn-delete').bind('click',function(){$('input[name="is_keyword"]').attr('value','').focus()});$('.mobile_menu_search').bind('click',function(){if($('.bh_m_search_wrap').size()>0){$('html, body').css({'overflowY':'hidden',height:'100%',width:'100%'});$('.dimmed').toggle();$('.bh_m_search_wrap').toggle().find('input[name="is_keyword"]').focus()}else{$('.bh_m_search_wrap').toggle()}})})});function doChangeLangTypeClear(obj){if(typeof(obj)=="string"){setLangType(obj)}else{var val=obj.options[obj.selectedIndex].value;setLangType(val)}
location.href=location.href.replace(/(\\?|\&)l=[^&;]*/,'')}
function doDarkThemeToggle(){const color_scheme=getColorScheme();setColorScheme(color_scheme=='light'?'dark':'light')}
function setScreenSize(){let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`)}
setScreenSize();window.addEventListener('resize',()=>setScreenSize())