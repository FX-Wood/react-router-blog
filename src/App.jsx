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
import Post from './Post';
import FilmDetails from './FilmDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      movies: []
    }
  }
  componentDidMount() {
    let movies = [299537, 603]
    let movieData = []
    // get posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => this.setState({posts: res.data}))
    console.log(process.env)
    // get movie
    Promise.all(
      movies.map(movie => {
        console.log(movieData)
          return axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images&language=en`)
          .then( res => movieData.push(res.data))
      })
    ).then(this.setState({movies: movieData}))
  }
  render() {
    console.log('rendering app', this.state)
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Homepage} />
          <Route path="/blog/" render={props => <MainBlog posts={this.state.posts} />} />
          <Route path="/movie/" render={ props => <FavoriteMovie movies={this.state.movies} /> } />
          <Route path="/food/" component={FavoriteFood} />
          <Route path="/about/" component={AboutPage} />
          <Route path="/post/:id" render={ ({match}) => <Post {...this.state.posts.find(p => p.id === parseInt(match.params.id))} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
