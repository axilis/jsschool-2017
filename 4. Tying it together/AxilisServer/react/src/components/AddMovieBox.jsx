import React, { Component } from 'react';

class AddMovieBox extends Component {
    render() {
        return (
            <div>
              Add movie: <input onChange={this.props.inputChangedEvent} value={this.props.value} type="text"/><br/>
              <button onClick={this.props.addMovieEvent} className="btn btn-primary">Add</button>
            </div>
            );
    }
}

export default AddMovieBox;