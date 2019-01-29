import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <>
        <a href={this.props.children}>Movie: {this.props.name}</a>
        <br></br>
      </>
    );
  }
}

export default Movie;
