const { fetchWeatherData } = require('../model/weatherData');

// const populateHeader = () => {

// }

const populateMain = async () => {
  const locationInput = document.getElementById('locationInput');
  const temperateView = document.getElementById('temperature');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', async () => {
    const temperatures = await fetchWeatherData(locationInput.value);
    console.log(temperatures);

    
    [, temperateView.innerText] = temperatures;
    [temperateView.innerText] = temperatures;
  });
};

// const populateFooter = () => {

// }

export { populateMain }