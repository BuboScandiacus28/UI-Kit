var form = document.getElementsByClassName('search')[0];
var search = form.getElementsByTagName('input')[0];

search.addEventListener('focus', function() {
	search.placeholder = "Search";
	form.classList.remove("search_error");
}, false);

form.addEventListener('submit', function(e) {
	search.value = "";
	search.placeholder = "I’ve not found what I’m looking for...";
	form.classList.add("search_error");
	e.preventDefault();
}, false);