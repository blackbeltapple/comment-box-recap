import React from 'react';
import Comment from './comment.js';

const CommentList = React.createClass({

  render: function () {
    return (
      <div>
        <label className="label">Comments</label>

        {
          this.props.comments.map(function (comment, i) {
            return <Comment key={i} {...comment} />;
          })
        }
      </div>
    );
  }

});

export default CommentList;
