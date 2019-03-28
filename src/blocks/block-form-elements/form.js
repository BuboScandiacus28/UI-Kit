var form = document.getElementsByClassName('form')[0];
var name = form.getElementsByClassName('form__name')[0];
var email = form.getElementsByClassName('form__email')[0];


name.addEventListener('input', function() {
	var error = name.parentElement.getElementsByClassName("error")[0];
	var success = name.parentElement.getElementsByClassName("success")[0];
	if (name.validity.valid) {
		error.style.display = "none";
		success.style.display = "flex";
	} else if (name.value == "") {
		error.style.display = "none";
		success.style.display = "none";
	} else {
		error.style.display = "flex";
		success.style.display = "none";
	}
}, false);

email.addEventListener('input', function() {
	var error = email.parentElement.getElementsByClassName("error")[0];
	var success = email.parentElement.getElementsByClassName("success")[0];
	if (email.validity.valid) {
		error.style.display = "none";
		success.style.display = "flex";
	} else if (email.value == "") {
		error.style.display = "none";
		success.style.display = "none";
	} else {
		error.style.display = "flex";
		success.style.display = "none";
	}
}, false);

form.addEventListener('submit', function(e) {
	if (!email.validity.valid) {
		email.parentElement.getElementsByClassName("error")[0].style.display = "flex";
		email.parentElement.getElementsByClassName("success")[0].style.display = "none";
    e.preventDefault();
  }
  if (!name.validity.valid) {
  	name.parentElement.getElementsByClassName("error")[0].style.display = "flex";
  	name.parentElement.getElementsByClassName("success")[0].style.display = "none";
    e.preventDefault();
  }
}, false);