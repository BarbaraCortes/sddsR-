$(function() {
	changeSelection('usp');
});

function changeSelection(id) {
	var divs = document.getElementsByClassName("bolsas");
	for (var i = 0; i < divs.length; i++){
		divs[i].style.display = "none";
	}

	console.log(divs);
	console.log(id);

	var div = document.getElementById(id);
	div.style.display = "block";
}