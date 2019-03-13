document.addEventListener('scroll', percentages);
function percentages() {
  var percentages = document.body.getElementsByClassName('percentages__segment');
  var windowHeight = window.pageYOffset + document.documentElement.clientHeight;
  for (var i = 0; i < percentages.length; i++){
  	if (percentages[i].getElementsByTagName('animate')[0].hasAttribute('data-checked')) {
  		var percentagesTop = percentages[i].getBoundingClientRect().top + window.pageYOffset;
  		var percentagesBottom = percentages[i].getBoundingClientRect().bottom + window.pageYOffset;
  		if ((windowHeight > percentagesTop)&&(window.pageYOffset < percentagesBottom)) {
    		percentages[i].getElementsByTagName('animate')[0].beginElement();
    		percentages[i].getElementsByTagName('animate')[0].removeAttribute('data-checked');
  		}
  	}
  }
};