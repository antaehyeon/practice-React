import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'Matrix',
    poster: 'https://i.imgur.com/ZhmnxQC.png',
  },
  {
    title: 'Full Metal Jacket',
    poster: 'https://i.imgur.com/ZhmnxQC.png',
  },
  {
    title: 'Oldboy',
    poster: 'https://i.imgur.com/tSukFdb.jpg',
  },
  {
    title: 'Star Wars',
    poster: 'https://i.imgur.com/KV4jBox.jpg',
  },
];

class App extends Component {

  componentWillMount() {
    console.log('WILL MOUNT');
  }

  componentDidMount() {
    console.log('DID MOUNT');
  }

  render() {
    console.log('RENDER');
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;
