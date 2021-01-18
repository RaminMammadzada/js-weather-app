import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import '../css/switchStyle.css';
import '../css/loader.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import home from './view/home';
import populateMain from './controller/weatherControler';

home();

populateMain();
// fetchWeatherData();