

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