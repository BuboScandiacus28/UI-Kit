function Stages() {
	var breakPointer = stages.getElementsByClassName('break-pointer')[0].getBoundingClientRect().right;
	var progressBar = stages.getElementsByClassName('stages__progress-bar')[0];
	var parent = progressBar.parentElement.getBoundingClientRect().left;

	progressBar.style.width = breakPointer - parent + 'px';
}

window.addEventListener('resize', Stages);

Stages();