$(document).foundation('reveal', {animation: 'fade', animationspeed: 200});

function revealBio(bioname) {
	$('.top-bar, [data-topbar]').css('height', '').removeClass('expanded');
	$(bioname).foundation('reveal', 'open');
}

$(window).scroll(function() {
	var s = $(window).scrollTop();
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	opacityNew = s / h;
	$(".opener.opener1 div#title").children().css("opacity", 1 - opacityNew);
	$('#name1').css("opacity", 1 - opacityNew*.75);
	$('#name2').css("opacity", opacityNew*.75);
});

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
