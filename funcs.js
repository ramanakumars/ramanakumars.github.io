
function showPlanet(planet) {
	var planets = document.getElementsByClassName("astro-media-planet-wrapper");
	for (var i=0; i<planets.length; i++) {
		var planetid = planets[i].id;
		if(planetid==planet) {
			planets[i].style.display = 'block';
		} else {
			planets[i].style.display = 'none';
		}
	}
}

function toggleMenu() {
	var nav      = document.getElementById('mainnav');
	var navstyle = getComputedStyle(nav);
	if(navstyle.maxHeight == '0px') {
		nav.style.maxHeight = '2000px';
	} else {
		nav.style.maxHeight = '0px';
	}
}

$(window).resize(function () {
	var viewportWidth = $(window).width();
	if (viewportWidth > 600) {
		$("#mainnav").removeAttr("style");
	}
});

function GOESloop() {
	var GOESloop = document.getElementById('GOES16loop');
	var GOESimg  = document.getElementById('GOES16img');

	GOESloop.style.display='block';
	GOESimg.style.display='none';
}

function GOESimg() {
	var GOESloop = document.getElementById('GOES16loop');
	var GOESimg  = document.getElementById('GOES16img');

	GOESimg.style.display='block';
	GOESloop.style.display='none';
}
