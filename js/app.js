

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".container").addEventListener("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		e.target.classList.toggle("flip");
	});
})