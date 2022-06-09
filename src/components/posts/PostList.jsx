import React from "react";
import { useCollection } from "../../hooks/useCollection";

import styled from "styled-components";

import Post from "./Post";

// Styled components
const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const PostHeading = styled.h1`
  margin-bottom: 10px;
`;

const LoadingPost = styled.div`
  background-color: #A4A4A4;
  width: 100%;
  height: 100px;
  animation: loading 0.4s linear infinite;
  border-radius: 5px;
  margin-bottom: 20px;

  @keyframes loading {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
    }
`;

const PostList = () => {
  const { documents } = useCollection("posts", null, ["timestamp", "desc"]);

  return (
    <PostListContainer>
      <PostHeading>Posts List</PostHeading>
      {!documents && <LoadingPost></LoadingPost>}
      {!documents && <LoadingPost></LoadingPost>}
      {!documents && <LoadingPost></LoadingPost>}

      {documents &&
        documents.map((post) => <Post postData={post} key={post.id} />)}
    </PostListContainer>
  );
};

export default PostList;
