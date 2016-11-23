import React from 'react';
//import {render} from 'react-dom';

import CommentList from './commentlist.js';
import CommentForm from './commentform.js';


const CommentBox = React.createClass({

  render: function () {
    return (
      <div className='box' >
        <p>CommentBox</p>
        <div><CommentList comments={this.props.comments}/></div>
        <div><CommentForm /></div>

      </div>

    );
  }
});

export default CommentBox;
