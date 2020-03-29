import React, { Component } from 'react';
import './App.css';
import './App.module.scss';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <Title text="CSS HOVER MASK" />
        </div>
      </div>
    );
  }
}

export default App;
