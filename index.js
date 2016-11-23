import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import CommentBox from './components/commentbox.js';

render(
    <CommentBox/>,
    document.getElementById('comment-box')
);
