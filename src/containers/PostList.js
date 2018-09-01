import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { readAllPost } from '../actions';
import PostListItem from '../components/PostListItem';

class PostList extends Component {
  componentWillMount(){
    this.props.readAllPost();
  }
  render() {
    const {posts} = this.props;
    return (
      <div>
        <h1>Liste des posts</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              posts && posts.map((post) => {
                return <PostListItem key={post.id} post={post}/>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    posts : state.posts
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({readAllPost}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
