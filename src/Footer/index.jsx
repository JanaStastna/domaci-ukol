import React from 'react';
import './style.css';

const logoCzechitas = {
  image: './img/logoCzechitas.jpg',
};

export const Footer = (props) => {
  return (
    <>
      <div className="sectionFooter">
        <div className="logo">
          <img className="logoCzechitas" src={logoCzechitas.image}></img>
        </div>
        <div className="DA">Digitální akademie 2020</div>
      </div>
    </>
  );
};
