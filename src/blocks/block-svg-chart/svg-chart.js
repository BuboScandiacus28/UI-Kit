document.addEventListener('scroll', chart);
function chart() {
  var chart = document.body.getElementsByClassName('chart__segment');
  var windowHeight = window.pageYOffset + document.documentElement.clientHeight;
  for (var i = 0; i < chart.length; i++){
  	if (chart[i].getElementsByTagName('animate')[0].hasAttribute('data-checked')) {
  		var chartTop = chart[i].getBoundingClientRect().top + window.pageYOffset;
  		var chartBottom = chart[i].getBoundingClientRect().bottom + window.pageYOffset;
  		if ((windowHeight > chartTop)&&(window.pageYOffset < chartBottom)) {
    		chart[i].getElementsByTagName('animate')[0].beginElement();
        chart[i].getElementsByTagName('animate')[1].beginElement();
    		chart[i].getElementsByTagName('animate')[0].removeAttribute('data-checked');
  		}
  	}
  }
};