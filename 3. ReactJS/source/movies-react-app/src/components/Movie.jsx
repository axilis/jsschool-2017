import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <tr>
        <td>
          { this.props.index + 1 }
        </td>
        <td>
          { this.props.movie.title }
        </td>
        <td>
          <button onClick={ () => this.props.setMovieWatchChangedEvent(this.props.movie._id, !this.props.movie.isWatched) } className="btn btn-default">
            <span className={ this.props.movie.isWatched ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-minus" }></span>
          </button>
        </td>
        <td>
          <button className="btn btn-danger">
            <span className="glyphicon glyphicon-trash"></span>
          </button>
        </td>
      </tr>
      );
  }
}

export default Movie;