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

function showNumberChart() {
	$('#high_chart_div_wrap').fadeOut(300);
	$('#large_chart_div_wrap').fadeIn(300);
	$('.percentLink').removeClass('livechart');
	$('.numberLink').addClass('livechart');
}
function showPercentChart() {
	$('#large_chart_div_wrap').fadeOut(300);
	$('#high_chart_div_wrap').fadeIn(300);
	$('.numberLink').removeClass('livechart');
	$('.percentLink').addClass('livechart');
}

function executeAsynchronously(functions, timeout) {
  for(var i = 0; i < functions.length; i++) {
    setTimeout(functions[i], timeout);
  }
}
function loadFirstChart() {
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(drawChart);
	function drawChart() {
        var data = google.visualization.arrayToDataTable([
			['District', '2004', '2013'],
			  ["Denver",753,1066],
			["Jefferson",717,1731],
			["Douglas",0,590],
			["Cherry Creek",7,52],
			["Adams 12",281,1055],
			["Aurora",237,2300],
			["Boulder",123,400],
			["St. Vrain",391,1060],
			["Poudre",326,588],
			["Colo. Springs",79,437],
			//["Academy 20",75,12],
			//["Mesa County Valley",155,151],
			//["Greeley",1073,61],
			//["Falcon",47,1],
			//["Pueblo City",1108,940]
		]);

        var options = {
			title: 'Large School Districts: Number of Homeless Students',
			legend: { position: 'top' },
			/* bar: {groupWidth: '80%' }, */
			isStacked: true,
			hAxis: { textPosition: 'none' },
			vAxis: { textPosition: 'out' },
			vAxis: { textStyle: {fontSize: 12, bold:true} },
			//vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
			series: { 0: { color: 'lightgray'}, 1: { color: 'steelblue' }}
        };

        var chart = new google.visualization.BarChart(document.getElementById('large_chart_div'));

        chart.draw(data, options);
	}
}
function loadSecondChart() {
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(drawChart);
	function drawChart() {
        var data = google.visualization.arrayToDataTable([
			['District', 'Pct. Homeless 2004', 'Pct. Homeless 2013'],
			["Mtn. Valley",5.3,21.5],
			["Mtn. BOCES",0,15.3],
			["Sheridan",4.5,14.7],
			["Center",0.3,13.4],
			["Hanover",17.1,11.2],
			["Moffat",0,11.1],
			["Cripple Creek",4.5,8.7],
			["Westminster",6.7,8.3],
			["Del Norte",0,6.8],
			["Adams 14",0.2,6.7]
		]);

        var options = {
			title: 'School Districts with Highest Percentage of Homeless Students',
			legend: { position: 'top' },
			/*bar: {groupWidth: '80%' }, */
			isStacked: true,
			hAxis: { textPosition: 'none' },
			vAxis: { textPosition: 'out' },
			vAxis: { textStyle: {fontSize: 12, bold:true} },
			//vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
			series: { 0: { color: 'lightgray'}, 1: { color: 'steelblue' }}
        };

        var chart = new google.visualization.BarChart(document.getElementById('high_chart_div'));

        chart.draw(data, options);
	}
}
loadFirstChart();
loadSecondChart();