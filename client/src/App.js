import React from 'react';
import logo from './logo.svg';
import Home from './home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Home/>
          Home goes here ^^^
        </a>
      </header>
    </div>
  );
}

export default App;
