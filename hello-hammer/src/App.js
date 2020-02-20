import React from 'react';
import Hammer from 'hammerjs';

import './index.css';

const swipe = () => {
  // Get a reference to an element
  var square = document.querySelector('.square');

  // Create a manager to manager the element
  var manager = new Hammer.Manager(square);

  // Create a recognizer
  var Swipe = new Hammer.Swipe();

  // Add the recognizer to the manager
  manager.add(Swipe);

  // Declare global variables to swiped correct distance
  var deltaX = 0;
  // var deltaY = 0;

  // Subscribe to a desired event
  manager.on('swipe', function(e) {
    deltaX = deltaX + e.deltaX;
    var direction = e.offsetDirection;
    var translate3d = 'translate3d(' + deltaX + 'px, 0, 0)';
    
    if (direction === 4 || direction === 2) {
      e.target.innerText = deltaX;
      e.target.style.transform = translate3d;
    }
  });
}

const App = () => {
  return (
    <div className="app">
      <div className="flex-column center-center">
        <h1>Hello, Hammer.js!</h1>
        <h2>Swipe Left or Right</h2>
        <div className="square center-center" onClick={() => {swipe()}}></div>
      </div>
    </div>
  );
}

export default App;