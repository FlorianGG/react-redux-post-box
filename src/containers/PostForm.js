import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { createPost } from '../actions';
import { history } from '../containers/Post';

class PostForm extends Component {
  createPost = post => {
    this.props.createPost(post)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <h1>Nouveau post</h1>
        <form onSubmit={handleSubmit(this.createPost)}>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="input_title">
              Titre
            </label>
            <Field
              className="form-control col-sm-10"
              component="input"
              type="text"
              name="input_title"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="textarea_content">
              Content
            </label>
            <Field
              className="form-control col-sm-10"
              component="textarea"
              rows="3"
              name="textarea_content"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="input_author">
              Auteur
            </label>
            <Field
              className="form-control col-sm-10"
              component="input"
              type="text"
              name="input_author"
            />
          </div>
          <div className="form-row justify-content-around mt-5">
            <Link className="btn btn-primary col-4" to="/">
              Retour
            </Link>
            <button type="submit" className="btn btn-success col-4">
              Créer
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ createPost }, dispatch),
})

PostForm = connect(
  null,
  mapDispatchToProps
)(PostForm)
PostForm = reduxForm({
  form: 'createPostForm',
})(PostForm)

export default PostForm
