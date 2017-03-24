import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MovieList from './components/MovieList.jsx';
import FilterBox from './components/FilterBox.jsx';
import AddMovieBox from './components/AddMovieBox.jsx';
import Loading from 'react-loading';
import uuid from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: false,
      isError: false,
      // pull the state up, we'll need this kind of power in the App component!
      // since filter text needs to be reset when e.g. movie is added,
      // we'll have a hard time if the filter text state is burried in the filter box component. 
      // To communicate "hey, change your state of the filter text to blank" down to child -> not so easy.
      // if the child does not have state and just blindly listens to parent (via props),
      // parent has all the control it needs. Just set the state of filter text on the parent,
      // and child blindly listens.
      filterText: "",
      addMovieText: ""
    };
    // ensuring our this in set movie object is correct
    // no matter who is calling it
    this.setMovieWatched = this.setMovieWatched.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleFilterInputChange = this.handleFilterInputChange.bind(this);
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {

    this.setState({
      isError: false,
      isLoading: true
    });

    let _this = this;

    fetch('http://localhost:3000/movie/all').then((response) => response.json())
      .then((movies) => {
        _this.setState({
          movies: movies,
          isLoading: false
        });
      })
      .catch((error) => {
        _this.setState({
          movies: [],
          isLoading: false,
          isError: true
        });
      });
  }

  addMovie() {
    let newMovie = {
      _id: uuid(),
      title: this.state.addMovieText,
      isWatched: false
    };

    this.setState({
      movies: [...this.state.movies, newMovie],
      addMovieText: "",
      filterText: ""
    });
  }


  deleteMovie(_id) {
    this.setState({
      movies: this.state.movies.filter(m => m._id !== _id)
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

  handleFilterInputChange(event) {
    this.setState({
      filterText: event.target.value
    });
  }

  handleAddMovieInputChange(event) {
    this.setState({
      addMovieText: event.target.value
    });
  }

  getFilteredMovies() {
    var filter = this.state.filterText.toLowerCase();
    return this.state.movies.filter(m => m.title && m.title.toLowerCase().startsWith(filter));
  }

  render() {
    return (
      <div className="container">
        { this.state.isError && <div style={ { color: "red" } }>Error :(</div> }
        <Header text="My movie list" />
        <FilterBox value={ this.state.filterText } inputChangedEvent={ this.handleFilterInputChange } />
        <MovieList movies={ this.getFilteredMovies() } setMovieWatchChangedEvent={ this.setMovieWatched } deleteMovieEvent={ this.deleteMovie } />
        <AddMovieBox value={ this.state.addMovieText } inputChangedEvent={ this.handleAddMovieInputChange } addMovieEvent={ this.addMovie } />
        <Footer company="Axilis JS School" />
        { this.state.isLoading && <Loading type='balls' color='#000000' /> }
      </div>
      );
  }
}

export default App;
