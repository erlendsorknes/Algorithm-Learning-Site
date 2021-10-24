import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

function Navbar() {
    return (
        <div className="navbar">
          
            <NavbarItem/>
            <NavbarItem/>
            <NavbarItem/>
            <NavbarItem/>
            <NavbarItem/>
        </div>
    )
}

function NavbarItem() {
  return (
    <div className="navbar-item">Temp</div>
  )
}

export default App;
