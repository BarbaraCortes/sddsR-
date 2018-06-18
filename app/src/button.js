var slideIndex = 0;
console.log("teste");
showSlides(slideIndex);

//Next/Previous control
function plusSlides(passo) {
	slideIndex = (slideIndex + passo + 2) % 2;
	showSlides();
}

function showSlides(n) {
	var slides = document.getElementsByClassName("slides");
	console.log(slides);
	console.log(slides.length);
	console.log(slideIndex);

	var i;
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";

	console.log(slideIndex);
}