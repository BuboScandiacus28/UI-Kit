var dropdown = document.getElementsByClassName("dropdown")[0];
var dropdownList = dropdown.getElementsByTagName('UL')[0];
var dropdownActiveItem = dropdown.getElementsByTagName('SPAN')[0];

dropdown.addEventListener('click', function(e) {
	var target = e.target;
	if (target.className == "dropdown__arrow") {
		dropdown.classList.toggle("list-active");
		dropdownList.classList.toggle("close");
		return;
	} else {
		while (true) {
			if (target.getElementsByClassName("dropdown")[0]) return;
			if (target.tagName != "LI") target = target.parentElement;
			else break;
		}
		dropdownActiveItem.innerHTML = target.getElementsByTagName('A')[0].innerHTML;
		dropdown.classList.toggle("list-active");
		dropdownList.classList.toggle("close");
	}
});