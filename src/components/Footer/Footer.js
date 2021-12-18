import './Footer.scss';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__logo" src={logo} alt="logo"/>
        <p className="footer__text">
          Copyright ©2021 All rights reserved | Design by Tigraranaar
        </p>
      </div>
      <div className="footer__right">
        <a className="footer__link" href="https://soundcloud.com/tigraranaar">
          <img className="footer__icon" src='https://cdn2.iconfinder.com/data/icons/minimalism/512/soundcloud.png' alt="logo"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
