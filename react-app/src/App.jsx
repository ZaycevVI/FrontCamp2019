import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux'
import FindMovieRoot from './components/find-movie/find-movie-root';
import MovieRoot from './components/movie/movie-root';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger()
const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route exact path="/" component={FindMovieRoot} />
          <Route exact path="/film/:id" component={MovieRoot} />
          {/* <FindMovieRoot /> */}
          {/* <MovieRoot /> */}
        </Provider>
      </Router>
    );
  }
}

export default App;
