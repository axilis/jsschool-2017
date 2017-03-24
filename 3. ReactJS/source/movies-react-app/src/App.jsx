import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MovieList from './components/MovieList.jsx';
import FilterBox from './components/FilterBox.jsx';
import AddMovieBox from './components/AddMovieBox.jsx';
import Loading from 'react-loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: false,
      isError: false
    };
    // ensuring our this in set movie object is correct
    // no matter who is calling it
    this.setMovieWatched = this.setMovieWatched.bind(this);
  }

  componentDidMount() {
    // fake going to the "server"... for now
    let movies = [{
      _id: 1,
      title: "Matrix",
      isWatched: true
    }, {
      _id: 2,
      title: "Matrix 2",
      isWatched: false
    }]

    this.setState({
      movies: movies
    });
  }

  setMovieWatched(_id, isWatched) {
    let newListOfMovies = this.state.movies.map(m => {
      if (m._id !== _id) {
        return m;
      }
      var newMovieObject = Object.assign({}, m, {
        isWatched: isWatched
      });

      return newMovieObject;

      // Equivalent but worse variant:
      // let newObject = {
      //   name: m.name,
      //   _id : m._id,
      //   isWatched: change.isWatched
      // };

      // return newMovieObject;
    });

    this.setState({
      movies: newListOfMovies
    });
  }

  render() {
    return (
      <div className="container">
        { this.state.isError && <div style={ { color: "red" } }>Error :(</div> }
        <Header text="My movie list" />
        <FilterBox />
        <MovieList movies={ this.state.movies } setMovieWatchChangedEvent={this.setMovieWatched} />
        <AddMovieBox />
        <Footer company="Axilis JS School" />
        { this.state.isLoading && <Loading type='balls' color='#000000' /> }
      </div>
      );
  }
}

export default App;
