import React from 'react';
import logo from './logo.svg';
import './App.css';

const number = 37;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'red'
        }}>
          Hello World!
        </p>
        <p>
          {number}
        </p>
        <p>
          {50 + 10}
        </p>
        <p>
          {11}
        </p>
        <p>
          {flag && 'Flag is true'}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p>
          {flag ? 'Flag is true' : 'Flag is false'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
