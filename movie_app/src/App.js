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
    setTimeout(() => {
      // this.state.greeting = "BYE";
      this.setState({
        greeting: 'BYE',
      })
    }, 5000);
  }

  state = {
    greeting: 'HELLO !',
  }

  render() {
    console.log('RENDER');
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;
