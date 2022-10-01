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

function createButton (string) {
let createBnt = document.createElement('button')
let buttonsContainer = document.querySelector('.buttons-container')

createBnt.id = 'btn-holiday';
createBnt.innerHTML = string;

buttonsContainer.appendChild(createBnt);
}

createButton('Feriados')

function displayHolidays () {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'red'
  let setNewColor = '';

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

createButton('Sexta-Feira')

function displayFriday () {
  let fridayButton = document.querySelector('.buttons-container').childNodes[2];
  fridayButton.id = 'btn-friday'
  let getFridays = document.querySelectorAll('.friday');
  let textFriday = 'SEXTOOU!!';
  let textReset = [4, 11, 18, 25];

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1){
      if (getFridays[index].innerHTML !== textFriday) {
        getFridays[index].innerHTML = textFriday;
      } else {
        getFridays[index].innerHTML = textReset[index];
      }
    }
  })
}

displayFriday();

function dayMouseOver () {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

dayMouseOver();
dayMouseOut();

function createTask (string) {
  let createSpam = document.createElement('spam');
  let myTasks = document.querySelector('.my-tasks')

  createSpam.innerHTML = string;
  myTasks.appendChild(createSpam);
}

createTask('taks');


function addSubtitleTasks (color) {
  let createDiv = document.createElement('div');
  let myTasks = document.querySelector('.my-tasks')

  createDiv.style.backgroundColor = color
  createDiv.className = 'taks'
  myTasks.appendChild(createDiv)
}

addSubtitleTasks('green')
