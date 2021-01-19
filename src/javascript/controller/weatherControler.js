import changeColor from '../helpers/updateColor';
import uppercaseFirstLetter from '../helpers/uppercaseFirstLetter';
import fetchImageData from '../model/imageData';

import fetchWeatherData from '../model/weatherData';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const updateBodyBackground = async (queryText) => {
  const [returnedImage, avarageColorCode] = await fetchImageData(queryText);

  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${returnedImage})`;
  body.style.backgroundSize = 'cover';

  changeColor(avarageColorCode);
};

const populateMain = () => {
  const locationInput = document.getElementById('location-input');
  const resultView = document.getElementsByClassName('result-view')[0];
  const locationNameView = document.getElementById('location-name');
  const temperateView = document.createElement('h1');
  const searchButton = document.getElementById('search-button');
  const weatherIcon = document.getElementById('weather-icon');
  const weatherDescription = document.getElementById('weather-desciption');
  const unitChanger = document.getElementById('unit-changer');

  let tempInC;
  let tempInF;
  let weatherCondition;
  let countryAbbr;

  const setTemperatureView = () => {
    if (tempInF === undefined) {
      temperateView.innerText = 'You must first check weather for city!';
    } else if (unitChanger.checked === true) {
      temperateView.innerText = `${(Math.round(tempInF * 100) / 100).toString()} °F`;
    } else if (unitChanger.checked === false) {
      temperateView.innerText = `${(Math.round(tempInC * 100) / 100).toString()} °C`;
    }

    if (locationInput.value !== '') {
      locationNameView.innerText = `${uppercaseFirstLetter(locationInput.value)}, ${countryAbbr}`;
    }
    weatherDescription.innerText = weatherCondition.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherCondition.icon.toString()}.png`;
    resultView.appendChild(temperateView);

    locationInput.value = '';
  };

  const setMainView = async () => {
    locationNameView.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
    const weatherData = await fetchWeatherData(locationInput.value);
    if (locationInput.value === '') {
      locationNameView.innerText = 'You must enter a location name first!';
    } else if (weatherData === null) {
      locationNameView.innerText = 'The location couldnt found!';
    } else {
      [tempInC, tempInF, weatherCondition, countryAbbr] = weatherData;
      temperateView.innerText = '';
      weatherDescription.innerText = '';
      weatherIcon.src = '';
      await updateBodyBackground(weatherCondition.main);
      await sleep(1500);
      await setTemperatureView();
    }
  };

  searchButton.addEventListener('click', setMainView);

  // Execute a function when the user releases a key on the keyboard
  locationInput.addEventListener('keyup', (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById('search-button').click();
    }
  });

  unitChanger.addEventListener('click', setTemperatureView);
};

export default populateMain;