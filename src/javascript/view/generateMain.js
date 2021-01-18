const mainView = () => {
  const main = document.createElement('main');
  main.innerHTML = `
  <div>
    <div class="search_form">
      <input type="text" id="location-input"> <br>
      <input type="submit" id="search-button" value="Search">
    </div>
    <div class="result-view">
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
