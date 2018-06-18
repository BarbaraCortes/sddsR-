var slideIndex = 0;
showSlides();

//Next/Previous control
function plusSlides(passo) {
	slideIndex = (slideIndex + passo + 2) % 2;
	showSlides();
}

function showSlides() {
	var slides = document.getElementsByClassName("slides");

	var i;
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";
}