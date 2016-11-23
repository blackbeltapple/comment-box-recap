import React from 'react';
//import {render} from 'react-dom';

const CommentForm = React.createClass({

  render: function () {
    return (
      <div className='box' >
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="" />
        </p>
        <label class="label">Message</label>
        <p class="control">
          <textarea class="textarea" placeholder="Comment here..."></textarea>
        </p>
        <p class="control">
          <button class="button is-primary">Submit</button>
          <button class="button is-link">Cancel</button>
        </p>

      </div>
    );
  }
});

export default CommentForm;
