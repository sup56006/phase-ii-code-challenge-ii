import React from "react";

function Post({ title, content, liked, onToggleLike }) {
  return (
    <div className="post" style={{ border: "1px solid #ccc", padding: "1em", margin: "1em 0" }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onToggleLike}>
        {liked ? "💖 Unlike" : "🤍 Like"}
      </button>
    </div>
  );
}

export default Post;
