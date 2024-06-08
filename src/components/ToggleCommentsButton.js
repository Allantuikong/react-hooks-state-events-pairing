import React, { useState } from 'react';
import CommentsList from './CommentList';

function ToggleCommentsButton({ video }) {
  const [showComments, setShowComments] = useState(true);

  const toggleCommentsVisibility = () => setShowComments(!showComments);

  return (
    <div>
      <button onClick={toggleCommentsVisibility}>{showComments? "Hide Comments" : "Show Comments"}</button>
      {showComments && <CommentsList video={video} />}
    </div>
  );
}

export default ToggleCommentsButton;