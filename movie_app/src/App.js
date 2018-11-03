import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  'Matrix',
  'Full Metal Jacket',
  'Oldboy',
  'Star Wars',
]

const movieImages = [
  'https://i.imgur.com/ZhmnxQC.png',
  'https://i.imgur.com/ZhmnxQC.png',
  'https://i.imgur.com/tSukFdb.jpg',
  'https://i.imgur.com/KV4jBox.jpg',
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
