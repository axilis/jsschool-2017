import React, { Component } from 'react';
import Movie from './Movie.jsx';


class MovieList extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-12">
                <h3>Moji filmovi</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Watched</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                  </tbody>
                </table>
              </div>
            </div>

            );
    }
}

export default MovieList;