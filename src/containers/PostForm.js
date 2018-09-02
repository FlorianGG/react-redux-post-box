import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { createPost } from '../actions';

const history = createHistory()

class PostForm extends Component {
  createPost = post => {
    this.props.createPost(post)
    history.goBack()
  }
  renderInput = ({ input, meta, label }) => {
    const { touched, error, warning } = meta
    return (
      <div className="form-group row">
        <label className="col-sm-2" htmlFor={input.name}>
          {label}
        </label>
        <div className="col-sm-10">
          <input
            {...input}
            className={`form-control ${touched &&
              (error ? 'is-invalid' : 'is-valid')}`}
          />
          <div className="invalid-feedback">{touched && (error && error)}</div>
        </div>
      </div>
    )
  }
  renderTextarea = ({ input, meta, label }) => {
    const { touched, error, warning } = meta
    return (
      <div className="form-group row">
        <label className="col-sm-2" htmlFor="dd">
          {label}
        </label>
        <div className="col-sm-10">
          <textarea
            {...input}
            className={`form-control ${touched &&
              (error ? 'is-invalid' : 'is-valid')}`}
            rows="3"
          />
          <div className="invalid-feedback">{touched && (error && error)}</div>
        </div>
      </div>
    )
  }
  render() {
    const { handleSubmit, invalid } = this.props
    return (
      <div>
        <h1>Nouveau post</h1>
        <form onSubmit={handleSubmit(this.createPost)}>
          <Field
            component={this.renderInput}
            type="text"
            name="title"
            label="Titre"
          />

          <Field
            component={this.renderTextarea}
            name="content"
            label="Content"
          />

          <Field
            component={this.renderInput}
            type="text"
            name="author"
            label="Auteur"
          />
          <div className="form-row justify-content-around mt-5">
            <Link className="btn btn-primary col-4" to="/">
              Retour
            </Link>
            <button
              type="submit"
              className="btn btn-success col-4"
              disabled={invalid}
            >
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

function validate(values) {
  const errors = {}
  if (!values.title) {
    errors.title = 'Le titre est requis'
  }
  if (!values.content) {
    errors.content = 'La description est requise'
  }
  if (!values.author) {
    errors.author = "L'auteur est requis"
  }
  return errors
}

PostForm = connect(
  null,
  mapDispatchToProps
)(PostForm)
PostForm = reduxForm({
  form: 'createPostForm',
  validate,
  initialValues: {
    author: 'Moi',
  },
})(PostForm)

export default PostForm
