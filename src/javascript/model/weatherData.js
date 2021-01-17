const fetchWeatherData = async (locationInfo) => {
  const locationInput = locationInfo;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=aeff340ada9f2f601c43bd0f17dbd5fa`);
    const weatherData = await response.json();
    const tempInKelvin = parseFloat(weatherData.main.temp);
    const tempInFahrenheit = (tempInKelvin * (9 / 5)) - 459.67;
    const tempInCelcius = tempInKelvin - 273.15;
    console.log(weatherData);
    return [tempInCelcius, tempInFahrenheit, weatherData.weather[0]];
  } catch (error) {
    return null;
  }
};

export { fetchWeatherData };