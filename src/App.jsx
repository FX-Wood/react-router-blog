import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav'
import Homepage from './Homepage';
import MainBlog from './MainBlog';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Homepage} />
          <Route path="/blog/" component={MainBlog} />
          <Route path="/movie/" component={FavoriteMovie} />
          <Route path="/food/" component={FavoriteFood} />
          <Route path="/about/" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
