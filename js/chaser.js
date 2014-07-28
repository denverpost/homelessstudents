$(document).foundation('reveal', {animation: 'fade', animationspeed: 200});

function revealOne() {
	$('#slides-1').foundation('reveal', 'open');
	createSlidesOne();
}

function revealBio(bioname) {
	$('.top-bar, [data-topbar]').css('height', '').removeClass('expanded');
	$(bioname).foundation('reveal', 'open');
}

var derp1 = function(){ $('div.opener').bind('inview', function(event, visible) {
	if (visible) {
		$(this).stop().animate({ opacity: 1}, 1500);
	}
	if (!visible) {
		$('#name1').animate({opacity: 0}, 450);
		$('#name2').animate({opacity: 1}, 450);
	} else {
		$('#name1').stop().animate({opacity: 1}, 150);
		$('#name2').stop().animate({opacity: 0}, 150);
	}
})};
derp1();

var derp2 = function(){ $('#footer-bar').bind('inview', function(event, visible) {
	if (visible) {
		$('.nextwrap').stop().animate({ opacity: 1}, 500);
	}
})};
derp2();