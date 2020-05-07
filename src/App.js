import React, { Component } from 'react';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={`${style.App} ${style.blue}`}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
