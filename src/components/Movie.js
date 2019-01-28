import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <>
        <p>Movie: {this.props.name}</p>
        <p>url: {this.props.children}</p>
      </>
    );
  }
}

export default Movie;
