import React from 'react'
import styled from 'styled-components'

const PostCard = styled.div`
  border: 1px solid rgba(30, 30, 100, 0.8);
  border-radius: 3px;
  margin-bottom: 20px;
  width: 100%;
`

const Tag = styled.div`
  font-size: 0.8rem;
  background-color: rgba(30, 30, 30, 0.5);
  color: #ccc;
  padding: 3px 5px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 3px;
  margin-bottom: 2px;
`

export const TopicBar = styled.div`
  background-color: rgba(30, 30, 100, 0.8);
  padding: 2px 0px 2px 4px;
  display: flex;
`

const Post = ({ postData }) => {
  const { title, topics, post, postBody, timestamp } = postData

  const postedAt = timestamp?.toDate().toString() || null

  return (
    
      <PostCard>
        {topics ? (
          <TopicBar>
            {topics.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </TopicBar>
        ) : null}
        <h3>{title}</h3>
        <p>{post || postBody}</p>
        {postedAt && <p>Posted at: {postedAt}</p>}
      </PostCard>
    
  )
}

export default Post
