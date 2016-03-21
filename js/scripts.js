
$(function(){
	
	if($.browser.msie){ 
		$('input[placeholder]').each(function(){  

			var input = $(this);        

			$(input).val(input.attr('placeholder'));

			$(input).focus(function(){
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});

			$(input).blur(function(){
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.val(input.attr('placeholder'));
				}
			});
		});

	};
	if($.browser.msie){ 
		$('textarea[placeholder]').each(function(){  

			var input = $(this);        

			$(input).val(input.attr('placeholder'));

			$(input).focus(function(){
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});

			$(input).blur(function(){
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.val(input.attr('placeholder'));
				}
			});
		});

	};

	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);
			return false;
		});
	});	
	
	$('.button-mobile-menu').click(function(){$('.box-menu').slideToggle(), $(this).toggleClass('active'); return false;});
	
	
	
	
	$('.table-stat__link-open-group').click(function(){
		var opened_group = $(this).attr('data-href'); 
		$(opened_group).fadeToggle(0); 
		$(this).toggleClass('active');
		return false;
	});
	
	$('.table-stat__delete-column').click(function(){
		var delete_col = $(this).attr('data-href'); 
		$(delete_col).remove(); 

		$('#carusel-table').carouFredSel({
			width: '100%',
			scroll: 1,
			auto: false,
			circular:	false,
			responsive: true,				
			pagination: "#pager",
			prev: '#prev1',
			next: '#next1',
			swipe: {
				onMouse: true,
				onTouch: true
			},
			items: {
				visible: {
					min: 1,
					max: 7
				}
			}
			
		});

		return false;
	});
	
	$('.table-stat__delete-group').click(function(){
		var delete_col = $(this).attr('data-href'); 
		$(delete_col).remove(); 
		return false;
	});
	
	$('.table-stat__delete-line').click(function(){
		var delete_line = $(this).attr('data-href'); 
		$(delete_line).remove(); 
		return false;
	});
	
	
	
	$(".list-carusel__item").each(function(){
		var i=0;
		$("li", this).each(function(){
			i++;
			$(this).addClass("item_"+i);  
			$(this).live('mouseenter',(function() {
				$(this).addClass("hovered");
				var indexSlide = $(this).parents('.list-carusel__item').find('li').index(this);
				$('.list-carusel__item li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-2 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-3 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-4 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-5 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-6 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-7 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-8 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-9 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-10 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.culumn-title-table li:eq(' + indexSlide + ')').addClass("hovered");
			}));
			$(this).live('mouseleave',(function() {
				$(this).removeClass("hovered");
				var indexSlide = $(this).parents('.list-carusel__item').find('li').index(this);
				$('.list-carusel__item li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-2 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-3 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-4 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-5 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-6 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-7 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-8 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-9 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-10 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.culumn-title-table li:eq(' + indexSlide + ')').removeClass("hovered");
			}));
		});	
	});	
	$(".culumn-title-table").each(function(){
		var i=0;
		$("li", this).each(function(){
			i++;
			$(this).addClass("item_"+i);
			$(this).live('mouseenter',(function() {
				$(this).addClass("hovered");
				var indexSlide = $(this).parents('.culumn-title-table').find('li').index(this);
				$('.list-carusel__item li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-2 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-3 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-4 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-5 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-6 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-7 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-8 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-9 li:eq(' + indexSlide + ')').addClass("hovered");
				$('.js-col-10 li:eq(' + indexSlide + ')').addClass("hovered");
			}));
			$(this).live('mouseleave',(function() {
				$(this).removeClass("hovered");
				var indexSlide = $(this).parents('.culumn-title-table').find('li').index(this);
				$('.list-carusel__item li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-1 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-2 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-3 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-4 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-5 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-6 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-7 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-8 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-9 li:eq(' + indexSlide + ')').removeClass("hovered");
				$('.js-col-10 li:eq(' + indexSlide + ')').removeClass("hovered");
			}));
		});	
	});	
	
	$(".link-show-hidden").toggle(function() {
		$(this).parents('.table-stat').find('.table-stat_hide').fadeIn(0);
		$(this).parents('.table-stat').find('.table-stat_hide2').fadeIn(0);
		$(this).text("Hide hidden options");
	}, function() {
		$(this).parents('.table-stat').find('.table-stat_hide').fadeOut(0);
		$(this).parents('.table-stat').find('.table-stat_hide2').fadeOut(0);
		$(this).text("Show hidden options");
	});
	
	
	

});



var handler2 = function(){

	var wid = $('.table-stat').width()-54;
	$('.table-stat__link-open-group').width(wid);

	var h_footer = $('.footer-bottom').height();
	$('footer').css({'padding-bottom':h_footer+20});﻿
	
	
	$('#slider-info').carouFredSel({
		width: '100%',
		scroll: 1,
		auto: true,
		responsive: true,				
		pagination: "#pager",
		swipe: {
			onMouse: true,
			onTouch: true
		},
		items: {
			visible: {
				min: 1,
				max: 1
			}
		}
		
	});
	
	var ww = $(window).width();
	if (ww > 540 & ww <= 600) {			
		var wid_block = $('.caroufredsel_wrapper').width();		
		$('.list-carusel__item').width(wid_block/3); 
		$('#carusel-table').carouFredSel({
			width: '100%',
			scroll: 1,
			auto: false,
			circular:	false,
			responsive: true,				
			infinite  : false,
			queue : false,
			prev: '#prev1',
			next: '#next1',
			swipe: {
				onMouse: true,
				onTouch: true
			},
			items: {
				visible: {
					min: 3,
					max: 3
				}
			}

		});

	};
	if (ww > 420 & ww <= 540) {			
		var wid_block = $('.caroufredsel_wrapper').width();		
		$('.list-carusel__item').width(wid_block/2); 

		$('#carusel-table').carouFredSel({
			width: '100%',
			scroll: 1,
			auto: false,
			circular:	false,
			responsive: true,				
			infinite  : false,
			queue : false,
			prev: '#prev1',
			next: '#next1',
			swipe: {
				onMouse: true,
				onTouch: true
			},
			items: {
				visible: {
					min: 2,
					max: 2
				}
			}

		});

	};
	if (ww <= 420) {			
		var wid_block = $('.caroufredsel_wrapper').width();		
		$('.list-carusel__item').width(wid_block); 

		$('#carusel-table').carouFredSel({
			width: '100%',
			scroll: 1,
			auto: false,
			circular:	false,
			responsive: true,				
			infinite  : false,
			queue : false,
			prev: '#prev1',
			next: '#next1',
			swipe: {
				onMouse: true,
				onTouch: true
			},
			items: {
				visible: {
					min: 1,
					max: 1
				}
			}

		});

	};


	if (ww > 600) {			

		$('#carusel-table').carouFredSel({
			width: '100%',
			scroll: 1,
			auto: false,
			circular:	false,
			responsive: true,				
			infinite  : false,
			queue : false,
			prev: '#prev1',
			next: '#next1',
			swipe: {
				onMouse: true,
				onTouch: true
			},
			items: {
				visible: {
					min: 1,
					max: 7
				}
			}

		});


	};

	if (ww < 991) {			
		
		$('.button-open-search').click(function(){$(this).parent().find('.search').fadeToggle(0); return false;});
		$(document).click(function(e){
			if ($(e.target).parents().filter('.search:visible').length != 1) {
				$('.search').fadeOut(0);		
				
			}
		});
		
	}

}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);

$(window).load(function() {

	$("body").removeClass('loaded');   

});
(jQuery),


//sticky block
function($) {
	var defaults = {
		topSpacing: 0,
		bottomSpacing: 0,
		className: "is-sticky",
		columnRightSticky: "right-sticky",
		wrapperClassName: "sticky-wrapper",
		center: !1,
		getWidthFrom: ""
	},
	$window = $(window),
	$document = $(document),
	sticked = [],
	windowHeight = $window.height(),
	scroller = function() {
		for (var scrollTop = $window.scrollTop(), documentHeight = $document.height(), dwh = documentHeight - windowHeight, extra = scrollTop > dwh ? dwh - scrollTop : 0, i = 0; i < sticked.length; i++) {
			var s = sticked[i],
			elementTop = s.stickyWrapper.offset().top,
			etse = elementTop - s.topSpacing - extra;
			if (etse >= scrollTop) null !== s.currentTop && (s.stickyElement.css("position", "").css("top", ""), $('#column-right-company').removeClass('right-sticky'), s.stickyElement.parent().removeClass(s.className), s.currentTop = null);
			else {
				var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
				0 > newTop ? newTop += s.topSpacing : newTop = s.topSpacing, s.currentTop != newTop && (s.stickyElement.css("position", "fixed").css("top", newTop), "undefined" != typeof s.getWidthFrom && s.stickyElement.css("width", $(s.getWidthFrom).width()), $('#column-right-company').addClass('right-sticky'), s.stickyElement.parent().addClass(s.className), s.currentTop = newTop)
			}
		}
	},
	resizer = function() {
		windowHeight = $window.height()
	},
	methods = {
		init: function(options) {
			var o = $.extend(defaults, options);
			return this.each(function() {
				var stickyElement = $(this),
				stickyId = stickyElement.attr("id"),
				wrapper = $("<div></div>").attr("id", stickyId + "-sticky-wrapper").addClass(o.wrapperClassName);
				stickyElement.wrapAll(wrapper), o.center && stickyElement.parent().css({
					width: stickyElement.outerWidth(),
					marginLeft: "auto",
					marginRight: "auto"
				}), "right" == stickyElement.css("float") && stickyElement.css({
					"float": "none"
				}).parent().css({
					"float": "right"
				});
				var stickyWrapper = stickyElement.parent();
				stickyWrapper.css("height", stickyElement.outerHeight()), sticked.push({
					topSpacing: o.topSpacing,
					bottomSpacing: o.bottomSpacing,
					stickyElement: stickyElement,
					currentTop: null,
					stickyWrapper: stickyWrapper,
					className: o.className,
					getWidthFrom: o.getWidthFrom
				})
			})
		},
		update: scroller,
		unstick: function(options) {
			return this.each(function() {
				var unstickyElement = $(this);
				removeIdx = -1;
				for (var i = 0; i < sticked.length; i++) sticked[i].stickyElement.get(0) == unstickyElement.get(0) && (removeIdx = i); - 1 != removeIdx && (sticked.splice(removeIdx, 1), unstickyElement.unwrap(), unstickyElement.removeAttr("style"))
			})
		}
	};
	window.addEventListener ? (window.addEventListener("scroll", scroller, !1), window.addEventListener("resize", resizer, !1)) : window.attachEvent && (window.attachEvent("onscroll", scroller), window.attachEvent("onresize", resizer)), $.fn.sticky = function(method) {
		return methods[method] ? methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof method && method ? void $.error("Method " + method + " does not exist on jQuery.sticky") : methods.init.apply(this, arguments)
	}, $.fn.unstick = function(method) {
		return methods[method] ? methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof method && method ? void $.error("Method " + method + " does not exist on jQuery.sticky") : methods.unstick.apply(this, arguments)
	}, $(function() {
		setTimeout(scroller, 0)
	})
}(jQuery), ! function() {}
var ScrollZone = function(zones, show_callback, hide_callback, proximity, min_height_shown, frequency) {
	this.zone_elems = zones, this.show_callback = show_callback, this.hide_callback = hide_callback, this.proximity = proximity ? proximity : 0, this.min_height_shown = min_height_shown ? min_height_shown : 0, frequency || (frequency = 250);
	var check_func = $.proxy(this.check, this),
	last_check = 0;
	this.scroll_handler = function() {
		last_check + frequency < Date.now() && (last_check = Date.now(), check_func())
	}, $(window).on("scroll", this.scroll_handler)
};
ScrollZone.prototype.destroy = function() {
	$(window).off("scroll", this.scroll_handler)
}, ScrollZone.prototype.update = function() {
	this.document_height = $(document).height(), this.zone_offsets = [];
	for (var i = 0; i < this.zone_elems.length; ++i) {
		var elem = $(this.zone_elems[i]);
		this.zone_offsets.push({
			elem: elem,
			top: elem.offset().top,
			bot: elem.offset().top + elem.height()
		})
	}
}, ScrollZone.prototype.check = function() {
	$(document).height() != this.document_height && this.update();
	for (var i = 0; i < this.zone_offsets.length; ++i) {
		{
			var zo = this.zone_offsets[i],
			view_top = $(window).scrollTop();
			view_top + $(window).height()
		}
		if (zo.top < view_top + this.proximity && zo.bot > view_top + this.min_height_shown) {
			if (this.shown_elem != zo.elem) {
				this.show_callback && this.show_callback(), this.shown_elem = zo.elem;
				break
			}
		} else if (this.shown_elem == zo.elem) {
			this.hide_callback && this.hide_callback(), this.shown_elem = null;
			break
		}
	}
},
function($) {
	$(document).ready(function() {
		var host_info = $(".company-info .host-info");
		if (host_info) {
			var cta_float = new ScrollZone($(".wrapper"), function() {
				host_info.sticky()
			}, function() {
				host_info.unstick()
			}, 0, 300, 250);
			cta_float.check()
		}
	})
}(jQuery)
//end sticky block
/* custom select */
$('body').addClass('hasJS');
$('select.custom').each(function() {
	
	var sb = new SelectBox({
		selectbox: $(this),
		customScrollbar: true,
		height: 127,
		scrollOptions: {
			autoReinitialise: true,
			showArrows: true
		}
		
	});
	
});
	//--