import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

console.log('hi universe');

const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.innerText = 'hi universe';
body.appendChild(h1);
