

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".container").addEventListener("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		// prevent container from animating
		if (e.target != document.querySelector(".container")) {
			e.target.classList.toggle("flip");
		};
	});
})

function shuffleCards() {
	// shuffle the cards
};

function timer() {
	// create a working timer
};

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