import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="col-md-12">{this.props.text}</h1>
            </div>
        );
    }
}

export default Header;