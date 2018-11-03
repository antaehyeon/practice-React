import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentWillMount() {
    console.log("WILL MOUNT");
  }

  componentDidMount() {
    console.log("DID MOUNT");
    console.log(fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating"));
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
