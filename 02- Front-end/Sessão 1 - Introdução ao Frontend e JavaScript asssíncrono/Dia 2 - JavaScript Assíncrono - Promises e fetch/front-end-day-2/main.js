import Swal from 'sweetalert2';
import './style.css';

const image = document.getElementById('image');
const name = document.getElementById('name');
const button = document.getElementById('button');

const ACESS_TOKEN = 4061544480736604;
const BASE_URL = `https://www.superheroapi.com/api.php/${ACESS_TOKEN}`;
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      image.src = data.image.url;
      name.innerHTML = `${data.name} - Id: ${data.id}`;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
