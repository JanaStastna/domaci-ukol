import React from 'react';
import './style.css';

export const AboutProject = () => {
  return (
    <>
      <section className="aboutProject">
        <h1 className="mainTitle">O projektu</h1>
        <p className="parAboutProject">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero
          corrupti. Fugit incidunt alias, quasi repellat assumenda debitis iusto
          doloremque ea impedit ut aliquid excepturi, illum minima est rem
          repudiandae!
        </p>
        <div className="image"></div>
        <div className="message">
          Nedarujete jen počítač, darujete vzdělání!
        </div>
        <h3 className="title">Pro firmy</h3>
        <p className="parCompanies">
          Máte v práci nevyužitou IT techniku a lámete si hlavu, co s ní? Pojďte
          s námi podpořit školáky, kteří nemají v dobách online vzdělávání
          snadný přístup k počítači. Nevyužitou IT techniku poskytneme dále
          školám a dětským domovům, které nejlépe ví, kdo ji potřebuje.
        </p>
        <h3 className="title">Pro školy</h3>
        <p className="parSchools">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          adipisci perferendis quaerat cumque nihil obcaecati ipsa quisquam
          suscipit sed odio?
        </p>
      </section>
    </>
  );
};
