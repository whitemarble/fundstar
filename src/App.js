import React, { Component } from 'react';
import './App.css';
import '../public/assets/css/font-awesome.css'
import MainMenu from './header/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
      </div>
    );
  }
}

export default App;
