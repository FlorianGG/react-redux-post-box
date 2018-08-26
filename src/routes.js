import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import Post from './containers/Post';
import PostForm from './containers/PostForm';
import PostList from './containers/PostList';

class Routes extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={PostList}/>
              <Route path="/create-form" component={PostForm}/>
              <Route path="/post/:id" component={Post}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default Routes;
