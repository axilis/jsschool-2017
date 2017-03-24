import React, { Component } from 'react';

class AddMovieBox extends Component {
    render() {
        return (
            <div>
              Add movie: <input type="text"/><br/>
              <button className="btn btn-primary">Add</button>
            </div>
            );
    }
}

export default AddMovieBox;