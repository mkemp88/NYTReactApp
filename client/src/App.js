import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/home.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Article from './pages/articles/articles';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/articles" component={Article}/>
        </div>
      </Router>
    );
  }
}

export default App;
