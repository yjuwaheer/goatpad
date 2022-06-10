import React from "react";
import { useCollection } from "../../hooks/useCollection";

import styled from "styled-components";

import Post from "./Post";

// Styled components
const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 0 50px;
  width: 100%;

  @media (max-width: 1150px) {
    margin: 50px;
    width: auto;
  }
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

const NoPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #fafafa;
  color: #A4A4A4;
  border-radius: 5px;
`;

const PostList = () => {
  const { documents } = useCollection("posts", null, ["timestamp", "desc"]);

  return (
    <PostListContainer>
      <PostHeading>Posts List</PostHeading>
      {!documents && <LoadingPost></LoadingPost>}
      {!documents && <LoadingPost></LoadingPost>}
      {!documents && <LoadingPost></LoadingPost>}

      {documents && documents.length == 0 && (
        <NoPosts>
          <h3>No posts yet</h3>
          <h4>Try adding one</h4>
        </NoPosts>
      )}

      {documents &&
        documents.map((post) => <Post postData={post} key={post.id} />)}
    </PostListContainer>
  );
};

export default PostList;
