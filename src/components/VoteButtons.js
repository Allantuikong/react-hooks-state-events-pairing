// VoteButtons.js
import React, { useState } from 'react';

function VoteButtons({ initialUpvotes, initialDownvotes }) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  const handleUpvote = () => setUpvotes(upvotes + 1);
  const handleDownvote = () => setDownvotes(downvotes + 1);

  return (
    <div>
      <button onClick={handleUpvote}>👍</button>
      <span>{upvotes}</span>
      <button onClick={handleDownvote}>👎</button>
      <span>{downvotes}</span>
    </div>
  );
}

export default VoteButtons;
