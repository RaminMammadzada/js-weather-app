import { htmlPrefilter } from "jquery";

const mainView = () => {
  const main = document.createElement('main');
  main.innerHTML = `
  <div>
    <div class="search_form">
      <input type="text" id="locationInput"> <br>
      <input type="submit" id="search-button" value="Search">
    </div>
    <h1 id="temperature">
    </h1>
    <div class="d-flex flex-row align-items-center">
      <p id="weather-desciption"></p>
      <img id="weather-icon">
    </div>
  </div>
  `;

  return main;
};

export default mainView;
