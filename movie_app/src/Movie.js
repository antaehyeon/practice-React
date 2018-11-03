import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

function MoviePoster({ poster }) {
  return <img src={poster} alt="Movie Poster" />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;
