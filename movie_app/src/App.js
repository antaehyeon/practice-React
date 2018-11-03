import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  componentWillMount() {
    console.log("WILL MOUNT");
  }

  componentDidMount() {
    console.log("DID MOUNT");
    setTimeout(() => {
      // this.state.greeting = "BYE";
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "PerfectStranger",
            poster: "https://newsimg.sedaily.com/2018/09/11/1S4LHMS4H2_1.jpg"
          }
        ]
      });
    }, 5000);
  }

  state = {
    greeting: "HELLO !",
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
  };

  render() {
    console.log("RENDER");
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return (
            <Movie key={index} title={movie.title} poster={movie.poster} />
          );
        })}
      </div>
    );
  }
}

export default App;
