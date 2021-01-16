const headerView = () => {
  const header = document.createElement('header');
  header.innerHTML = `
  <h1>logo</h1>
  <h1>header</h1>
  <label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
  </label>
  `;
  return header;
};


export default headerView;