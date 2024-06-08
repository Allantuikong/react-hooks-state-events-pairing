// App.js
import React from 'react';
import video from '../data/video.js';
import VideoPlayer from './VideoPlayer';
import CommentsList from './CommentList';
import VoteButtons from './VoteButtons';
import ToggleCommentsButton from './ToggleCommentsButton';

function App() {
  return (
    <div className="App">
      <VideoPlayer video={video} />
      <VoteButtons initialUpvotes={video.upvotes} initialDownvotes={video.downvotes} />
      <ToggleCommentsButton video={video} />
    </div>
  );
}

export default App;

