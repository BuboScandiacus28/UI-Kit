function Calendar(year, month) {
  //последний день месяца
  var Dlast = new Date(year,month+1,0).getDate(),
  //последний день предыдущего месяца
  DlastMonth = new Date(year,month,0).getDate(),
  //объект с последним днем, текущим месяцем и текущим годом
  D = new Date(year,month,Dlast),
  //номер дня недели последнего дня месяца
  DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
  //номер дня недели первого дня месяца
  DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
  //будущий календарь
  calendar = '<tr>',
  //сегодняшний день
  today = new Date().getDate(),
  //переменная счетчик для последней недели месяца
  k = 1,
  //массив месяцев на английском
  month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  //разметка первой недели месяца
  if (DNfirst != 0) {
    //если первый день месяца не в воскресенье
    for(var  i = 1; i < DNfirst; i++) calendar += '<td class="calendar__other-month">' + (+DlastMonth - +DNfirst + i + 1);
  } else {
    //если первый день месяца в воскресенье 
    for(var  i = 0; i < 6; i++) calendar += '<td class="calendar__other-month">' + (+DlastMonth - 6 + i + 1);
  }

  for(var  i = 1; i <= Dlast; i++) {
    //заполнение календаря днями
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      //сегодняшний день
      calendar += '<td class="today">' + i;
    } else {
      //друугие дни
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      //если последний день неделии закрыть неделю 
      calendar += '<tr>';
    }
  }

  //заполнение пустого места в последней неделе месяца
  for(var  i = DNlast; i < 7; i++) {
    calendar += '<td class="calendar__other-month">' + k;
    k++;
  }
 
  document.querySelector('#calendar .calendar__content').innerHTML = calendar;
  document.querySelector('#calendar thead td:nth-child(2)').innerHTML = month[D.getMonth()];
  document.querySelector('.calendar__today').innerHTML = today;
  document.querySelector('#calendar thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#calendar thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#calendar .calendar__content tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    calendar = '<tr>';
    for(var  i = 0; i < 7; i++) {
      calendar += '<td class="calendar__other-month">' + k;
      k++;
    }
    document.querySelector('#calendar .calendar__content').innerHTML += calendar;
  }
}

Calendar(new Date().getFullYear(), new Date().getMonth());

// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(2) td:nth-child(1)').onclick = function() {
  var year, month;
  if (document.querySelector('#calendar thead td:nth-child(2)').dataset.month == 0) {
    year = parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.year) - 1;
    month = 11;
  } else {
    year = document.querySelector('#calendar thead td:nth-child(2)').dataset.year;
    month = parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1;
  }
  Calendar(year, month);
}

// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(2) td:nth-child(3)').onclick = function() {
  var year, month;
  if (document.querySelector('#calendar thead td:nth-child(2)').dataset.month == 11) {
    year = parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.year) + 1;
    month = 0;
  } else {
    year = document.querySelector('#calendar thead td:nth-child(2)').dataset.year;
    month = parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1;
  }
  Calendar(year, month);  
}

//переход на сегодня 
document.querySelector('#calendar .calendar__today-container').onclick = function() {
  //alert(1);
  Calendar(new Date().getFullYear(), new Date().getMonth());
}
