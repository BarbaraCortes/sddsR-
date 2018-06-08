(function($){

	$(document).ready(function(){

		$(".carousel-outer").advancedCarousel({

			waitTime : 3000,
			carouselInner : ".carousel-inner",
			wrapper : ".wrapper",
			leftTransparentElement : ".left-transparent",
			rightTransparentElement : ".right-transparent",
			carouselItem : ".carousel-item",
			customHeight : 600,
			leftLink : ".left-link",
			rightLink : ".right-link",
			scrollButtonsContainer : ".scroll-buttons",
			scrollButtonClass : ".scroll-button",
			autoSlide : true

		});

	});

})(jQuery)