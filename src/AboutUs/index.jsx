import React from 'react';
import './style.css';

export const AboutUs = () => {
  return (
    <div id="aboutUs" className="aboutUs">
      <h1 className="aboutUs__title">O nás</h1>
      <div className="aboutUs__about">
        <div className="aboutUs__about--Zuzana">
          <div className="aboutUs__about--Zuzana--header">
            <h3>Zuzana</h3>
            <div className="aboutUs__about--Zuzana--foto"></div>
          </div>
          <div className="aboutUs__about--Zuzana--par">
            <p>
              Zuzana je věčný optimista, který chce věřit, že je něco dobrého v
              každém z nás. Proto také věří, že lidé tento projekt ocení a rádi
              se zapojí.
            </p>
          </div>
        </div>

        <div className="aboutUs__about--Jana">
          <div className="aboutUs__about--Jana--header">
            <h3>Jana</h3>
            <div className="aboutUs__about--Jana--foto"></div>
          </div>
          <div className="aboutUs__about--Jana--par">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              nostrum dicta aspernatur! Ipsum minus soluta, vero quis, pariatur,
              temporibus voluptatem a corrupti sit similique ex delectus sunt
              optio magnam nobis? Voluptatem illo omni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
