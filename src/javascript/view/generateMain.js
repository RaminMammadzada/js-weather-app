const mainView = () => {
  const main = document.createElement('main');
  main.innerHTML = `
  <div>
    <div class="search_form">
      <input type="text" id="locationInput"> <br>
      <input type="submit" id="search-button" value="Search">
    </div>
    <h1 id="temperature"> temperature will be seen here
    </h1>
  </div>

  
  `;

  return main;
};


export default mainView;