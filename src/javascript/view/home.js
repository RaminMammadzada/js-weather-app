import headerView from './populateHeader';
import mainView from './populateMain';
import footerView from './populateFooter';

const home = () => {
  const body = document.querySelector('body');
  body.appendChild(headerView());
  body.appendChild(mainView());
  body.appendChild(footerView());

};


export default home;