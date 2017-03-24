import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MovieList from './components/MovieList.jsx';
import FilterBox from './components/FilterBox.jsx';
import AddMovieBox from './components/AddMovieBox.jsx';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FilterBox />
        <MovieList />
        <AddMovieBox />
        <Footer />
      </div>
      );
  }
}

export default App;
