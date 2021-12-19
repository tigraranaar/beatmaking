import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import './Header.scss';

function Header(props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  const [modalToggle, setModalToggle] = useState(false);

  let handleModal = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <header className={(offset === 0)? 'header' : 'header header-dark'}>
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="logo"/>

        <button className={(modalToggle)? 'header__burger header__burger-close': 'header__burger'} onClick={handleModal}></button>

        <ul className={(modalToggle)? 'header__menu-mobile': 'header__menu'}>
          <li className="header__item" onClick={modalToggle? handleModal: null}>
            <a className="header__link" href="#home">Home</a>
          </li>
          <li className="header__item" onClick={modalToggle? handleModal: null}>
            <a className="header__link" href="#instrumentals">Instrumentals</a>
          </li>
          <li className="header__item" onClick={modalToggle? handleModal: null}>
            <a className="header__link" href="#buy">Buy</a>
          </li>
          <li className="header__item" onClick={modalToggle? handleModal: null}>
            <a className="header__link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
