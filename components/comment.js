import React from 'react';
//import {render} from 'react-dom';

const Comment = React.createClass({

  render: function () {
    return (
      <div className='box' >
        <p>{this.props.name}</p>
        <p>{this.props.body}</p>

      </div>
    );
  }
});

export default Comment;
