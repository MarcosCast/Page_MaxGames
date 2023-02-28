import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vamos lá Max Games
        </p>
        <p>Novo Projeto em andamento...</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bem vindo
        </a>
      </header>
    </div>
  );
}

export default App;
