import React, { Component, Fragment } from 'react';
import Movie from './Movie.js'

class MovieList extends Component {
  render() {
    const movies = this.props.movies.map((movie, index) => {
      return (
        <Movie
        key={ index}
        name={ movie.name }>
        {movie.url}
        </Movie>
      );
    });

    return (
      <Fragment>
        { movies }
      </Fragment>
    );
  }
}

export default MovieList;
