  document.addEventListener('mousedown', function(e) {
    var thumbElem = e.target;
    var placeholder = thumbElem.parentElement.getElementsByClassName('slider__placeholder')[0];
    var tail = thumbElem.parentElement.getElementsByClassName('slider__tail')[0];
    if (thumbElem.classList.contains('slider__thumb')) {
      var thumbCoords = getCoords(thumbElem);
      var shiftX = e.pageX - thumbCoords.left;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали

      var sliderCoords = getCoords(thumbElem.parentElement);

      function sliderMousemove(e) {
        //  вычесть координату родителя, т.к. position: relative
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < -15) {
          newLeft = -15;
        }
        var rightEdge = thumbElem.parentElement.offsetWidth - thumbElem.offsetWidth + 5;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbElem.style.left = newLeft + 'px';
        if (tail) {
          tail.style.width = newLeft + 2 + 'px';
        }
        if (placeholder) {
          placeholder.style.display = 'flex';
          placeholder.style.left = newLeft + -5 + 'px';
          placeholder.children[0].innerHTML = Math.floor( (100 * (newLeft + 15) ) / (thumbElem.parentElement.offsetWidth - thumbElem.offsetWidth + 15 + 5) ); 
        }
      }

      document.addEventListener('mousemove', sliderMousemove);

      function sliderMouseup() {
        document.removeEventListener('mousemove', sliderMousemove);
        document.removeEventListener('mouseup', sliderMouseup); 
        if (placeholder) {
          placeholder.style.display = 'none';
        }
      }

      document.addEventListener('mouseup', sliderMouseup);

      return false; // disable selection start (cursor change)
    };
  });

  document.addEventListener('dragstart', function() {
    var thumbElem = e.target;
    if (thumbElem.classList.contains('slider__thumb')) {
      alert(1);
      return false;
    }
  });

  function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }