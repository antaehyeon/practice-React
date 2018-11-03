import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster/>
                <h1>HELLO! MY NAME IS HOYEON FUCK MAN~</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://i.imgur.com/tSukFdb.jpg" alt=""/>
        )
    }
}

export default Movie;