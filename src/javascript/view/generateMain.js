const mainView = () => {
  const main = document.createElement('main');
  main.innerHTML = `
  <div>
    <div class="search_form">
      <input class="form-control" type="text" id="location-input" placeholder="type the city name here"> <br>
      <input class="btn btn-outline-secondary btn-light" type="submit" id="search-button" value="Search">
    </div>
    <div class="result-view">
      <h1 id="location-name"></h1>
      <h1 id="temperature"></h1>
    </div>
    <div class="d-flex flex-row align-items-center">
      <p id="weather-desciption"></p>
      <img id="weather-icon">
    </div>
  </div>
  `;

  return main;
};

export default mainView;
