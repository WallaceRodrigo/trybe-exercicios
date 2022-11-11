import Swal from 'sweetalert2';
import './style.css';

const input = document.querySelector('input');
const button = document.querySelector('button');
const section = document.querySelector('section');
const heading2 = document.querySelector('#h2');

const verifyCurrency = (currency) => {
  if (currency === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda',
    });
    return true;
  }
};

function fetchAPI(currency) {
  return fetch(`https://api.exchangerate.host/latest/?base=${currency}`)
    .then((response) => response.json())
    .then((data) => {
      const { rates } = data;
      const ratesArray = Object.entries(rates);
      // const [coinName, value] = data;
      ratesArray.map((rate) => {
        const div = document.createElement('div');
        div.innerHTML = `${rate[0]} : ${rate[1].toFixed(3)}`;
        // div.innerHTML = `${coinName} : ${value.toFixed(3)}`;
        return section.appendChild(div);
      });
    });
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  section.innerHTML = '';
  const currency = input.value.toUpperCase();
  if (verifyCurrency(currency)) {
    return verifyCurrency();
  }
  heading2.innerHTML = `Valores referentes a 1 ${currency}`;
  fetchAPI(currency);
});
