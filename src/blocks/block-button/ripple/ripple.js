var parent, ink, d, x, y;
document.body.onclick = function(e) {
  var target = e.target;
  while(true) {
    if(target.tagName == "BODY") return;
    if(target.classList.contains("ripple")) break;
    else target = target.parentElement;  
  }

  //создаём .ink элемент, если еще не создан
  if(!target.getElementsByClassName('ink')[0]) 
    target.innerHTML += "<span class='ink'></span>";

  ink = target.getElementsByClassName('ink')[0];
  //сбрасываем анимацию
  ink.classList.remove("animate");
 
  //рассчитываем размеры .ink элемента
  //они определяются размерами родительского контейнера
  if(!ink.offsetHeight && !ink.offsetWidth) {
    d = Math.max(target.offsetWidth, target.offsetHeight);
    ink.style.height = d + 'px';
    ink.style.width = d + 'px';
  }

  //получим начальные координаты, 
  //центр .ink нужно поместить в точку клика
  var coord = target.getBoundingClientRect();

  x = e.pageX - coord.left - ink.offsetWidth/2;
  y = e.pageY - coord.top - ink.offsetHeight/2;

  //установим координаты и запустим анимацию
  ink.style.top = y + 'px';
  ink.style.left = x + 'px';
  ink.classList.add("animate");
}

