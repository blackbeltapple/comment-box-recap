import React from 'react';
//import {render} from 'react-dom';
import Comment from './comment.js';


const CommentList = React.createClass({

  render: function () {
    return (
      <div className='box' >
        <Comment />
        <Comment />
        <Comment /><Comment />
      </div>
    );
  }
});

export default CommentList;
