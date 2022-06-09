import React from "react";
import styled from "styled-components";

const PostCard = styled.div`
  border: 1px solid rgba(30, 30, 100, 0.8);
  border-radius: 3px;
  margin-bottom: 20px;
  width: 100%;
`;

const Tag = styled.div`
  font-size: 0.8rem;
  background-color: rgba(30, 30, 30, 0.5);
  color: #ccc;
  padding: 3px 5px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 3px;
  margin-bottom: 2px;
`;

const TopicBar = styled.div`
  background-color: rgba(30, 30, 100, 0.8);
  padding: 2px 0px 2px 4px;
  display: flex;
`;

const PostTitle = styled.h3`
  margin: 0 1rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

const PostBody = styled.p`
  margin: 0 1rem;
  font-size: 1.1rem;
`;

const PostDate = styled.p`
  margin: 0 1rem;
  font-size: 0.9rem;
  text-align: right;
  color: #bbb;

  span {
    color: #888;
  }
`;

const Post = ({ postData }) => {
  const { title, topics, post, postBody, timestamp } = postData;

  const postedDate = timestamp?.toDate().toDateString() || null;
  const postedTime = timestamp?.toDate().toLocaleTimeString() || null;

  return (
    <PostCard>
      {topics ? (
        <TopicBar>
          {topics.map((topic) => (
            <Tag key={topic}>{topic}</Tag>
          ))}
        </TopicBar>
      ) : null}
      <PostTitle>{title}</PostTitle>
      <PostBody>{post || postBody}</PostBody>
      {postedDate && (
        <PostDate>
          Posted on <span>{postedDate}</span> at <span>{postedTime}</span>
        </PostDate>
      )}
    </PostCard>
  );
};

export default Post;
