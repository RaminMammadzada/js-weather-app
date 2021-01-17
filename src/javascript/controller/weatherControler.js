import { createApi } from 'unsplash-js';
import changeTextColors from '../helpers/changeTextColors';

const { fetchWeatherData } = require('../model/weatherData');

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
    perPage: 1,
  });
  console.log(result);
  // const index = Math.floor(Math.random() * 10);
  const img = result.response.results[0].links.download;
  const avarageColorCode = result.response.results[0].color;
  // console.log(">2> secondly run this");
  return [img, avarageColorCode];
}

async function updateBody(queryText) {
  const [returnedImage, avarageColorCode] = await fetchImageData(queryText);

  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${returnedImage})`;
  body.style.backgroundSize = 'cover';

  changeTextColors(avarageColorCode);

  // console.log(">3> thirdly run this");
}

const populateMain = () => {
  const locationInput = document.getElementById('locationInput');
  const temperateView = document.getElementById('temperature');
  const searchButton = document.getElementById('search-button');
  const weatherIcon = document.getElementById('weather-icon');
  const weatherDescription = document.getElementById('weather-desciption');

  searchButton.addEventListener('click', async () => {
    temperateView.innerText = 'loading...';
    const temperatures = await fetchWeatherData(locationInput.value);
    if (temperatures === null) {
      temperateView.innerText = 'The location couldnt found!';
    }
    console.log(temperatures);

    // [, temperateView.innerText] = Math.round(temperatures);
    const [temInC, tempInF, weatherCondition] = temperatures;
    temperateView.innerText = (Math.round(temInC * 100) / 100).toString() + " °C";
    weatherDescription.innerText = weatherCondition.description;
    console.log(weatherCondition.description);
    weatherIcon.src = 'http://openweathermap.org/img/w/' + weatherCondition.icon.toString() + '.png';
    console.log(weatherIcon);
    updateBody(weatherCondition.main);
    // console.log(">1> first run this");
  });
};



// const populateFooter = () => {

// }

export { populateMain }