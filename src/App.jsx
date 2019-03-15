import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import MainBlog from './MainBlog';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <MainBlog />
        <FavoriteMovie />
        <FavoriteFood />
        <AboutPage />
      </div>
    );
  }
}

export default App;
