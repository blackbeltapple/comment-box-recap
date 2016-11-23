import React from 'react';
//import {render} from 'react-dom';

import CommentList from './commentlist.js';
import CommentForm from './commentform.js';


const CommentBox = React.createClass({

  render: function () {
    return (
      <div className='box' >
        <p>CommentBox</p>
        <div className='box' ><CommentList /></div>
        <div className='box' ><CommentForm /></div>

      </div>

    );
  }
});

export default CommentBox;