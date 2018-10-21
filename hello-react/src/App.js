import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';

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
      <fragment>
        <div className="App">
        I LOVE REACT
        </div>
        <MyName></MyName>
      </fragment>
    );
  }
}

export default App;
