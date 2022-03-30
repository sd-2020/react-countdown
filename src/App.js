import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./logo.png";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    const count = [ ...Array(100).keys() ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
  }

    return (
      <div className="App">
        <div class="background">
          {
            count.map(e => {return(<span style={{
              color: `rgb(${getRandomArbitrary(0, 255)},${getRandomArbitrary(0, 255)},${getRandomArbitrary(0, 255)},0.2)`,
              top: `${getRandomArbitrary(0,100)}%`,
              left: `${getRandomArbitrary(0,100)}%`,
              animationDuration: `${getRandomArbitrary(10,30)}s`,
              animationDelay: `${getRandomArbitrary(0.1,0.3)}s`,
              transformOrigin: `${getRandomArbitrary(5,95)}% ${getRandomArbitrary(5,95)}%`,
              boxShadow: `${getRandomArbitrary(13,15)}vmin 0 4.302147264608503vmin`,
            }}></span>)})
          }


        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PHOTOSHOOTO</h2>
          <span style={{ color: "black" }}>Your Memories, Our Promise.</span>

        </div>


        <Countdown date={`2022-04-05T00:00:00`} />
        <h3 className="title">
          We will be live soon
        </h3>
        Siddayya Swamy


      </div>
    );
  }
}

export default App;
