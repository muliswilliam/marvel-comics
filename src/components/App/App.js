import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from '../Nav/Nav';
import { Routes } from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>{Routes({ ...this.props })}</Router>
      </div>
    );
  }
}

export default App;
