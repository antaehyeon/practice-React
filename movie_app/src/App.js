import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {
    greeting: "HELLO !"
  };

  componentWillMount() {
    console.log("WILL MOUNT");
  }

  componentDidMount() {
    console.log("DID MOUNT");
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://i.imgur.com/ZhmnxQC.png"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://i.imgur.com/ZhmnxQC.png"
          },
          {
            title: "Oldboy",
            poster: "https://i.imgur.com/tSukFdb.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://i.imgur.com/KV4jBox.jpg"
          }
        ]
      });
    }, 2000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index} title={movie.title} poster={movie.poster} />;
    });
    return movies;
  };

  render() {
    console.log("RENDER");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "LOADING :)"}
      </div>
    );
  }
}

export default App;
