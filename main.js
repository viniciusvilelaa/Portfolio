import Typed from 'typed.js';

const nome = document.getElementById('nome');


const typed = new Typed({nome}, {
  strings: ["Vinicius", "Vilela"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});