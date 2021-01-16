const mainView = () => {
  const main = document.createElement('main');
  main.innerHTML = `
  <div>
    <form>
      <input type="text" id="locationInput"> <br>
      <input type="submit" value="Search">
    </form>
    <h1 class="temperature"> main
  </h1>
  </div>

  `;

  return main;
};


export default mainView;