import React from 'react';
import './Comment.css';

const Comment = () => (
    <div className="comment">
        <textarea aria-label="Add a comment…"
                  placeholder="Add a comment…"
                  className="comment-box"
                  autoComplete="off"
                  autoCorrect="off" >
        </textarea>
        <button>Post</button>
    </div>
);

export default Comment;