import React, { Component } from 'react';
import './App.css';
import MyName from './MyName.js';
import Counter from './Counter.js';

class App extends Component {
  render() {

    // variable
    const name = 'REACT';

    // CSS
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px',
    };

    // JSX
    return (
      <div>
        <div className="App">
        I LOVE REACT
        </div>
        <MyName></MyName>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
