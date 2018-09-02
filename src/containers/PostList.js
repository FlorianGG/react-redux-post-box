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
  state = {
    displayOnlyMyPost: false,
  }
  componentWillMount() {
    this.props.readAllPost()
  }

  //arrow function for bind this
  deletePostCallback = post => {
    this.props.deletePost(post.id)
  }
  //arrow function for bind this
  changeDisplayedPost = e => {
    this.setState({ displayOnlyMyPost: e.target.checked })
  }
  filterMyPost(postsList) {
    return postsList.filter(post => {
      if (post.author === 'Moi') {
        return true
      } else {
        false
      }
    })
  }
  render() {
    const { posts } = this.props
    let arrayPosts
    if (posts) {
      if (this.state.displayOnlyMyPost) {
        arrayPosts = this.filterMyPost(posts)
      } else {
        arrayPosts = posts
      }
    }

    return (
      <div>
        <h1>Liste des posts</h1>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="myPosts"
            onChange={this.changeDisplayedPost}
          />
          <label className="form-check-label" htmlFor="myPosts">
            Afficher uniquement mes posts
          </label>
        </div>
        <div className="buttonAdd">
          <Link
            to="create-form"
            className="btn btn-primary rounded-circle btn-lg"
          >
            <FontAwesomeIcon icon="plus" />
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
            {arrayPosts &&
              arrayPosts.map(post => {
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
