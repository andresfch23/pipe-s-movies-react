import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Inicializating react
        </p>
      </div>
    );
  }
}

export default App;