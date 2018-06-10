

document.addEventListener("DOMContentLoaded", function() {

	document.getElementById("timer").innerHTML = "<p>00:00</p>";

	document.querySelector(".container").addEventListener("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		// prevent container from animating
		if (e.target != document.querySelector(".container")) {
			e.target.classList.toggle("flip");
		};
	});
	// initiate timer
	document.querySelector(".container").addEventListener("click", function(e){
		timer();
	}, {once: true});
});

function shuffleCards() {
	// shuffle the cards
};

function timer() {
	const timer = document.getElementById("timer");

	const startTime = new Date().getTime();

	setInterval(function() {
		const curTime = new Date().getTime();

		const minutes = Math.floor( ( (curTime - startTime) % (1000 * 60 * 60) ) / (1000 * 60) );
		const seconds = Math.floor( ( (curTime - startTime) % (1000 * 60) ) / 1000);

		timer.innerHTML = `<p>${pad(minutes)}:${pad(seconds)}</p>`
	}, 1000);
};

function pad(num) {
	num = "0".repeat(2 - num.toString().length) + num.toString();
	return num;
}

function moveCounter() {
	// keeps track of your moves
};

function starRating() {
	// create a star rating system
};

function showInstructions() {
	// show the instructions at the beginning of the game
};

function showEndSplash() {
	// show the end game page
};