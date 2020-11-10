import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo"></div>
          <h1 className="header__name">Počítače pro školáky</h1>
        </div>

        <div className="header__right">
          <button id="nav-btn" className="nav-btn"></button>
          <nav className="nav-closed">
            <a
              className="header__atr-project"
              href="#aboutProject__section1--message"
            >
              O projektu
            </a>
            <a className="header__atr-us" href="#aboutUs">
              O nás
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
