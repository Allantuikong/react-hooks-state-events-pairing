import React from 'react'

function VideoPlayer ({video}) {
    return (
        <div>
 <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <p>{video.views} views - {video.createdAt}</p>
        </div>
    )
}

export default VideoPlayer;
