$(document).foundation('reveal', {animation: 'fade', animationspeed: 200});

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

$('#footer-bar').waypoint(function(direction) {
	if (direction == 'down') {
		$('.nextwrap').stop().animate({ opacity: 1}, 500);
	}
},{ offset: '100%'});
$('#tweentitle1').waypoint(function(direction) {
	if (direction == 'down') {
	topx = $('#tweentitle1 > #title2').position();
		$('#tweentitle1 > #title2').css({ 'position': 'fixed','top': topx.top });
	}
},{ offset: '40%'});
$('#tweentitle1').waypoint(function(direction) {
	if (direction == 'down') {
		$('#tweentitle1 > #title2').css({ 'position': 'absolute','top': '28%' });
	}
},{ offset: '-40%'});
$('#tweentitle1').waypoint(function(direction) {
	if (direction == 'up') {
	topx = $('#tweentitle1 > #title2').position();
		$('#tweentitle1 > #title2').css({ 'position': 'fixed','top': topx.top });
	}
},{ offset: '-40%'});
$('#tweentitle1').waypoint(function(direction) {
	if (direction == 'up') {
		$('#tweentitle1 > #title2').css({ 'position': 'absolute','top': '28%' });
	}
},{ offset: '40%'});