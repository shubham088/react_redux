import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Posts} from "./components/posts.js"
import {PostForms} from "./components/postForm.js"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from 'redux'

const store = createStore(() => [],{}, applyMiddleware());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <PostForms />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
