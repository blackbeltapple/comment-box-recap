import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import CommentBox from './components/commentbox.js';

const initialComments = [
  {name: 'Amanda M', body: 'What time is it?'},
  {name: 'Bobby', body: 'Lunchtime?'}

];

render(
    <CommentBox comments={initialComments}/>,
    document.getElementById('comment-box')
);
