import React from 'react';
import './style.css';

/*
const imageComputer = {
  image: '../img/computer.jpg',
};
*/

export const AboutProject = () => {
  return (
    <>
      <section id="aboutProject" className="aboutProject">
        <div className="aboutProject__section1">
          <div className="aboutProject__section1--mainInfo">
            <h1 className="aboutProject__section1--mainInfo--title">
              O projektu
            </h1>
            <p className="aboutProject__section1--mainInfo--par">
              Pandemie koronaviru přenusula studium do online prostředí. Mnoho
              žáků a studentů ale nemá vyhovující podmínky a každým dnem jim tak
              utíká část výuky. Tuto zrátu budou po návratu do škol stěží
              dohánět. Pojďme společně pomoci! Dostaňme nepotřebnou IT techniku
              ke studentům, kteří ji potřebují.
            </p>
          </div>
          <div className="aboutProject__section1--message">
            Nedarujete jen počítač, darujete vzdělání!
          </div>
        </div>
        <div className="aboutProject__section2">
          <div className="aboutProject__section2--forCompanies">
            <h3 className="aboutProject__section2--title">Pro firmy</h3>
            <p className="aboutProject__section2--par">
              Máte v práci nevyužitou IT techniku a lámete si hlavu, co s ní?
              Pojďte s námi podpořit školáky, kteří nemají v dobách online
              vzdělávání snadný přístup k počítači. Nevyužitou IT techniku
              poskytneme dále školám a dětským domovům, které nejlépe ví, kdo ji
              potřebuje.
            </p>
          </div>
          <div className="aboutProject__section2--forSchools">
            <h3 className="aboutProject__section2--title">Pro školy</h3>
            <p className="aboutProject__section2--par">
              Pokud zastupujete školu nebo dětský domov a víte o studentovi,
              kterému bychom mohli pomoci, dejte nám vědět a vyplňte krátký
              formulář. Děkujeme!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
