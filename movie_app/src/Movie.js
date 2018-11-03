import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.isRequired,
        poster: PropTypes.isRequired,
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.isRequired,
    }

    render() {
        return (
            <img src={this.props.poster} alt=""/>
        )
    }
}

export default Movie;