import { createApi } from 'unsplash-js';
import changeTextColors from '../helpers/changeTextColors';

const { fetchWeatherData } = require('../model/weatherData');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const unsplash = createApi({
  accessKey: 'RmRQetkGdLG3o6Dv0LTcQ9-7Fvi6X1FoTF6Ax_pDsV4',
  fetch: global.fetch,
});

// const populateHeader = () => {

// }

async function fetchImageData(queryText) {
  const result = await unsplash.search.getPhotos({
    query: queryText,
    page: 1,
    perPage: 10,
  });
  console.log(result);
  const index = Math.floor(Math.random() * 10);
  const img = result.response.results[index].links.download;
  const avarageColorCode = result.response.results[index].color;
  // console.log(">2> secondly run this");
  return [img, avarageColorCode];
}

async function updateBodyBackground(queryText) {
  const [returnedImage, avarageColorCode] = await fetchImageData(queryText);

  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${returnedImage})`;
  body.style.backgroundSize = 'cover';

  changeTextColors(avarageColorCode);

  console.log(">1> firstly run this");
}

const populateMain = () => {
  const locationInput = document.getElementById('location-input');
  const resultView = document.getElementsByClassName('result-view')[0];
  const temperateView = document.createElement('h1');
  const searchButton = document.getElementById('search-button');
  const weatherIcon = document.getElementById('weather-icon');
  const weatherDescription = document.getElementById('weather-desciption');
  const unitChanger = document.getElementById('unit-changer');

  let tempInC;
  let tempInF;
  let weatherCondition;

  const setTemperatureView = () => {
    console.log(">2> secondly run this");
    console.log(tempInF);
    if (tempInF === undefined) {
      temperateView.innerText = "You must first check weather for city!";
    } else if (unitChanger.checked === true) {
      temperateView.innerText = (Math.round(tempInF * 100) / 100).toString() + " °F";
    } else if (unitChanger.checked === false) {
      temperateView.innerText = (Math.round(tempInC * 100) / 100).toString() + " °C";
    }
    resultView.innerHTML = '';
    resultView.appendChild(temperateView);
  };

  const setMainView = async () => {
    resultView.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
    const weatherData = await fetchWeatherData(locationInput.value);
    if (weatherData === null) {
      temperateView.innerText = 'The location couldnt found!';
    }
    console.log(weatherData);

    // [, temperateView.innerText] = Math.round(temperatures);
    [tempInC, tempInF, weatherCondition] = weatherData;

    weatherDescription.innerText = weatherCondition.description;
    weatherIcon.src = 'http://openweathermap.org/img/w/' + weatherCondition.icon.toString() + '.png';
    await updateBodyBackground(weatherCondition.main);
    await sleep(1500);
    await setTemperatureView();
    // console.log(">1> first run this");
  };

  searchButton.addEventListener('click', setMainView);

  unitChanger.addEventListener('click', setTemperatureView);
};

// const populateFooter = () => {

// }

export { populateMain }