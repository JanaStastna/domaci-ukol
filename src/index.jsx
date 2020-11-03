import React from 'react';
import { render } from 'react-dom';
import './index.html';

render(
  <>
    <header>
      <h1>O projektu Počítače pro školáky</h1>
    </header>
    <main>
      <p>#pocitaceproskolaky</p>
    </main>
    <footer>Jana Šťastná & Zuzana Bělašková</footer>
  </>,
  document.querySelector('#app')
);
