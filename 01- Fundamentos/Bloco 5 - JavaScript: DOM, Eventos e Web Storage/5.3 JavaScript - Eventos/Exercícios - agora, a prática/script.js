function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',]
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays () {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const decemberDays = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const decDays = decemberDaysList[index];
    const decDaysListItem = document.createElement('li');
    decDaysListItem.innerHTML = decDays; 

    if (decDays === 24 || decDays === 31){
      decDaysListItem.className = 'day holiday'
      decemberDays.appendChild(decDaysListItem);
    } else if (decDays === 4 || decDays === 11 || decDays === 18){
      decDaysListItem.className = 'day friday'
      decemberDays.appendChild(decDaysListItem);
    } else if (decDays === 25){
      decDaysListItem.className = 'day holiday friday'
      decemberDays.appendChild(decDaysListItem);
    }else {
      decDaysListItem.className = 'day'
      decemberDays.appendChild(decDaysListItem);
    }
  }
}

createDays();

function createHolidayButton (string) {
let createBnt = document.createElement('button')
let buttonsContainer = document.querySelector('.buttons-container')

createBnt.id = 'btn-holiday';
createBnt.innerHTML = string;

buttonsContainer.appendChild(createBnt);
}

createHolidayButton('Feriados')

function displayHolidays () {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'red'
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
}

displayHolidays();
