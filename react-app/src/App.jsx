import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux'
import FindMovieRoot from './components/find-movie/find-movie-root';
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
      <Provider store={store}>
        <FindMovieRoot />
      </Provider>
    );
  }
}

export default App;
