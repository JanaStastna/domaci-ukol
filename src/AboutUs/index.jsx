import React from 'react';
import './style.css';

export const AboutUs = () => {
  return (
    <div id="aboutUs" className="AboutUs">
      <h1 className="titleAbout">O nás</h1>
      <div className="About">
        <div className="AboutZuzana">
          <div className="fotoJmenoZuzana">
            <h3>Zuzana</h3>
            <div className="fotoZuzana"></div>
          </div>
          <div className="parZuzana">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sunt
              reiciendis possimus quidem voluptate aut! Fuga accusamus alias
              libero neque, officiis est iure reiciendis porro eos distinctio,
              perspiciatis ipsum voluptates possimus quo ipsa a. Ab quisquam,
              offic
            </p>
          </div>
        </div>

        <div className="AboutJana">
          <div className="fotoJmenoJana">
            <h3>Jana</h3>
            <div className="fotoJana"></div>
          </div>
          <div className="parJana">
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
