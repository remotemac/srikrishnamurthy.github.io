$(document).ready(function() {
	// $.ajax({
	// 	url: "https://api.github.com/gists/79de1d997a5bd0e28ad3"
	// }).success(function(res) {
	// 	var favs = JSON.parse(res.files["favs.json"].content).data;
	// 	addFavs(favs);
	// });

	var favs = [
		"iOS",
		"Linux",
		"Jailbreak",
		"Big Data",
		"Data Science",
		"Analytics",
		"Developer",
		"Hacker",
		"CTF",
		"Making",
		"Breaking",
		"OS X",
		"WWDC '15 && '16",
		"Vim",
		"LaTeX",
		"Low Level is the Only Level",
		"A-List Empire",
		"Data Systems",
		"TJHSST",
		"Arduino",
		"FPGA",
		"Data Analysis",
		"Statistics",
		"Java",
		"Chrome",
		"Tuba",
		"Research",
		"Artificial Intelligence",
		"Firebase",
		"Angular.js",
		"Myo",
		"Leap Motion",
		"Mathematica",
		"Objective C",
		"JSON",
		"Swift"
	];

	addFavs(favs);

	function addFavs(favs) {
		var favContainer = $('<div>', {id: 'favs-background'});

		var favText = '';
		for (var i = 0; i < 5; i++) {
			shuffle(favs);
			favs.map(function(fav) {
				favText += ' [ ' + fav + ' ] ';
			});
		}
		
		$('#favs-background span').text(favText);
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
});