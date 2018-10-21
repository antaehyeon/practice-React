import React, { Component } from 'react';
import './App.css';

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
      <div className="App">
        I LOVE REACT
      </div>
    );
  }
}

export default App;
