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
            <div className="header-about_project" href="#" >O projektu</div>
            <div className="header-about_us" href="#">O nás</div>
          </div>
      </div>
    </header>
  )
}