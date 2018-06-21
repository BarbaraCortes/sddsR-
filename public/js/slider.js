function slider(_id, _n) {
	this.index = 0;
	this.id = _id;
	this.n = _n;

	this.showSlides = function() {
		var slides = document.getElementsByClassName(this.id);

		for (var i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
		}
		slides[this.index].style.display = "block";
	}

	this.plusSlides = function(passo) {
		this.index = (this.index + passo + this.n) % this.n;
		this.showSlides();
	}
	
}