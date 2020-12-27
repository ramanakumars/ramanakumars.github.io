
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
	console.log(navstyle.maxHeight);
	if(navstyle.maxHeight == '0px') {
		nav.style.maxHeight = '200%';
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
