import headerView from './generateHeader';
import mainView from './generateMain';
import footerView from './generateFooter';

const home = () => {
  const body = document.querySelector('body');
  body.appendChild(headerView());
  body.appendChild(mainView());
  body.appendChild(footerView());
};


export default home;