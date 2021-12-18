import logo from '../../assets/images/logo.png';
import './Header.scss';
import React, { useState, useEffect } from 'react';

function Header(props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  return (
    <header className={(offset === 0)? 'header' : 'header header-dark'}>
      <div className="header__wrapper">
      <img className="header__logo" src={logo} alt="logo"/>

      <ul className="header__menu">
        <li className="header__item">
          <a className="header__link" href="#home">Home</a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#instrumentals">Instrumentals</a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#buy">Buy</a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#contact">Contact</a>
        </li>
      </ul>
      </div>
    </header>
  );
}

export default Header;
