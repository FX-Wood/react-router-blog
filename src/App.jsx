import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import MainBlog from './MainBlog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <MainBlog />
      </div>
    );
  }
}

export default App;
