/* import createHistory from 'history/createBrowserHistory'; */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { readPost } from '../actions';
import PostContent from '../components/PostContent';

/* export const history = createHistory() */

class Post extends Component {
  componentWillMount() {
    this.props.readPost(this.props.match.params.id)
  }
  render() {
    const { post } = this.props
    return (
      <div>
        <h1>Post {this.props.match.params.id}</h1>
        {post && <PostContent post={this.props.post} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.activePost,
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ readPost }, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
