import React from "react";

import { useAuthContext } from "../hooks/useAuthContext";

import PostList from "../components/posts/PostList";
import PostForm from "../components/posts/PostForm";

const Posts = () => {
  const { user } = useAuthContext();

  return (
    <div>
      {user && <PostForm />}
      <PostList />
    </div>
  );
};

export default Posts;
