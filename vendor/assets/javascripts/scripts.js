$(document).ready(function(){
  
	$("[placeholder]").placeholder();

	$('.tooltip').hover(function(){
		$('.tooltip-info').show(); 
	}, function(){
		$('.tooltip-info').hide();
	});

	$("input[type=file]").filestyle({ 
		image: "img/icon-choose-file.png",
		imageheight : 23,
		imagewidth : 28,
		width : 142
	});

  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
	
  $("#tabs").tabs();
  $(".slider").slider();
  $("select").selectBox({mobile: true});

	$(function(){
	jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
	/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
	/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
	/(msie) ([\w.]+)/.exec( ua ) ||
	ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
	[];

	return {
	browser: match[ 1 ] || "",
	version: match[ 2 ] || "0"
	};
	};

	if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
	browser[ matched.browser ] = true;
	browser.version = matched.version;
	}

	if ( browser.chrome ) {
	browser.webkit = true;
	} else if ( browser.webkit ) {
	browser.safari = true;
	}

	jQuery.browser = browser;
	}

	$.each($.browser, function(k, v){
	if(v===true) $('html').addClass(k);
	}); 

	});

});

