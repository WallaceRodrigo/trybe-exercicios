import Swal from 'sweetalert2';
import fetch from 'node-fe'

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    preEl.innerHTML = '';

    const obj = Object.entries(data);
    obj.map((ob) => {
      preEl.innerHTML += `
      ${ob[0]}: ${ob[1]}
      `;
      return '';
    });
    
    if (data.erro === true) {
      preEl.innerHTML = 'CEP inválido!';
      throw new Error('');
    }
    return data;
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar um CEP válido',
    });
  }
}

buttonEl.addEventListener('click', handleClick);
