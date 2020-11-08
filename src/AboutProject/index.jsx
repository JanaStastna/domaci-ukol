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
      <section className="aboutProject">
        <div className="section1">
          <div className="sectionProject">
            <h1 className="mainTitle">O projektu</h1>
            <p className="parAboutProject">
              Pandemie koronaviru přenusula studium do online prostředí, ale
              mnoho žáků a studentů nemá vyhovující podmínky a každým dnem jim
              tak utíká část výuky. Tuto zrátu budou po návratu do škol stěží
              dohánět. Pojďme společně pomoci tam, kde je to potřeba!
            </p>
          </div>
          <div className="image"></div>
          <div className="message">
            Nedarujete jen počítač, darujete vzdělání!
          </div>
        </div>
        <div className="section2">
          <div className="forCompanies">
            <h3 className="title">Pro firmy</h3>
            <p className="parCompanies">
              Máte v práci nevyužitou IT techniku a lámete si hlavu, co s ní?
              Pojďte s námi podpořit školáky, kteří nemají v dobách online
              vzdělávání snadný přístup k počítači. Nevyužitou IT techniku
              poskytneme dále školám a dětským domovům, které nejlépe ví, kdo ji
              potřebuje.
            </p>
          </div>
          <div className="forSchools">
            <h3 className="title">Pro školy</h3>
            <p className="parSchools">
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
