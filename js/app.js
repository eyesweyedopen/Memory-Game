// card array to store cards for shuffling and adding
const cards = {
	content: []
};

document.addEventListener("DOMContentLoaded", function() {

	cardGenerator();

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

function cardGenerator() {

	const frag = document.createDocumentFragment();

	let i = 0;
	while ( i < 12 ) {
		card = document.createElement("div");
		card.classList.add("card");
		cards.content.push(card);
		i++;
	};

	shuffleCards();

	// adds cards to the page
	for (let i = 0; i < cards.content.length; i++) {
		frag.appendChild(cards.content[i]);
	};
	
	document.querySelector(".container").appendChild(frag);
};

function shuffleCards() {
	cards.content.sort(function(a, b){return 0.5 - Math.random()});
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

// to format the timer
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