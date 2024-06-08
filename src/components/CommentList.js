import React from "react"

function CommentList ({video}) {
    return (
        <ul>
            {video.comments.map(comment => (
                <li key={comment.id}>
                    <strong>{comment.user}:</strong> {comment.comment}

                </li>
            ))}
        </ul>
    )
}
export default CommentList