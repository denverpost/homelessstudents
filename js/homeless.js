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

$(document).ready(function(){
	$('.centergallery').slick({
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><span>&lt;</span></button>',
		nextArrow: '<button type="button" class="slick-next"><span>&gt;</span></button>',
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    arrows: true,
		    centerMode: true,
		    centerPadding: '2em',
		    slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    arrows: true,
		    centerMode: true,
		    centerPadding: '2em',
		    slidesToShow: 1
		  }
		}
		]
		});
});
