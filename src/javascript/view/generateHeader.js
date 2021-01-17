const headerView = () => {
  const header = document.createElement('header');
  header.innerHTML = `
  <h1>logo</h1>
  <h1>header</h1>
  <div class="d-flex flex-row align-items-center">
    <h4 class="mr-3">celcius</h4>
    <label class="switch">
      <input type="checkbox" checked>
      <span class="slider round"></span>
    </label>
    <h4 class="ml-3">fahrenheit</h4>
  </div>
  `;
  return header;
};

export default headerView;