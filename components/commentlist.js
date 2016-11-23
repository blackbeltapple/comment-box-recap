import React from 'react';
import Comment from './comment.js';

const CommentList = React.createClass({

  render: function () {
    return (
      <div>
        {
          this.props.comments.map(function (comment, i) {
            return <Comment key={i} name={comment.name} body={comment.body} />;
          })
        }
      </div>
    );
  }

});

export default CommentList;
