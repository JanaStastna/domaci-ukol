import React from 'react';
import './style.css'

export const Header = () => {
  return (
    <header>
      <div className = "topbar container">
          <div className="header-left">
            <div className="header-logo"></div>
            <h1 className="header-name">Počítače pro školáky</h1>
          </div>
      
          <div className="header-right">
            <button id="nav-btn" className="nav-btn"></button>
            <nav className="nav-closed">
              <a className="header-about_project" href="#" >O projektu</a>
              <a className="header-about_us" href="#aboutUs">O nás</a>
            </nav>
          </div>
      </div>
    </header>
  )
}