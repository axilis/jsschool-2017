import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    const hello = () => {
      return (<h1>Hello</h1>);
    };

    const world = () => {
      return (<h1>World</h1>);
    };

    const about = () => {
      return (<h1>about</h1>);
    };

    const NasLink = (props) => {
      return (
        <NavLink activeClassName="active" {...props} >
          {props.children}
        </NavLink>
      );
    }

    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <NasLink exact to="/">
                <h1>Home</h1>
                <h2>Subtitle</h2>
              </NasLink>
              <NasLink to="/world">About</NasLink>
              <NasLink to="/about">About</NasLink>
            </ul>
            <Route exact path="/" component={hello} />
            <Route path="/world" component={world} />
            <Route path="/about" component={about} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
