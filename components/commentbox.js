import React from 'react';

import CommentList from './commentlist.js';
import CommentForm from './commentform.js';

const CommentBox = React.createClass({
  getInitialState: function () {
    return {
      sComments: this.props.comments
    };
  },
  addComment: function (newComment) {
    console.log('addComment called');
    this.setState({
      sComments: this.state.sComments.concat([newComment])
    });
  },
  render: function () {
    return (
      <div className='box' >
        <label className='label'>CommentBox Application</label>
        <div><CommentList comments={this.state.sComments} /></div>
        <div><CommentForm addComment={this.addComment} /></div>
      </div>
    );
  }
});

export default CommentBox;
