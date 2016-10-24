var nine = document.getElementById("ninLink");
var ten = document.getElementById("tenLink");
var eleven = document.getElementById("eleLink");
var twelve = document.getElementById("tweLink");

var gallery = document.getElementById("galleryTitle");

nine.addEventListener('click', function() {
	document.getElementById("ninArea").style.display = "block";
	document.getElementById("tenArea").style.display = "none";
	document.getElementById("eleArea").style.display = "none";
	document.getElementById("tweArea").style.display = "none";
});

ten.addEventListener('click', function() {
	document.getElementById("ninArea").style.display = "none";
	document.getElementById("tenArea").style.display = "block";
	document.getElementById("eleArea").style.display = "none";
	document.getElementById("tweArea").style.display = "none";
});

eleven.addEventListener('click', function() {
	document.getElementById("ninArea").style.display = "none";
	document.getElementById("tenArea").style.display = "none";
	document.getElementById("eleArea").style.display = "block";
	document.getElementById("tweArea").style.display = "none";
});

twelve.addEventListener('click', function() {
	document.getElementById("ninArea").style.display = "none";
	document.getElementById("tenArea").style.display = "none";
	document.getElementById("eleArea").style.display = "none";
	document.getElementById("tweArea").style.display = "block";
});

gallery.addEventListener('click', function() {
	document.getElementById("ninArea").style.display = "block";
	document.getElementById("tenArea").style.display = "block";
	document.getElementById("eleArea").style.display = "block";
	document.getElementById("tweArea").style.display = "block";
});