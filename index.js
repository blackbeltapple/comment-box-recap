import React from 'react';
import {render} from 'react-dom';

function Comment (props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.body}</p>
    </div>
  )
}

render(
  <Comment name='Amanda' body='It works!' />,
  document.getElementById('comment-box')
);
