import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <tr>
        <td>
          1.
        </td>
        <td>
          Matrix
        </td>
        <td>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-ok"></span>
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