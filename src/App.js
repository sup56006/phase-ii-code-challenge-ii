import React, { useState } from "react";
import postsData from "./data/posts";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState(postsData);

  function handleToggleLike(id) {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <PostList posts={posts} onToggleLike={handleToggleLike} />
    </div>
  );
}

export default App;
