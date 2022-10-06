// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const href = document.getElementById('href');
const inputCheckbox = document.getElementById('input-checkbox');
const inputText = document.getElementById('input-text');

href.addEventListener('click', function(event) {
  event.preventDefault();
});

inputCheckbox.addEventListener('click', function(event) {
  event.preventDefault();
});

inputText.addEventListener('keypress', function(event) {
  event.preventDefault();
  console.log(event.key)
});