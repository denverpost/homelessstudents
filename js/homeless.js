$(document).foundation('reveal', {animation: 'fade', animationspeed: 200});

function revealCredits() {
	$('#credits').foundation('reveal', 'open');
}

function scrollDownTo(whereToScroll) {
	$('html,body').animate({ scrollTop: ($(whereToScroll).offset().top - 45)}, 300);
}

function getNodePosition(node) {
	var eTop = $(node).offset().top;
	return Math.abs(eTop - $(window).scrollTop());
}

$(window).scroll(function() {
	var s = $(window).scrollTop();
	var t = getNodePosition('.opener.opener2');
	var u = getNodePosition('.opener.opener3');
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	opacityNew = s / h;
	opacityNewTwo = t / h;
	opacityNewThree = u / h;
	if (opacityNew > 1 && opacityNew < 1.1) {
		showAd();
	}
	$(".opener.opener1 div#title").children().css("opacity", 1 - opacityNew);
	$(".opener.opener2 div.title-below").children().css("opacity", 1 - opacityNewTwo*.75);
	$(".opener.opener3 div.title-below").children().css("opacity", 1 - opacityNewThree*.75);
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

var moreAd = true;
function hideAdManual() {
    $('#adwrapper').fadeOut(200);
    $('a.boxclose').css('display','none');
    moreAd = false;
}
function showAd() {
    if (moreAd && $("#adwrapper").html().length > 50) {
        $('#adwrapper').fadeIn(300);
        $('a.boxclose').fadeIn(300);
        moreAd = false;
    }
}