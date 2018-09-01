import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Nouveau post</h1>
        <form>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="input-title">
              Titre
            </label>
            <input
              className="form-control col-sm-10"
              type="text"
              id="input-title"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="textarea-content">
              Content
            </label>
            <textarea
              className="form-control col-sm-10"
              id="textarea-content"
              rows="3"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2" htmlFor="input-author">
              Auteur
            </label>
            <input
              className="form-control col-sm-10"
              type="text"
              id="input-author"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
