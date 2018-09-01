import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { bindActionCreators } from 'redux';

import '../style/style.css';

import { deletePost, readAllPost } from '../actions';
import PostListItem from '../components/PostListItem';

library.add(faPlus)

class PostList extends Component {
  componentWillMount() {
    this.props.readAllPost()
  }

  //arrow function for bind this
  deletePostCallback = post => {
    this.props.deletePost(post.id)
  }
  render() {
    const { posts } = this.props
    return (
      <div>
        <h1>Liste des posts</h1>
        <div className="buttonAdd">
          <Link to="create-form">
            <button className="btn btn-primary rounded-circle btn-lg">
              <FontAwesomeIcon icon="plus" />
            </button>
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>

          <TransitionGroup component="tbody">
            {posts &&
              posts.map(post => {
                return (
                  <CSSTransition key={post.id} timeout={500} classNames="fade">
                    <PostListItem
                      key={post.id}
                      post={post}
                      deletePostCallback={this.deletePostCallback}
                    />
                  </CSSTransition>
                )
              })}
          </TransitionGroup>
        </table>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ readAllPost, deletePost }, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
