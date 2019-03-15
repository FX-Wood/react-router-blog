import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import MainBlog from './MainBlog';
import FavoriteMovie from './FavoriteMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <MainBlog />
        <FavoriteMovie />
      </div>
    );
  }
}

export default App;
