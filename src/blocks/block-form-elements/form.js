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
});

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
	var error = parentElement.getElementsByClassName("error")[0];
	var success = parentElement.getElementsByClassName("success")[0];
	if (!email.validity.valid) {
		email.error.style.display = "flex";
		email.success.style.display = "none";
    e.preventDefault();
  }
  if (!name.validity.valid) {
  	name.error.style.display = "flex";
  	name.success.style.display = "none";
    e.preventDefault();
  }
}, false);