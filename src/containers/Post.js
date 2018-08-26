import React, { Component } from 'react';

import PostContent from '../components/PostContent';


class Post extends Component {
  render() {
    return (
      <div>
        <h1>Post {this.props.match.params.id}</h1>
        <PostContent />
      </div>
    );
  }
}

export default Post;
