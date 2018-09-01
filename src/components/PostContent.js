import React from 'react';

const PostContent = ({post}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{post.title}</h2>
      </div>
      <div className="card-body">
        <p className="card-text">
          {post.content}
        </p>
      </div>
      <div className="card-footer">
        <footer className="blockquote-footer">Auteur : <cite title="Auteur">{post.author}</cite></footer>
      </div>
    </div>
  );
};

export default PostContent;
