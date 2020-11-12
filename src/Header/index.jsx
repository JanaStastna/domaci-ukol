import React, { useState } from 'react';
import './style.css';

export const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo"></div>
          <h1 className="header__name">Počítače pro školáky</h1>
        </div>

        <div className="header__right">
          <button
            id="nav-btn"
            className="nav-btn"
            onClick={() => {
              setHamburgerMenu(!hamburgerMenu);
            }}
          ></button>
          <nav className={hamburgerMenu ? null : 'nav-closed'}>
            <a
              className="header__atr-project"
              href="#aboutProject__section1--message"
              onClick={() => {
                setHamburgerMenu(!hamburgerMenu);
              }}
            >
              O projektu
            </a>
            <a
              className="header__atr-us"
              href="#aboutUs"
              onClick={() => {
                setHamburgerMenu(!hamburgerMenu);
              }}
            >
              O nás
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
