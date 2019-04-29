import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RootPage, PostPage, CategoryPage } from './Pages';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={RootPage} />
          <Route path='/category' exact component={CategoryPage} />
          <Route path='/post' exact component={PostPage} />
        </div>
      </Router>
    );
  }
}

export default App;
