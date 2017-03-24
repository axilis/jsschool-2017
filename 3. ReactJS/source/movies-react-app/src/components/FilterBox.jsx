import React, { Component } from 'react';

class FilterBox extends Component {
    render() {
        return (
            <div className="row">
              <div className='col-md-12'>
                Add movie:
                <input className="form-control" type="text"  /> </div>
            </div>
            );
    }
}

export default FilterBox;