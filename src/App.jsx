import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav'
import Homepage from './Homepage';
import MainBlog from './MainBlog';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import AboutPage from './AboutPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => this.setState({posts: res.data}))
  }
  render() {
    console.log('rendering app', this.state)
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Homepage} />
          <Route path="/blog/" render={props => <MainBlog posts={this.state.posts} />} />
          <Route path="/movie/" component={FavoriteMovie} />
          <Route path="/food/" component={FavoriteFood} />
          <Route path="/about/" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
