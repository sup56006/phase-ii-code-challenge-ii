import React from "react";
import Post from "./Post";

function PostList({ posts, onToggleLike }) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          liked={post.liked}
          onToggleLike={() => onToggleLike(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
