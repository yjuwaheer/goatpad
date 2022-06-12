import React from "react";

import { useAuthContext } from "../hooks/useAuthContext";

import PostList from "../components/posts/PostList";
import PostForm from "../components/posts/PostForm";
import styled from "styled-components";

const PostsContainer = styled.div`
  display: flex;

  @media (max-width: 1150px) {
    flex-direction: column-reverse;
  }
`;

const Posts = () => {
  const { user } = useAuthContext();

  return (
    <PostsContainer>
      <PostList />
      {user && <PostForm />}
    </PostsContainer>
  );
};

export default Posts;
