import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello there!
          </p>
          <a
            className="App-link"
            href="http://jgl.nyc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jgl.nyc
          </a>
        </header>
      </div>
    );
  }
}

export default App;
