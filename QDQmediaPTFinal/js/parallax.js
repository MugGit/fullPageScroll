$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
	
 


    
	/* Next/prev and primary nav btn click handlers 
	$('a.firstScreen').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#firstScreen').offset().top
		
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
			$('.spriteMonitor').css('background-position', '0 0');
												$('.spriteTablet').css('background-position', '-480px 0');
												$('.spriteMobile').css('background-position', '0 0');
		});
    	return false;
	});
    $('a.secondScreen').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#secondScreen').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
				$('.spriteMonitor').css('background-position', '0 -337px');
												$('.spriteTablet').css('background-position', '-240px 0px');
												$('.spriteMobile').css('background-position', '-100px 0');
		});
    	return false;
    });
    $('a.thirdScreen').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#thirdScreen').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
					$('.spriteMonitor').css('background-position', '-600px -337px');
												$('.spriteTablet').css('background-position', '-240px -320px');
												$('.spriteMobile').css('background-position', '-100px -150px');
		});
    	return false;
    });
	$('a.fourthScreen').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#fourthScreen').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
				$('.spriteMonitor').css('background-position', '-600px -674px');
												$('.spriteTablet').css('background-position', '0px -320px');
												$('.spriteMobile').css('background-position', '-200px -150px');
		});
    	return false;
    });
    */
    /* Show/hide dot lav labels on hover */
    $('nav.primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	/*$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');*/





} 



/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
 	 var section1Top =  $('#firstScreen').offset().top - (($('#secondScreen').offset().top - $('#firstScreen').offset().top) / 2);;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#secondScreen').offset().top - (($('#thirdScreen').offset().top - $('#secondScreen').offset().top) / 6);
	var section3Top =  $('#thirdScreen').offset().top - (($('#fourthScreen').offset().top - $('#thirdScreen').offset().top) / 6);
	var section4Top =  $('#fourthScreen').offset().top - (($(document).height() - $('#fourthScreen').offset().top) / 6);;
	$('nav.primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
	 
		$('nav.primary a.firstScreen').addClass('active');
		$('.spriteMonitor').css('background-position', '0 0');
		$('.spriteTablet').css('background-position', '-480px 0');
		$('.spriteMobile').css('background-position', '0 0');
	 } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		
		$('nav.primary a.secondScreen').addClass('active');
		$('.spriteMonitor').css('background-position', '0 -337px');
		$('.spriteTablet').css('background-position', '-240px 0px');
		$('.spriteMobile').css('background-position', '-100px 0');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
 
		$('nav.primary a.thirdScreen').addClass('active');
		$('.spriteMonitor').css('background-position', '-600px -337px');
		$('.spriteTablet').css('background-position', '-240px -320px');
		$('.spriteMobile').css('background-position', '-100px -150px');
	} else if ($(document).scrollTop() >= section4Top){
 
		$('nav.primary a.fourthScreen').addClass('active');
		$('.spriteMonitor').css('background-position', '-600px -674px');
		$('.spriteTablet').css('background-position', '0px -320px');
		$('.spriteMobile').css('background-position', '-200px -150px');
	}
	
}

 
								 