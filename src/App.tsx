import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Max Games</h1>
        <p>
          Vamos lá Max Games
        </p>
        <p>Novo Projeto em andamento...</p>
        <a
          href='www.linkedin.com.br/in/marcos--castro'
        >
          Bem vindo
        </a>
      </header>
    </div>
  );
}

export default App;
