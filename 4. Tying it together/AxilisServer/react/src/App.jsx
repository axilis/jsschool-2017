import React, { Component } from 'react';
import MovieComponent from './MovieComponent';
import LoginComponent from './LoginComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ MovieComponent }/>
          <Route exact path="/login" component={ LoginComponent }/>
        </div>
      </Router>
    );
  }
}

export default App;
